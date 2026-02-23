import { supabase } from '../lib/supabase'
import { createClassifiedError } from '../utils/errorHandler'
import { logger } from '../utils/logger'

/**
 * Portfolio API - CRUD for portfolio_items table
 */

export const portfolioApi = {
  /**
   * Get all portfolio items for a user
   * @param {string} userId - User ID
   * @returns {Promise<Array>} Array of portfolio item records
   */
  async getAll(userId) {
    try {
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .eq('user_id', userId)
        .order('completed_date', { ascending: false })

      if (error) throw createClassifiedError(error)

      return data || []
    } catch (error) {
      logger.error('Error fetching portfolio items:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Get a single portfolio item by ID
   * @param {string} id - Portfolio item ID
   * @returns {Promise<Object>} Portfolio item record
   */
  async getById(id) {
    try {
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw createClassifiedError(error)

      return data
    } catch (error) {
      logger.error('Error fetching portfolio item:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Create a new portfolio item
   * @param {string} userId - User ID
   * @param {Object} data - Portfolio item fields
   * @returns {Promise<Object>} Created portfolio item record
   */
  async create(userId, data) {
    try {
      const { data: record, error } = await supabase
        .from('portfolio_items')
        .insert({ ...data, user_id: userId })
        .select()
        .single()

      if (error) throw createClassifiedError(error)

      return record
    } catch (error) {
      logger.error('Error creating portfolio item:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Update a portfolio item
   * @param {string} id - Portfolio item ID
   * @param {Object} data - Fields to update
   * @returns {Promise<Object>} Updated portfolio item record
   */
  async update(id, data) {
    try {
      const { data: record, error } = await supabase
        .from('portfolio_items')
        .update(data)
        .eq('id', id)
        .select()
        .single()

      if (error) throw createClassifiedError(error)

      return record
    } catch (error) {
      logger.error('Error updating portfolio item:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Delete a portfolio item
   * @param {string} id - Portfolio item ID
   * @returns {Promise<Object>} Success status
   */
  async delete(id) {
    try {
      const { error } = await supabase
        .from('portfolio_items')
        .delete()
        .eq('id', id)

      if (error) throw createClassifiedError(error)

      return { success: true }
    } catch (error) {
      logger.error('Error deleting portfolio item:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },
}
