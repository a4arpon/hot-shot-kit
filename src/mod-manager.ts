/*
 * ------------------------------------------------------------------------
 *
 * Mod Manager - This file is used to manage all the modules
 *
 * ------------------------------------------------------------------------
 */

import { routerFactory } from "@a4arpon/hotshot"
import { AuthRouter } from "#mods/auth-mod/routes"
import { BlogsRouter } from "#mods/blogs-mod/routes"
import { NotificationQueueWorker } from "#queues/notification.worker"
import { AuthorOpenApiSpecs } from "./open-api/author.openapi"
import { BlogsOpenApiSpecs } from "#open-api/blogs.openapi"
import { generateMockData } from "#libs/open-api"
import { z } from "zod"

/*
 * ------------------------------------------------------------------------
 * Router Factory (API Routes)
 * ------------------------------------------------------------------------
 */

export const applicationRoutes = routerFactory([AuthRouter, BlogsRouter])

/*
 * ------------------------------------------------------------------------
 * Application Workers (Bull Queues)
 * ------------------------------------------------------------------------
 */

export const applicationWorkers = [NotificationQueueWorker]

/*
 * ------------------------------------------------------------------------
 * API Specs (OpenAPI)
 * ------------------------------------------------------------------------
 */

export const openApiSpecs = [AuthorOpenApiSpecs, BlogsOpenApiSpecs]

console.log(
  generateMockData(
    z.object({
      name: z.string(),
      age: z.number(),
      email: z.string(),
      gender: z.enum(["male", "female"]),
      address: z.object({
        city: z.string(),
        country: z.string(),
      }),
      tags: z.array(z.string()),
      isActive: z.boolean(),
      createdAt: z.date(),
      updatedAt: z.date(),
    }),
  ),
)
