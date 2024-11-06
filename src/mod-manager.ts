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
import { BlogsSpecs } from "./open-api/blogs"
import { AuthorOpenApiSpecs } from "./open-api/author.openapi"

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

export const openApiSpecs = [BlogsSpecs, AuthorOpenApiSpecs]
