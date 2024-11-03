import { response } from "@a4arpon/hotshot"

export class BlogsServices {
  async blogs() {
    return response("Hi from blogs!")
  }
}
