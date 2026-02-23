import { supabase } from '../lib/supabase'
import { createClassifiedError } from '../utils/errorHandler'
import { logger } from '../utils/logger'

/**
 * Practice Logs API - CRUD for practice_logs table
 */

export const practiceLogsApi = {
  /**
   * Get all practice logs for a user
   * @param {string} userId - User ID
   * @returns {Promise<Array>} Array of practice log records
   */
  async getAll(userId) {
    try {
      const { data, error } = await supabase
        .from('practice_logs')
        .select('*')
        .eq('user_id', userId)
        .order('session_date', { ascending: false })

      if (error) throw createClassifiedError(error)

      return data || []
    } catch (error) {
      logger.error('Error fetching practice logs:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Get a single practice log by ID
   * @param {string} id - Practice log ID
   * @returns {Promise<Object>} Practice log record
   */
  async getById(id) {
    try {
      const { data, error } = await supabase
        .from('practice_logs')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw createClassifiedError(error)

      return data
    } catch (error) {
      logger.error('Error fetching practice log:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Create a new practice log
   * @param {string} userId - User ID
   * @param {Object} data - Practice log fields
   * @returns {Promise<Object>} Created practice log record
   */
  async create(userId, data) {
    try {
      const { data: record, error } = await supabase
        .from('practice_logs')
        .insert({ ...data, user_id: userId })
        .select()
        .single()

      if (error) throw createClassifiedError(error)

      return record
    } catch (error) {
      logger.error('Error creating practice log:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Update a practice log
   * @param {string} id - Practice log ID
   * @param {Object} data - Fields to update
   * @returns {Promise<Object>} Updated practice log record
   */
  async update(id, data) {
    try {
      const { data: record, error } = await supabase
        .from('practice_logs')
        .update(data)
        .eq('id', id)
        .select()
        .single()

      if (error) throw createClassifiedError(error)

      return record
    } catch (error) {
      logger.error('Error updating practice log:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Delete a practice log
   * @param {string} id - Practice log ID
   * @returns {Promise<Object>} Success status
   */
  async delete(id) {
    try {
      const { error } = await supabase
        .from('practice_logs')
        .delete()
        .eq('id', id)

      if (error) throw createClassifiedError(error)

      return { success: true }
    } catch (error) {
      logger.error('Error deleting practice log:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },
}
