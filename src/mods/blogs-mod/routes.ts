import { router, routerContainer } from "@a4arpon/hotshot"
import type { Hono } from "hono"
import { BlogsController } from "./controller"

export class BlogsRouter {
  public readonly routes: Hono

  constructor() {
    this.routes = routerContainer({
      routers: [this.defaultRoutes()],
      basePath: "/blogs",
    })
  }

  defaultRoutes() {
    const blogsController = new BlogsController()

    return router({
      basePath: "/",
      routes: [
        {
          path: "/",
          method: "GET",
          controller: blogsController.blogs,
        },
      ],
    })
  }
}
