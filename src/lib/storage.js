const cache = new Map()

export function getStorageItem(key) {
  if (cache.has(key)) return cache.get(key)
  try {
    const value = localStorage.getItem(key)
    cache.set(key, value)
    return value
  } catch {
    return null
  }
}

export function setStorageItem(key, value) {
  try {
    localStorage.setItem(key, value)
    cache.set(key, value)
  } catch {
    // localStorage may be unavailable in private browsing
  }
}

export function removeStorageItem(key) {
  try {
    localStorage.removeItem(key)
    cache.delete(key)
  } catch {
    // localStorage may be unavailable
  }
}

export function clearCache() {
  cache.clear()
}

export const STORAGE_KEYS = {
  THEME: 'carpentry_theme',
}
