import { response } from "@a4arpon/hotshot"

export class TokenServices {
  async token() {
    return response("Hi from token!")
  }
}
