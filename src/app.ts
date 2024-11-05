import { response } from "@a4arpon/hotshot"
import { Hono } from "hono"
import { cors } from "hono/cors"
import { csrf } from "hono/csrf"
import { logger } from "hono/logger"
import { secureHeaders } from "hono/secure-headers"
import { corsConfig, secureHeadersConfig } from "#conf/app.conf"
import { env } from "#conf/env"
import { startQueues } from "#libs/queue-starter"
import { applicationRoutes, applicationWorkers } from "./mod-manager"
import { serve } from "@hono/node-server"
import { getRuntimeKey } from "hono/adapter"
import { swaggerUI } from "@hono/swagger-ui"
import { swaggerDocument } from "#libs/open-api"

async function bootstrap() {
  const app = new Hono()
    .use(cors(corsConfig))
    .use(secureHeaders(secureHeadersConfig))
    .use(csrf())
    .use(logger())

  app.get("/", (c) => {
    return c.json(response("Api server online..."))
  })

  app.get("/openapi.json", (c) => {
    return c.json(swaggerDocument)
  })

  app.get(
    "/docs",
    swaggerUI({
      url: "/openapi.json",
      layout: "BaseLayout",
    }),
  )

  app.route("/", applicationRoutes)

  /*
   * ---------------------------------------------------------------------
   * Application Server Adapter
   * ---------------------------------------------------------------------
   */

  if (typeof Bun !== "undefined") {
    Bun.serve({
      fetch: app.fetch,
      port: env.PORT,
      reusePort: true,
    })
  } else {
    serve({
      fetch: app.fetch,
      port: Number.parseInt(env.PORT),
    })
  }
}

bootstrap()
  .then(async () => {
    await startQueues(applicationWorkers)
  })
  .then(() => {
    console.table({
      PORT: env.PORT,
      ENV: process.env.NODE_ENV,
      URL: `http://localhost:${env.PORT}`,
      Adapter: getRuntimeKey(),
    })
  })
  .catch((err) => {
    console.error("Application Runtime Error", err)
    process.exit(1)
  })
