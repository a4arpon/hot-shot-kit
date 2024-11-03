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
import { openAPI } from "#libs/open-api"
import { apiReference } from "@scalar/hono-api-reference"

async function bootstrap() {
  const app = new Hono()
    .use(cors(corsConfig))
    .use(secureHeaders(secureHeadersConfig))
    .use(csrf())
    .use(logger())

  app.get("/", (c) => {
    return c.json(response("Api server online..."))
  })

  app.route("/", openAPI)

  app.get(
    "/docs",
    apiReference({
      theme: "purple",
      layout: "classic",
      spec: {
        url: "/swagger-doc",
      },
    }),
  )

  app.route("/", applicationRoutes)

  /*
   * ---------------------------------------------------------------------
   * Application Server Adapter
   * ---------------------------------------------------------------------
   */

  Bun.serve({
    fetch: app.fetch,
    port: env.PORT,
    reusePort: true,
  })
}

bootstrap()
  .then(async () => {
    await startQueues(applicationWorkers)
  })
  .then(() => {
    console.log(`Application Running on http://localhost:${env.PORT}`)
  })
  .catch((err) => {
    console.error("Application Runtime Error", err)
    process.exit(1)
  })
