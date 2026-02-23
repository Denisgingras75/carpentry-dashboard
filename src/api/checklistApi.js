import { supabase } from '../lib/supabase'
import { createClassifiedError } from '../utils/errorHandler'
import { logger } from '../utils/logger'

/**
 * Checklist API - CRUD for checklist_items + checklist_completions tables
 */

export const checklistApi = {
  /**
   * Get all checklist items for a user
   * @param {string} userId - User ID
   * @returns {Promise<Array>} Array of checklist item records ordered by sort_order
   */
  async getItems(userId) {
    try {
      const { data, error } = await supabase
        .from('checklist_items')
        .select('*')
        .eq('user_id', userId)
        .order('sort_order', { ascending: true })

      if (error) throw createClassifiedError(error)

      return data || []
    } catch (error) {
      logger.error('Error fetching checklist items:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Create a new checklist item
   * @param {string} userId - User ID
   * @param {Object} data - Checklist item fields (title, category, frequency, sort_order)
   * @returns {Promise<Object>} Created checklist item record
   */
  async createItem(userId, data) {
    try {
      const { data: record, error } = await supabase
        .from('checklist_items')
        .insert({ ...data, user_id: userId })
        .select()
        .single()

      if (error) throw createClassifiedError(error)

      return record
    } catch (error) {
      logger.error('Error creating checklist item:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Update a checklist item
   * @param {string} id - Checklist item ID
   * @param {Object} data - Fields to update
   * @returns {Promise<Object>} Updated checklist item record
   */
  async updateItem(id, data) {
    try {
      const { data: record, error } = await supabase
        .from('checklist_items')
        .update(data)
        .eq('id', id)
        .select()
        .single()

      if (error) throw createClassifiedError(error)

      return record
    } catch (error) {
      logger.error('Error updating checklist item:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Delete a checklist item
   * @param {string} id - Checklist item ID
   * @returns {Promise<Object>} Success status
   */
  async deleteItem(id) {
    try {
      const { error } = await supabase
        .from('checklist_items')
        .delete()
        .eq('id', id)

      if (error) throw createClassifiedError(error)

      return { success: true }
    } catch (error) {
      logger.error('Error deleting checklist item:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Get completions for a user for a given week
   * @param {string} userId - User ID
   * @param {string} weekOf - ISO date string for the Monday of the week (YYYY-MM-DD)
   * @returns {Promise<Array>} Array of completion records for that week
   */
  async getCompletions(userId, weekOf) {
    try {
      const { data, error } = await supabase
        .from('checklist_completions')
        .select('*')
        .eq('user_id', userId)
        .eq('week_of', weekOf)

      if (error) throw createClassifiedError(error)

      return data || []
    } catch (error) {
      logger.error('Error fetching checklist completions:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Toggle a checklist completion — insert if missing, delete if exists
   * @param {string} userId - User ID
   * @param {string} itemId - Checklist item ID
   * @param {string} weekOf - ISO date string for the Monday of the week (YYYY-MM-DD)
   * @returns {Promise<Object>} Result with completed boolean
   */
  async toggleCompletion(userId, itemId, weekOf) {
    try {
      // Check if completion already exists
      const { data: existing, error: fetchError } = await supabase
        .from('checklist_completions')
        .select('id')
        .eq('user_id', userId)
        .eq('checklist_item_id', itemId)
        .eq('week_of', weekOf)
        .maybeSingle()

      if (fetchError) throw createClassifiedError(fetchError)

      if (existing) {
        // Delete existing completion (un-check)
        const { error: deleteError } = await supabase
          .from('checklist_completions')
          .delete()
          .eq('id', existing.id)

        if (deleteError) throw createClassifiedError(deleteError)

        return { completed: false }
      } else {
        // Insert new completion (check)
        const { error: insertError } = await supabase
          .from('checklist_completions')
          .insert({
            user_id: userId,
            checklist_item_id: itemId,
            week_of: weekOf,
          })

        if (insertError) throw createClassifiedError(insertError)

        return { completed: true }
      }
    } catch (error) {
      logger.error('Error toggling checklist completion:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },
}
