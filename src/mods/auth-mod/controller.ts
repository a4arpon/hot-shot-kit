import type { Context } from "hono"
import { AuthServices } from "./auth.services"

export class AuthController {
  private readonly authServices: AuthServices

  constructor() {
    this.authServices = new AuthServices()
  }

  auth = async (_ctx: Context) => {
    return this.authServices.auth()
  }
}
