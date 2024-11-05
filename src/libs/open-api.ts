import {
  OpenApiGeneratorV3,
  OpenAPIRegistry,
} from "@asteasolutions/zod-to-openapi"

export const registry = new OpenAPIRegistry()

registry.registerPath({
  path: "/users",
  method: "post",
  tags: ["admin"],
  responses: {
    "200": {
      description: "dff",
    },
  },
})

const generator = new OpenApiGeneratorV3(registry.definitions)

export const swaggerDocument = generator.generateDocument({
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
    description: "This is the API",
  },
  servers: [{ url: "v1" }],
})
