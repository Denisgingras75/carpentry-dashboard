import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { photosApi } from '../api'
import { getUserMessage } from '../utils/errorHandler'

export function usePhotos(logId) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['photos', logId],
    queryFn: () => photosApi.getByLogId(logId),
    enabled: !!logId,
  })
  return {
    photos: data || [],
    loading: isLoading,
    error: error ? { message: getUserMessage(error, 'loading photos') } : null,
  }
}

export function usePortfolioPhotos(portfolioId) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['portfolioPhotos', portfolioId],
    queryFn: () => photosApi.getByPortfolioId(portfolioId),
    enabled: !!portfolioId,
  })
  return {
    photos: data || [],
    loading: isLoading,
    error: error ? { message: getUserMessage(error, 'loading portfolio photos') } : null,
  }
}

export function useUploadPhoto() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ userId, file, metadata }) => photosApi.upload(userId, file, metadata),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['photos'] })
      queryClient.invalidateQueries({ queryKey: ['portfolioPhotos'] })
    },
  })
}

export function useDeletePhoto() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, storagePath }) => photosApi.delete(id, storagePath),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['photos'] })
      queryClient.invalidateQueries({ queryKey: ['portfolioPhotos'] })
    },
  })
}
