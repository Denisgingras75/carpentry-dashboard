const isDev = import.meta.env.DEV

export const logger = {
  error(message, ...args) {
    console.error(message, ...args)
  },
  warn(message, ...args) {
    console.warn(message, ...args)
  },
  info(message, ...args) {
    if (isDev) console.log(message, ...args)
  },
  debug(message, ...args) {
    if (isDev) console.log(message, ...args)
  },
}
