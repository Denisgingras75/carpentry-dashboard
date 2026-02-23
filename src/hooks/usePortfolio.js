import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { portfolioApi } from '../api'
import { getUserMessage } from '../utils/errorHandler'

export function usePortfolio(userId) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['portfolio', userId],
    queryFn: () => portfolioApi.getAll(userId),
    enabled: !!userId,
  })
  return {
    items: data || [],
    loading: isLoading,
    error: error ? { message: getUserMessage(error, 'loading portfolio') } : null,
  }
}

export function usePortfolioItem(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['portfolioItem', id],
    queryFn: () => portfolioApi.getById(id),
    enabled: !!id,
  })
  return {
    item: data,
    loading: isLoading,
    error: error ? { message: getUserMessage(error, 'loading portfolio item') } : null,
  }
}

export function useCreatePortfolioItem() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ userId, data }) => portfolioApi.create(userId, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['portfolio'] }),
  })
}

export function useUpdatePortfolioItem() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }) => portfolioApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolio'] })
      queryClient.invalidateQueries({ queryKey: ['portfolioItem'] })
    },
  })
}

export function useDeletePortfolioItem() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id) => portfolioApi.delete(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['portfolio'] }),
  })
}
