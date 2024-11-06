import type { ApiSpecs, UseOpenApi } from "#libs/open-api"
import { z } from "zod"

export class AuthorOpenApiSpecs implements UseOpenApi {
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
    path: "/author",
    tags: ["Author"],
    summery: "Get all items from server",
  }

  private getItem: ApiSpecs = {
    method: "GET",
    path: "/author/:blogSlug",
    pathParams: ["authorSlug"],
    tags: ["Author"],
    summery: "Get single Author from server",
  }

  private addItem: ApiSpecs = {
    method: "POST",
    path: "/author",
    tags: ["Author"],
    summery: "Add new Author",
    requestBody: z.object({
      title: z.string(),
      tags: z.array(z.string()).nullable(),
    }),
  }

  private patchItem: ApiSpecs = {
    method: "PATCH",
    path: "/author/:blogSlug",
    pathParams: ["authorSlug"],
    queryParams: ["authorStatus"],
    tags: ["Author"],
    summery: "Add a little patch in the data",
  }

  private updateItem: ApiSpecs = {
    method: "PUT",
    path: "/author/:authorSlug",
    pathParams: ["authorSlug"],
    tags: ["Author"],
    summery: "Update  Author",
    requestBody: z.object({
      title: z.string(),
    }),
  }

  private deleteItem: ApiSpecs = {
    method: "DELETE",
    path: "/author/:authorSlug",
    pathParams: ["authorSlug"],
    tags: ["Author"],
    summery: "Delete single Author",
  }
}
