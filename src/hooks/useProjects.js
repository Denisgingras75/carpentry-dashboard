import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { projectsApi } from '../api'
import { getUserMessage } from '../utils/errorHandler'

export function useProjects(userId) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['projects', userId],
    queryFn: () => projectsApi.getAll(userId),
    enabled: !!userId,
  })
  return {
    projects: data || [],
    loading: isLoading,
    error: error ? { message: getUserMessage(error, 'loading projects') } : null,
  }
}

export function useProject(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['project', id],
    queryFn: () => projectsApi.getById(id),
    enabled: !!id,
  })
  return {
    project: data,
    loading: isLoading,
    error: error ? { message: getUserMessage(error, 'loading project') } : null,
  }
}

export function useCreateProject() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ userId, data }) => projectsApi.create(userId, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['projects'] }),
  })
}

export function useUpdateProject() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }) => projectsApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      queryClient.invalidateQueries({ queryKey: ['project'] })
    },
  })
}

export function useDeleteProject() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id) => projectsApi.delete(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['projects'] }),
  })
}

export function useMilestones(projectId) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['milestones', projectId],
    queryFn: () => projectsApi.getMilestones(projectId),
    enabled: !!projectId,
  })
  return {
    milestones: data || [],
    loading: isLoading,
    error: error ? { message: getUserMessage(error, 'loading milestones') } : null,
  }
}

export function useCreateMilestone() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ userId, projectId, title }) => projectsApi.createMilestone(userId, projectId, title),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['milestones'] }),
  })
}

export function useUpdateMilestone() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }) => projectsApi.updateMilestone(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['milestones'] }),
  })
}

export function useDeleteMilestone() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id) => projectsApi.deleteMilestone(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['milestones'] }),
  })
}
