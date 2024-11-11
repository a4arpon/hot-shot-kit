import { openApiConfig } from "#conf/app.conf"
import {
  OpenApiGeneratorV3,
  OpenAPIRegistry,
  type RouteConfig,
} from "@asteasolutions/zod-to-openapi"
import { faker } from "@faker-js/faker"
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
      ? {
          body: {
            content: {
              "application/json": {
                schema: requestBody,
                example: generateMockData(requestBody),
              },
            },
          },
        }
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

// Faker JS
export function generateMockData(
  schema: ZodSchema,
  fieldName = "",
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  context: any = {},
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
): any {
  if (schema instanceof z.ZodObject) {
    const shape = schema.shape
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const data: { [key: string]: any } = {}
    for (const key in shape) {
      data[key] = generateMockData(shape[key], key, context)
    }
    return data
  }
  if (schema instanceof z.ZodString) {
    if (/firstName/i.test(fieldName)) {
      const gender = context?.gender || faker.person.sexType()
      return faker.person.firstName(gender as "male" | "female")
    }
    if (/lastName/i.test(fieldName)) {
      return faker.person.lastName()
    }
    if (/fullName|name/i.test(fieldName)) {
      const gender = context?.gender || faker.person.sexType()
      return faker.person.fullName({ sex: gender as "male" | "female" })
    }
    if (/email/i.test(fieldName)) {
      return faker.internet.email()
    }
    if (/phone|phoneNumber/i.test(fieldName)) {
      return faker.phone.number()
    }
    if (/city/i.test(fieldName)) {
      return faker.location.city()
    }
    if (/country/i.test(fieldName)) {
      return faker.location.country()
    }
    return faker.lorem.words()
  }
  if (schema instanceof z.ZodNumber) {
    let min: number | undefined
    let max: number | undefined
    const isInt = schema.isInt

    for (const check of schema._def.checks) {
      if (check.kind === "min") {
        min = check.value
      }
      if (check.kind === "max") {
        max = check.value
      }
    }

    if (isInt) {
      return faker.number.int({ min, max })
    }
    return faker.number.float({ min, max })
  }
  if (schema instanceof z.ZodBoolean) {
    return faker.datatype.boolean()
  }
  if (schema instanceof z.ZodDate) {
    return faker.date.recent()
  }
  if (schema instanceof z.ZodArray) {
    const itemSchema = schema.element
    const arrayLength = faker.number.int({ min: 1, max: 5 })
    return Array.from({ length: arrayLength }, () =>
      generateMockData(itemSchema, fieldName, context),
    )
  }
  if (schema instanceof z.ZodNullable) {
    return Math.random() < 0.5
      ? null
      : generateMockData(schema.unwrap(), fieldName, context)
  }
  if (schema instanceof z.ZodEnum) {
    const options = schema.options
    const value = faker.helpers.arrayElement(options)
    if (/gender|sex/i.test(fieldName)) {
      context.gender = value
    }
    return value
  }
  return null
}
