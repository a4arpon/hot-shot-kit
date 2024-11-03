import { cacheNameGenetor, cacheResponse } from "#libs/cache-factory"

export class UserCache {
  public readonly cachePartition = "user-cache"

  async create<T>(payload: T, key: string) {
    return cacheResponse(
      cacheNameGenetor(this.cachePartition, key),
      null,
      false,
    )
  }

  async get(key: string) {
    return cacheResponse(
      cacheNameGenetor(this.cachePartition, key),
      null,
      false,
    )
  }

  async update<T>(key: string, payload: T) {
    return cacheResponse(
      cacheNameGenetor(this.cachePartition, key),
      null,
      false,
    )
  }

  async delete(key: string) {
    return cacheResponse(
      cacheNameGenetor(this.cachePartition, key),
      null,
      false,
    )
  }
}
