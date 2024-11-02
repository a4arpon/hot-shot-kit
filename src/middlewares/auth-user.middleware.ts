import { HTTPStatus, type UseGuard } from "@a4arpon/hotshot"
import type { Context, Next } from "hono"
import { HTTPException } from "hono/http-exception"

export class AuthUserMiddleware implements UseGuard {
  async use(ctx: Context, next: Next) {
    if (ctx.req.path === "/auth-user-middleware") {
      throw new HTTPException(HTTPStatus.BadRequest, {
        message: "You're hitting on a dummy route",
      })
    }

    console.log("AuthUserMiddleware Activated On", ctx.req.path)
    await next()
  }
}
