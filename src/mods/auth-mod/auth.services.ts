import { response } from "@a4arpon/hotshot"

export class AuthServices {
  async auth() {
    return response("Hi from auth services!")
  }
}
