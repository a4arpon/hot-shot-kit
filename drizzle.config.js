if (!process.env.DATABASE_URL) {
  console.error("Database String not found...")
  process.exit(1)
}

/** @type { import("drizzle-kit").Config } */
export default {
  dialect: "postgresql",
  schema: "./src/schemas/*",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
}
