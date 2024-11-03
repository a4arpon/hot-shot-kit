import { jsonRedis } from "#libs/ioredis-json"
import { response } from "@a4arpon/hotshot"

export class AuthUserServices {
  async authUser() {
    const user = {
      id: 1,
      name: "John Doe",
      email: "john@doe.com",
      password: "123456",
    }

    await jsonRedis.set("auth-user:1", user)
    return response("Hi from auth-user!")
  }
}
