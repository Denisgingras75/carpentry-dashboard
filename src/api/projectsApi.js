import { supabase } from '../lib/supabase'
import { createClassifiedError } from '../utils/errorHandler'
import { logger } from '../utils/logger'

/**
 * Projects API - CRUD for projects + project_milestones tables
 */

export const projectsApi = {
  /**
   * Get all projects for a user
   * @param {string} userId - User ID
   * @returns {Promise<Array>} Array of project records
   */
  async getAll(userId) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })

      if (error) throw createClassifiedError(error)

      return data || []
    } catch (error) {
      logger.error('Error fetching projects:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Get a single project by ID
   * @param {string} id - Project ID
   * @returns {Promise<Object>} Project record
   */
  async getById(id) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw createClassifiedError(error)

      return data
    } catch (error) {
      logger.error('Error fetching project:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Create a new project
   * @param {string} userId - User ID
   * @param {Object} data - Project fields
   * @returns {Promise<Object>} Created project record
   */
  async create(userId, data) {
    try {
      const { data: record, error } = await supabase
        .from('projects')
        .insert({ ...data, user_id: userId })
        .select()
        .single()

      if (error) throw createClassifiedError(error)

      return record
    } catch (error) {
      logger.error('Error creating project:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Update a project
   * @param {string} id - Project ID
   * @param {Object} data - Fields to update
   * @returns {Promise<Object>} Updated project record
   */
  async update(id, data) {
    try {
      const { data: record, error } = await supabase
        .from('projects')
        .update(data)
        .eq('id', id)
        .select()
        .single()

      if (error) throw createClassifiedError(error)

      return record
    } catch (error) {
      logger.error('Error updating project:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Delete a project
   * @param {string} id - Project ID
   * @returns {Promise<Object>} Success status
   */
  async delete(id) {
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id)

      if (error) throw createClassifiedError(error)

      return { success: true }
    } catch (error) {
      logger.error('Error deleting project:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  // --- Milestones ---

  /**
   * Get all milestones for a project
   * @param {string} projectId - Project ID
   * @returns {Promise<Array>} Array of milestone records ordered by sort_order
   */
  async getMilestones(projectId) {
    try {
      const { data, error } = await supabase
        .from('project_milestones')
        .select('*')
        .eq('project_id', projectId)
        .order('sort_order', { ascending: true })

      if (error) throw createClassifiedError(error)

      return data || []
    } catch (error) {
      logger.error('Error fetching milestones:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Create a new milestone
   * @param {string} userId - User ID
   * @param {string} projectId - Project ID
   * @param {string} title - Milestone title
   * @returns {Promise<Object>} Created milestone record
   */
  async createMilestone(userId, projectId, title) {
    try {
      const { data: record, error } = await supabase
        .from('project_milestones')
        .insert({
          user_id: userId,
          project_id: projectId,
          title,
        })
        .select()
        .single()

      if (error) throw createClassifiedError(error)

      return record
    } catch (error) {
      logger.error('Error creating milestone:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Update a milestone (toggle is_done, reorder, rename)
   * @param {string} id - Milestone ID
   * @param {Object} data - Fields to update (is_done, sort_order, title)
   * @returns {Promise<Object>} Updated milestone record
   */
  async updateMilestone(id, data) {
    try {
      const { data: record, error } = await supabase
        .from('project_milestones')
        .update(data)
        .eq('id', id)
        .select()
        .single()

      if (error) throw createClassifiedError(error)

      return record
    } catch (error) {
      logger.error('Error updating milestone:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Delete a milestone
   * @param {string} id - Milestone ID
   * @returns {Promise<Object>} Success status
   */
  async deleteMilestone(id) {
    try {
      const { error } = await supabase
        .from('project_milestones')
        .delete()
        .eq('id', id)

      if (error) throw createClassifiedError(error)

      return { success: true }
    } catch (error) {
      logger.error('Error deleting milestone:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },
}
