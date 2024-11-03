import { cacheNameGen, cacheResponse } from "#libs/ioredis-json"

export class BlogsCacheDriver {
  public readonly cachePartition = "blogs-cache"

  async create<T>(key: string, _payload: T) {
    return cacheResponse(cacheNameGen(this.cachePartition, key), null, false)
  }

  async get(key: string) {
    return cacheResponse(cacheNameGen(this.cachePartition, key), null, false)
  }

  async update<T>(key: string, _payload: T) {
    return cacheResponse(cacheNameGen(this.cachePartition, key), null, false)
  }

  async delete(key: string) {
    return cacheResponse(cacheNameGen(this.cachePartition, key), null, false)
  }
}
