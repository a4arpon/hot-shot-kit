import { openApiConfig } from "#conf/app.conf"
import {
  OpenApiGeneratorV3,
  OpenAPIRegistry,
  type RouteConfig,
} from "@asteasolutions/zod-to-openapi"
import { openApiSpecs } from "src/mod-manager"
import { z, type ZodSchema } from "zod"

/*
 * ------------------------------------------------------------------------
 * Types for Api Declaration
 * ------------------------------------------------------------------------
 */

export interface UseOpenApi {
  specs: ApiSpecs[]
}

export type ApiSpecs = {
  summery: string
  path: string
  method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH"
  pathParams?: string[]
  queryParams?: string[]
  requestBody?: ZodSchema
  tags: string[]
}

/*
 * ------------------------------------------------------------------------
 * Response Component
 * ------------------------------------------------------------------------
 */
const responses = {
  "200": {
    description: "Response",
    content: {
      "application/json": {
        schema: z.object({
          message: z.string(),
        }),
        example: {
          message: "Response message from server...",
        },
      },
    },
  },
}

/*
 * ------------------------------------------------------------------------
 * Api Specs Generator Function
 * ------------------------------------------------------------------------
 */

function apiSpecGen(
  registry: OpenAPIRegistry,
  {
    summery,
    path,
    method,
    pathParams,
    queryParams,
    requestBody,
    tags,
  }: {
    summery: string
    path: string
    method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH"
    pathParams?: string[]
    queryParams?: string[]
    requestBody?: ZodSchema
    tags: string[]
  },
) {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const _pathParams = [] as any

  /*
   * ------------------------------------------------------------------------
   * Path Params
   * ------------------------------------------------------------------------
   */
  if (pathParams) {
    for (const item of pathParams) {
      _pathParams.push({
        required: true,
        in: "path",
        name: item,
      })
    }
  }

  /*
   * ------------------------------------------------------------------------
   * Qurery Params
   * ------------------------------------------------------------------------
   */
  if (queryParams) {
    for (const item of queryParams) {
      _pathParams.push({
        in: "query",
        name: item,
      })
    }
  }

  const api = {
    summary: summery,
    path: path,
    parameters: _pathParams,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    method: method.toLowerCase() as any,
    tags: tags,
    responses: responses,
  } as RouteConfig

  /*
   * ------------------------------------------------------------------------
   * Register the api
   * ------------------------------------------------------------------------
   */
  registry.registerPath({
    ...api,
    request: requestBody
      ? { body: { content: { "application/json": { schema: requestBody } } } }
      : undefined,
  })
}

/*
 * ------------------------------------------------------------------------
 * Open API Specs
 * ------------------------------------------------------------------------
 */

export function openAPISpecs() {
  const registry = new OpenAPIRegistry()

  for (let i = 0; i < openApiSpecs.length; i++) {
    const specs = new openApiSpecs[i]().specs

    for (let j = 0; j < specs.length; j++) {
      apiSpecGen(registry, specs[j])
    }
  }

  return new OpenApiGeneratorV3(registry.definitions).generateDocument(
    openApiConfig,
  )
}
