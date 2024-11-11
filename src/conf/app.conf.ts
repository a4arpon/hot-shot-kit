import type { OpenAPIObjectConfig } from "@asteasolutions/zod-to-openapi/dist/v3.0/openapi-generator"
import { env } from "./env"

export const secureHeadersConfig = {
  contentSecurityPolicy: {
    baseUri: ["'self'"],
  },
  xXssProtection: "1; mode=block",
  xFrameOptions: "DENY",
  xContentTypeOptions: "nosniff",
  referrerPolicy: true,
  crossOriginEmbedderPolicy: true,
  crossOriginOpenerPolicy: true,
  crossOriginResourcePolicy: true,
  xRobotsTag: "none",
}

export const rateLimiterConfig = {
  limit: 120, // per minute
  windowMs: 1 * 60 * 1000, // per minute
  keyGenerator: (_c: unknown) => "FXIlIyf6DH9BoaVYXMlfHQQ6NkwmpYx4yPFqX",
}

export const corsConfig = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}

export const openApiConfig: OpenAPIObjectConfig = {
  openapi: "3.0.0",
  info: {
    version: env.API_VERSION,
    title: "HotShot Api",
    description: "There you will find all HotShot apis",
  },
  servers: [
    { url: `http://localhost:${env.PORT}/${env.API_VERSION}` },
    { url: `https://hot-shot-kit.vercel.app/${env.API_VERSION}` },
  ],
}
