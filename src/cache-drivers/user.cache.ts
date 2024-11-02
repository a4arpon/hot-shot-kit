import type { z } from "zod"

export class UserCache {
  private keyGenerator(key: string) {
    return `user-cache:${key}`
  }

  private redisResponse(
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

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  async create(key: string, userData: z.infer<any>) {
    return this.redisResponse(key, null, false)
  }

  async get(key: string) {
    return this.redisResponse(key, null, false)
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  async update(key: string, userData: z.infer<any>) {
    return this.redisResponse(key, null, false)
  }

  async delete(key: string) {
    return this.redisResponse(key, null, false)
  }
}
