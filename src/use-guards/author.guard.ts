import { HTTPStatus, type UseGuard } from "@a4arpon/hotshot"
import type { Context, Next } from "hono"
import { HTTPException } from "hono/http-exception"

export class AuthorGuard implements UseGuard {
  async use(ctx: Context, next: Next) {
    if (ctx.req.path === "/author-guard") {
      throw new HTTPException(HTTPStatus.BadRequest, {
        message: "You're hitting on a dummy route",
      })
    }

    console.log("AuthorGuard Activated On", ctx.req.path)
    await next()
  }
}
