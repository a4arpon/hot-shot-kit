import { UserCache } from "#cache-drivers/user.cache"
import { response } from "@a4arpon/hotshot"

export class AuthUserServices {
  private readonly userCache: UserCache

  constructor() {
    this.userCache = new UserCache()
  }

  async authUser() {
    const user = {
      id: 3,
      name: "John Doe",
      email: "john@doe.com",
      password: "123456",
    }

    await this.userCache.create(user.id.toString(), user)

    return response("Hi from auth-user!")
  }
}
