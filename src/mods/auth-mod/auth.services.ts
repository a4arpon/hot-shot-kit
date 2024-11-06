import { pgDrizzle } from "#libs/conn"
import { Author } from "#schemas/author.schema"
import { response } from "@a4arpon/hotshot"
import { eq } from "drizzle-orm"

export class AuthServices {
  async auth() {
    return response("Hi from auth services!")
  }

  async createAuthor() {
    const author = await pgDrizzle.query.Author.findFirst({
      where: eq(Author.email, "a@a.com"),
    })

    if (author) {
      return response("Author already exists")
    }

    await pgDrizzle.insert(Author).values({
      name: "John Doe",
      email: "a@a.com",
      status: "active",
    })

    return response("Author created")
  }
}
