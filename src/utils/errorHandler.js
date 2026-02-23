export const ErrorTypes = {
  NETWORK_ERROR: 'NETWORK_ERROR',
  TIMEOUT: 'TIMEOUT',
  AUTH_ERROR: 'AUTH_ERROR',
  UNAUTHORIZED: 'UNAUTHORIZED',
  NOT_FOUND: 'NOT_FOUND',
  CONFLICT: 'CONFLICT',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  RATE_LIMIT: 'RATE_LIMIT',
  SERVER_ERROR: 'SERVER_ERROR',
  UNKNOWN: 'UNKNOWN',
}

export function classifyError(error) {
  if (!error) return ErrorTypes.UNKNOWN

  const message = (error.message || '').toLowerCase()
  const code = error.code || error.status

  if (message.includes('network') || message.includes('failed to fetch')) return ErrorTypes.NETWORK_ERROR
  if (message.includes('timeout') || message.includes('timed out')) return ErrorTypes.TIMEOUT
  if (code === 401 || message.includes('unauthorized') || message.includes('not authenticated')) return ErrorTypes.AUTH_ERROR
  if (code === 403 || message.includes('forbidden')) return ErrorTypes.UNAUTHORIZED
  if (code === 404 || message.includes('not found')) return ErrorTypes.NOT_FOUND
  if (code === 409 || message.includes('conflict') || message.includes('already exists')) return ErrorTypes.CONFLICT
  if (code === 400 || message.includes('invalid') || message.includes('validation')) return ErrorTypes.VALIDATION_ERROR
  if (code === 429 || message.includes('too many')) return ErrorTypes.RATE_LIMIT
  if (code >= 500) return ErrorTypes.SERVER_ERROR

  return ErrorTypes.UNKNOWN
}

export function getUserMessage(error, context = '') {
  const errorType = classifyError(error)
  const ctx = context ? ` while ${context}` : ''

  const messages = {
    [ErrorTypes.NETWORK_ERROR]: `No internet connection${ctx}. Check your WiFi and try again.`,
    [ErrorTypes.TIMEOUT]: `Request timed out${ctx}. Please try again.`,
    [ErrorTypes.AUTH_ERROR]: `You're not logged in. Please sign in and try again.`,
    [ErrorTypes.UNAUTHORIZED]: `You don't have permission to do that.`,
    [ErrorTypes.NOT_FOUND]: `This item is no longer available.`,
    [ErrorTypes.CONFLICT]: `This item already exists. Try refreshing the page.`,
    [ErrorTypes.VALIDATION_ERROR]: `Please check your input and try again.`,
    [ErrorTypes.RATE_LIMIT]: `Too many requests. Please wait a moment and try again.`,
    [ErrorTypes.SERVER_ERROR]: `Server error${ctx}. Please try again later.`,
  }

  return messages[errorType] || `Something went wrong${ctx}. Please try again.`
}

export function createClassifiedError(error) {
  const classifiedError = new Error(error.message || 'An error occurred')
  classifiedError.type = classifyError(error)
  classifiedError.originalError = error
  return classifiedError
}

export function isRetryable(error) {
  const errorType = classifyError(error)
  return [ErrorTypes.NETWORK_ERROR, ErrorTypes.TIMEOUT, ErrorTypes.RATE_LIMIT, ErrorTypes.SERVER_ERROR].includes(errorType)
}
