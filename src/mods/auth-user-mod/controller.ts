import type { Context } from "hono"
import { AuthUserServices } from "./auth-user.services"

export class AuthUserController {
  private readonly authUserServices: AuthUserServices

  constructor() {
    this.authUserServices = new AuthUserServices()
  }

  authUser = async (_ctx: Context) => {
    return this.authUserServices.authUser()
  }
}
