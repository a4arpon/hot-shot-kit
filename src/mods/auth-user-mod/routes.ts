import { router, routerContainer } from "@a4arpon/hotshot"
import type { Hono } from "hono"
import { AuthUserMiddleware } from "#middlewares/auth-user.middleware"
import { AuthUserController } from "./controller"

export class AuthUserRouter {
  public readonly routes: Hono

  constructor() {
    this.routes = routerContainer({
      routers: [this.defaultRoutes()],
      basePath: "/auth-user",
    })
  }

  defaultRoutes() {
    const authUserController = new AuthUserController()

    return router({
      basePath: "/",
      routes: [
        {
          path: "/",
          method: "GET",
          controller: authUserController.authUser,
          middlewares: [AuthUserMiddleware],
        },
      ],
    })
  }
}
