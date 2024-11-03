import type { Context } from "hono"
import { BlogsServices } from "./blogs.services"

export class BlogsController {
  private readonly blogsServices: BlogsServices

  constructor() {
    this.blogsServices = new BlogsServices()
  }

  blogs = async (_ctx: Context) => {
    return this.blogsServices.blogs()
  }
}
