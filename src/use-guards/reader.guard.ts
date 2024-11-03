import { HTTPStatus, type UseGuard } from "@a4arpon/hotshot"
import type { Context, Next } from "hono"

export class ReaderGuard implements UseGuard {
  async use(ctx: Context, next: Next) {
    if (ctx.req.path === "/reader-guard") {
      throw new HTTPException(HTTPStatus.BadRequest, {
        message: "You're hitting on a dummy route",
      })
    }

    console.log("ReaderGuard Activated On", ctx.req.path)
    await next()
  }
}
