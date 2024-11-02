/*
 * ------------------------------------------------------------------------
 *
 * Mod Manager - This file is used to manage all the modules
 *
 * ------------------------------------------------------------------------
 */

import { routerFactory } from "@a4arpon/hotshot"
import { AuthStoreRouter } from "#mods/auth-store-mod/routes"
import { AuthUserRouter } from "#mods/auth-user-mod/routes"
import { MailQueue } from "#queues/mail.queues"

/*
 * ------------------------------------------------------------------------
 * Router Factory (API Routes)
 * ------------------------------------------------------------------------
 */

export const applicationRoutes = routerFactory([
  AuthUserRouter,
  AuthStoreRouter,
])

/*
 * ------------------------------------------------------------------------
 * Application Workers (Queues)
 * ------------------------------------------------------------------------
 */

export const applicationWorkers = [MailQueue]
