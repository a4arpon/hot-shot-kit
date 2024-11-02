import type { Context } from "hono"
import { AuthStoreServices } from "./auth-store.services"

export class AuthStoreController {
  private readonly authStoreServices: AuthStoreServices

  constructor() {
    this.authStoreServices = new AuthStoreServices()
  }

  authStore = async (ctx: Context) => {
    return this.authStoreServices.authStore()
  }
}
