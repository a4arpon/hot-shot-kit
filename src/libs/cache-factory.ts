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

export function cacheNameGenetor(cachePartition: string, key: string) {
  return `${cachePartition}:${key}`
}
