import { Queue } from "bullmq"
import { drizzle } from "drizzle-orm/postgres-js"
import Redis from "ioredis"
import postgres from "postgres"
import { env } from "#conf/env"

/*
 * ------------------------------------------------------------------------
 * Redis Connection
 * ------------------------------------------------------------------------
 */
export const redis = new Redis(env.REDIS_URL, {
  maxRetriesPerRequest: null,
})

redis.on("ready", () => {
  console.log("Redis Connected...")
})

redis.on("error", (error) => {
  console.error("Redis Connection Error:", error)
  process.exit(1)
})

/*
 * ------------------------------------------------------------------------
 * BullMQ Connection
 * ------------------------------------------------------------------------
 */
export const mailQueue = new Queue("mail-queue", {
  connection: redis,
})

export const notificationQueue = new Queue("notification-queue", {
  connection: redis,
})

/*
 * ------------------------------------------------------------------------
 * Drizzle Postgres Connection
 * ------------------------------------------------------------------------
 */
export const pgDrizzle = drizzle(postgres(env.DATABASE_URL), {
  logger: false,
  // schema: schema,
})
