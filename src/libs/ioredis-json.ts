import { redis } from "./conn"

export const jsonRedis = {
  get: async (key: string) => {
    const value = await redis.call("JSON.GET", key, ".")
    return value as string | number | Buffer
  },

  set: async (key: string, value: object | []): Promise<void> => {
    await redis.call("JSON.SET", key, ".", JSON.stringify(value))
  },

  delete: async (key: string) => {
    await redis.call("JSON.DEL", key)
  },
}
