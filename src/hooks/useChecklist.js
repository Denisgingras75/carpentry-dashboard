import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { checklistApi } from '../api'
import { getUserMessage } from '../utils/errorHandler'

export function useChecklistItems(userId) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['checklistItems', userId],
    queryFn: () => checklistApi.getItems(userId),
    enabled: !!userId,
  })
  return {
    items: data || [],
    loading: isLoading,
    error: error ? { message: getUserMessage(error, 'loading checklist') } : null,
  }
}

export function useCreateChecklistItem() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ userId, data }) => checklistApi.createItem(userId, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['checklistItems'] }),
  })
}

export function useDeleteChecklistItem() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id) => checklistApi.deleteItem(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['checklistItems'] }),
  })
}

export function useChecklistCompletions(userId, weekOf) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['checklistCompletions', userId, weekOf],
    queryFn: () => checklistApi.getCompletions(userId, weekOf),
    enabled: !!userId && !!weekOf,
  })
  return {
    completions: data || [],
    loading: isLoading,
    error: error ? { message: getUserMessage(error, 'loading completions') } : null,
  }
}

export function useToggleCompletion() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ userId, itemId, weekOf, completed }) =>
      checklistApi.toggleCompletion(userId, itemId, weekOf, completed),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['checklistCompletions'] }),
  })
}
