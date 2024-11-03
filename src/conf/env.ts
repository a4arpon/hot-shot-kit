export const env = {
  PORT: process.env.PORT || "3000",
  API_VERSION: "v1",
  DATABASE_URL: "postgres://postgres:postgres@localhost:5432/dokanify",
  REDIS_URL: process.env.REDIS_URL || "redis://localhost:6379",
}
