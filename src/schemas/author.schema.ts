import { pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core"

export const StatusEnum = pgEnum("status", ["active", "deleted", "archived"])

export const Author = pgTable("authors", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  status: StatusEnum("status").default("active"),
})
