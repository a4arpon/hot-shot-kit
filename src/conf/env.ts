export const env = {
  PORT: process.env.PORT || "4000",
  API_VERSION: "v6",
  DATABASE_URL: process.env.DATABASE_URL || "",
  REDIS_URL: process.env.REDIS_URL || "redis://localhost:6379",
}
