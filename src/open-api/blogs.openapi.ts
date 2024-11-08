
  import type { ApiSpecs, UseOpenApi } from "#libs/open-api"
  import { z } from "zod"

  /*
   * ------------------------------------------------------------------------
   * Open API Specs
   *
   * Some Key Points -
   * 1. To use path params, you need to use the path param syntax in the path
   * and the path param name in the pathParams array.
   * Example: path: "/author/{authorSlug}", pathParams: ["authorSlug"]
   * Second brackets {} are used to define the path param syntax.
   *
   * 2. To define a request body, you need to define it as a ZodSchema and
   * pass it to the requestBody property.
   * Example: requestBody: z.object({ title: z.string() })
   *
   * Tips: In this project we are using Drizzle-ORM, so we can easilty inherit
   * the ZodSchema from the drizzle-orm.
   * Doc Link: https://orm.drizzle.team/docs/zod
   * ------------------------------------------------------------------------
   */

  export class BlogsOpenApiSpecs implements UseOpenApi {
    public readonly specs: ApiSpecs[]

    constructor() {
      this.specs = [
        this.getItems,
        this.getItem,
        this.addItem,
        this.patchItem,
        this.updateItem,
        this.deleteItem,
      ]
    }

    private getItems: ApiSpecs = {
      method: "GET",
      path: "/blogs",
      tags: ["Blogs"],
      summery: "Get all items from server",
    }

    private getItem: ApiSpecs = {
      method: "GET",
      path: "/blogs/{blogsSlug}",
      pathParams: ["blogsSlug"],
      tags: ["Blogs"],
      summery: "Get single Blogs from server",
    }

    private addItem: ApiSpecs = {
      method: "POST",
      path: "/blogs",
      tags: ["Blogs"],
      summery: "Add new Blogs",
      requestBody: z.object({
        title: z.string(),
        tags: z.array(z.string()).nullable(),
      }),
    }

    private patchItem: ApiSpecs = {
      method: "PATCH",
      path: "/blogs/{blogsSlug}",
      pathParams: ["blogsSlug"],
      queryParams: ["blogsStatus"],
      tags: ["Blogs"],
      summery: "Add a little patch in the data",
    }

    private updateItem: ApiSpecs = {
      method: "PUT",
      path: "/blogs/{blogsSlug}",
      pathParams: ["blogsSlug"],
      tags: ["Blogs"],
      summery: "Update  Blogs",
      requestBody: z.object({
        title: z.string(),
      }),
    }

    private deleteItem: ApiSpecs = {
      method: "DELETE",
      path: "/blogs/{blogsSlug}",
      pathParams: ["blogsSlug"],
      tags: ["Blogs"],
      summery: "Delete single Blogs",
    }
  }
  