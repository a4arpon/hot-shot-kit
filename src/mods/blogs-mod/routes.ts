import { route, router, routerContainer } from "@a4arpon/hotshot"
import type { Hono } from "hono"
import { BlogsController } from "./controller"

export class BlogsRouter {
  public readonly routes: Hono

  private readonly blogsController: BlogsController

  constructor() {
    this.blogsController = new BlogsController()

    this.routes = routerContainer({
      basePath: "/blogs",
      routers: [
        router({
          routes: [
            route("GET").controller(this.blogsController.blogs),
            route("POST").controller(this.blogsController.addNewBlog),
          ],
        }),
      ],
    })
  }
}
