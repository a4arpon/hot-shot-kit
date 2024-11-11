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
 * Tips: In this project we are using Drizzle-ORM, so we can easily inherit
 * the ZodSchema from the drizzle-orm.
 * Doc Link: https://orm.drizzle.team/docs/zod
 * ------------------------------------------------------------------------
 */

export class AuthorOpenApiSpecs implements UseOpenApi {
  public readonly specs: ApiSpecs[]

  constructor() {
    this.specs = [
      /*
       * ------------------------------------------------------------------------
       * Retrieve Data
       * ------------------------------------------------------------------------
       */
      {
        method: "GET",
        path: "/author",
        tags: ["Author"],
        summery: "Get all items from server",
      },
      {
        method: "GET",
        path: "/author/{authorSlug}",
        pathParams: ["authorSlug"],
        tags: ["Author"],
        summery: "Get single Author from server",
      },

      /*
       * ------------------------------------------------------------------------
       * Insert Method
       * ------------------------------------------------------------------------
       */
      {
        method: "POST",
        path: "/author",
        tags: ["Author"],
        summery: "Add new Author",
        requestBody: z.object({
          name: z.string(),
          tags: z.array(z.string()),
        }),
      },

      /*
       * ------------------------------------------------------------------------
       * Update Method
       * ------------------------------------------------------------------------
       */
      {
        method: "PATCH",
        path: "/author/{authorSlug}",
        pathParams: ["authorSlug"],
        queryParams: ["authorStatus"],
        tags: ["Author"],
        summery: "Add a little patch in the data",
      },
      {
        method: "PUT",
        path: "/author/{authorSlug}",
        pathParams: ["authorSlug"],
        tags: ["Author"],
        summery: "Update  Author",
        requestBody: z.object({
          title: z.string(),
        }),
      },

      /*
       * ------------------------------------------------------------------------
       * Delete Method
       * ------------------------------------------------------------------------
       */
      {
        method: "DELETE",
        path: "/author/{authorSlug}",
        pathParams: ["authorSlug"],
        tags: ["Author"],
        summery: "Delete single Author",
      },
    ]
  }
}
