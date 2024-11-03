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

/*
 * ------------------------------------------------------------------------
 * Router Factory (API Routes)
 * ------------------------------------------------------------------------
 */

export const applicationRoutes = routerFactory([AuthRouter, BlogsRouter])

/*
 * ------------------------------------------------------------------------
 * Application Workers (Queues)
 * ------------------------------------------------------------------------
 */

export const applicationWorkers = [NotificationQueueWorker]
