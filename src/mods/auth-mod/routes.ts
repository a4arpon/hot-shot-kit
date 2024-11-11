import { route, router, routerContainer } from "@a4arpon/hotshot"
import type { Hono } from "hono"
import { AuthController } from "./controller"

export class AuthRouter {
  public readonly routes: Hono

  constructor() {
    this.routes = routerContainer({
      routers: [this.defaultRoutes()],
      basePath: "/auth",
    })
  }

  defaultRoutes() {
    const authController = new AuthController()

    return router({
      basePath: "/",
      routes: [route("POST").controller(authController.auth)],
    })
  }
}
