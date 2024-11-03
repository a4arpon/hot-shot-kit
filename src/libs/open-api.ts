import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi"

const openAPI = new OpenAPIHono()

const route = createRoute({
  method: "get",
  path: "/users/{id}",
  request: {
    params: z.object({
      id: z.string(),
    }),
    body: {
      content: {
        "application/json": {
          schema: z.object({
            id: z.string(),
          }),
        },
      },
    },
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: z.object({
            id: z.string(),
          }),
        },
      },
      description: "Retrieve the user",
    },
  },
})

openAPI.openapi(route, (c) => {
  const { id } = c.req.valid("param")
  return c.json({
    id,
    age: 20,
    name: "Ultra-man",
  })
})

openAPI.doc("/swagger-doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Hono OpenAPI",
  },
})

export { openAPI }
