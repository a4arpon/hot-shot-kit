import { redis } from "./conn"

export type CacheResponse<T> = {
  key: string
  data: T | null
  success: boolean
}

export function cacheResponse(
  key: string,
  data: [] | object | null,
  success: boolean,
) {
  return {
    key,
    data,
    success,
  }
}

export function cacheNameGen(cachePartition: string, key: string) {
  return `${cachePartition}:${key}`
}

export const jsonRedis = {
  get: async (key: string) => {
    const value = await redis.call("JSON.GET", key, ".")
    return value as string | number | Buffer
  },

  set: async <T>(key: string, value: T): Promise<void> => {
    await redis.call("JSON.SET", key, ".", JSON.stringify(value))
  },

  setMany: async <T>(key: string, value: T[]) => {
    for (const item of value) {
      await redis.call("JSON.SET", key, ".", JSON.stringify(item))
    }
  },

  delete: async (key: string) => {
    await redis.call("JSON.DEL", key)
  },
}
