import { supabase } from '../lib/supabase'
import { createClassifiedError } from '../utils/errorHandler'
import { logger } from '../utils/logger'

/**
 * Photos API - CRUD for craft_photos table + Supabase Storage upload
 */

export const photosApi = {
  /**
   * Get all photos for a practice log
   * @param {string} logId - Practice log ID
   * @returns {Promise<Array>} Array of photo records
   */
  async getByLogId(logId) {
    try {
      const { data, error } = await supabase
        .from('craft_photos')
        .select('*')
        .eq('practice_log_id', logId)
        .order('created_at', { ascending: false })

      if (error) throw createClassifiedError(error)

      return data || []
    } catch (error) {
      logger.error('Error fetching photos for log:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Get all photos for a portfolio item
   * @param {string} portfolioId - Portfolio item ID
   * @returns {Promise<Array>} Array of photo records
   */
  async getByPortfolioId(portfolioId) {
    try {
      const { data, error } = await supabase
        .from('craft_photos')
        .select('*')
        .eq('portfolio_item_id', portfolioId)
        .order('created_at', { ascending: false })

      if (error) throw createClassifiedError(error)

      return data || []
    } catch (error) {
      logger.error('Error fetching photos for portfolio item:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Upload a photo to Supabase Storage and insert a craft_photos record
   * @param {string} userId - User ID
   * @param {File} file - Photo file to upload
   * @param {Object} metadata - Additional fields (practice_log_id, portfolio_item_id, caption, etc.)
   * @returns {Promise<Object>} Created photo record with public URL
   */
  async upload(userId, file, metadata = {}) {
    try {
      if (!file || !(file instanceof File)) {
        throw new Error('Invalid file provided')
      }

      const year = new Date().getFullYear()
      const uuid = crypto.randomUUID()
      const storagePath = `${userId}/${year}/${uuid}.jpg`

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('craft-photos')
        .upload(storagePath, file)

      if (uploadError) throw createClassifiedError(uploadError)

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('craft-photos')
        .getPublicUrl(storagePath)

      // Insert photo record
      const { data: record, error } = await supabase
        .from('craft_photos')
        .insert({
          user_id: userId,
          storage_path: storagePath,
          public_url: publicUrl,
          photo_type: metadata.photo_type || 'detail',
          practice_log_id: metadata.practice_log_id || null,
          portfolio_item_id: metadata.portfolio_item_id || null,
          caption: metadata.caption || null,
        })
        .select()
        .single()

      if (error) throw createClassifiedError(error)

      return record
    } catch (error) {
      logger.error('Error uploading photo:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },

  /**
   * Delete a photo from storage and the craft_photos table
   * @param {string} id - Photo record ID
   * @param {string} storagePath - Path in Supabase Storage bucket
   * @returns {Promise<Object>} Success status
   */
  async delete(id, storagePath) {
    try {
      // Delete from storage first
      if (storagePath) {
        const { error: storageError } = await supabase.storage
          .from('craft-photos')
          .remove([storagePath])

        if (storageError) {
          logger.warn('Error deleting photo from storage (continuing):', storageError)
        }
      }

      // Delete record from table
      const { error } = await supabase
        .from('craft_photos')
        .delete()
        .eq('id', id)

      if (error) throw createClassifiedError(error)

      return { success: true }
    } catch (error) {
      logger.error('Error deleting photo:', error)
      throw error.type ? error : createClassifiedError(error)
    }
  },
}
