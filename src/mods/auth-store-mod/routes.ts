import { router, routerContainer } from "@a4arpon/hotshot"
import type { Hono } from "hono"
import { AuthStoreController } from "./controller"

export class AuthStoreRouter {
  public readonly routes: Hono

  constructor() {
    this.routes = routerContainer({
      routers: [this.defaultRoutes()],
      basePath: "/auth-store",
    })
  }

  defaultRoutes() {
    const authStoreController = new AuthStoreController()

    return router({
      basePath: "/",
      routes: [
        {
          path: "/",
          method: "GET",
          controller: authStoreController.authStore,
        },
      ],
    })
  }
}
