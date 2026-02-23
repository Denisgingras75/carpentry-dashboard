import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { practiceLogsApi } from '../api'
import { getUserMessage } from '../utils/errorHandler'

export function usePracticeLogs(userId) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['practiceLogs', userId],
    queryFn: () => practiceLogsApi.getAll(userId),
    enabled: !!userId,
  })
  return {
    logs: data || [],
    loading: isLoading,
    error: error ? { message: getUserMessage(error, 'loading practice logs') } : null,
  }
}

export function usePracticeLog(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['practiceLog', id],
    queryFn: () => practiceLogsApi.getById(id),
    enabled: !!id,
  })
  return {
    log: data,
    loading: isLoading,
    error: error ? { message: getUserMessage(error, 'loading log') } : null,
  }
}

export function useCreatePracticeLog() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ userId, data }) => practiceLogsApi.create(userId, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['practiceLogs'] }),
  })
}

export function useUpdatePracticeLog() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }) => practiceLogsApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['practiceLogs'] })
      queryClient.invalidateQueries({ queryKey: ['practiceLog'] })
    },
  })
}

export function useDeletePracticeLog() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id) => practiceLogsApi.delete(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['practiceLogs'] }),
  })
}
