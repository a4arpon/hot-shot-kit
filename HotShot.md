# Hot Shot

## Hottest framework on planet earth for building scalable web applications server.

**If you're on other planets you can use it too. Just use Bun only for now.**

### If You Want To Ship Fast, You Have To Build Faster.

** But this framework is more faster than your crush rejects your proposal.**

Welcome to **Hot Shot**, a meta-framework built on top of
[Hono](https://honojs.dev/), inspired by the best features of AdonisJS and
NestJS. Hot Shot provides a structured and efficient way to build scalable web
applications that can run on multiple JavaScript runtimes, including Node.js,
Deno, and Bun.

## Introduction

Hot Shot leverages the simplicity and performance of Hono while offering a
higher-level abstraction for organizing your application's components. By
combining concepts from AdonisJS and NestJS, Hot Shot promotes a clean
architecture using classes for controllers, routes, and middleware, making your
codebase modular and maintainable.

## Key Features

- **Modular Routing**: Organize routes into classes for better structure and
  readability.
- **Middleware Support**: Easily integrate middleware for authentication,
  validation, and more.
- **Controller-Based Design**: Encapsulate request handling logic within
  controllers.
- **Inspired by AdonisJS and NestJS**: Familiar patterns for developers coming
  from these frameworks.
- **Multi-Runtime Support**: Run your applications seamlessly on Node.js, Deno,
  and Bun.

## Getting Started

### Copy Starter Kit (Recommended)

Copy the starter kit to your project directory and start coding.

```bash
npx jsr add @a4arpon/hotshot-starter-kit
```

I am too lazy to write the documentation for this. So, I recommend you to copy the starter kit to your project directory
and start coding. I don't know know what this documentation contains. This is 99% ChatGPT generated. If you face any
problem, please open an issue on GitHub or Hey directly message me on LinkedIn Or Twitter.

- [LinkedIn](https://www.linkedin.com/in/a4arpon/)
- [Twitter](https://twitter.com/a4arpon)
- [Facebook](https://www.facebook.com/a4arpon/)

### Installation

Install Hot Shot via npm:

```bash
# NPM Installation
npx jsr add @a4arpon/hotshot

# Bun Installation
bunx jsr add @a4arpon/hotshot

# Deno Installation
deno add jsr:@a4arpon/hotshot
```

### Creating Routes

Hot Shot encourages organizing your routes into classes, each representing a
module or feature of your application.

#### Example: Creating a User Routes Class

```typescript
export class UserRoutes {
    public readonly routes: Hono;
    private readonly userController: UserController;

    constructor() {
        this.userController = new UserController();
        this.routes = router({
            basePath: "users",
            routes: [
                {
                    path: "/register",
                    method: "POST",
                    controller: this.userController.register,
                },
                {
                    path: "/login",
                    method: "POST",
                    controller: this.userController.login,
                },
                {
                    path: "/profile",
                    method: "GET",
                    controller: this.userController.getProfile,
                    middlewares: [AuthGuard],
                },
            ],
        });
    }
}
```

- **`basePath`**: Sets the base URL for all routes in the class.
- **`routes`**: An array of route definitions with methods, paths, controllers,
  and optional middleware.

### Creating Controllers

Controllers contain the business logic for handling requests and generating
responses.

#### Example: Creating a User Controller

```typescript
export class UserController {
    async register(ctx: Context): Promise<ApiResponse> {
        const data = await ctx.req.json();
        // Logic to register a user
        return response("User registered successfully", {userId: 1});
    }

    async login(ctx: Context): Promise<ApiResponse> {
        const data = await ctx.req.json();
        // Logic to authenticate a user
        return response("User logged in successfully", {token: "jwt-token"});
    }

    async getProfile(ctx: Context): Promise<ApiResponse> {
        // Logic to retrieve user profile
        return response("User profile retrieved", {name: "John Doe"});
    }
}
```

- **Controller Methods**: Asynchronous functions that handle specific endpoints.

### Implementing Middleware

Middleware functions perform actions before or after route handlers, such as
authentication or input validation.

#### Example: Creating an Authentication Guard

```typescript
export const AuthGuard = async (ctx: Context, next: () => Promise<void>) => {
    try {
        const authHeader = ctx.req.header("Authorization");
        const token = authHeader?.split(" ")[1];

        if (!token) {
            ctx.status(401);
            return ctx.json(response("Unauthorized access", null, {}, false));
        }

        // Verify token (implementation depends on your auth strategy)
        const user = verifyToken(token);

        if (!user) {
            ctx.status(401);
            return ctx.json(response("Invalid token", null, {}, false));
        }

        ctx.user = user;
        await next();
    } catch (error) {
        ctx.status(500);
        return ctx.json(response("Server error", null, {}, false));
    }
};
```

- **Middleware Functions**: Take `ctx` and `next` as arguments and can modify
  the context or control the flow.

### Combining Routes

Use `routerFactory` to combine multiple route classes into a single application
route.

#### Example: Combining Multiple Route Classes

```typescript
export const applicationRoutes = routerFactory([
    UserRoutes,
    ProductRoutes,
    OrderRoutes,
]);
```

## Utilities and Helpers

### Response Helper

Use the `response` function to create consistent API responses.

#### Example: Using the Response Helper

```typescript
return response("Operation successful", {data: "Sample data"});
```

### Middleware Exception Response

Use `middleWareExceptionResponse` to handle exceptions in middleware.

#### Example: Handling Middleware Exceptions

```typescript
export const ExampleMiddleware = async (
    ctx: Context,
    next: () => Promise<void>,
) => {
    try {
        // Middleware logic
        await next();
    } catch (error) {
        return middleWareExceptionResponse(ctx, error);
    }
};
```

## Full Usage Example

Let's build a simple blog module with posts and comments.

### Step 1: Create Controllers

```typescript
export class PostsController {
    async createPost(ctx: Context): Promise<ApiResponse> {
        const data = await ctx.req.json();
        // Logic to create a post
        return response("Post created", {postId: 1});
    }

    async getPost(ctx: Context): Promise<ApiResponse> {
        const {postId} = ctx.req.param();
        // Logic to get a post
        return response("Post retrieved", {postId, title: "Sample Post"});
    }
}

export class CommentsController {
    async addComment(ctx: Context): Promise<ApiResponse> {
        const data = await ctx.req.json();
        // Logic to add a comment
        return response("Comment added", {commentId: 1});
    }
}
```

### Step 2: Define Route Classes

```typescript
export class PostsRoutes {
    public readonly routes: Hono;
    private readonly postsController: PostsController;

    constructor() {
        this.postsController = new PostsController();
        this.routes = router({
            basePath: "posts",
            routes: [
                {
                    path: "/",
                    method: "POST",
                    controller: this.postsController.createPost,
                    middlewares: [AuthGuard],
                },
                {
                    path: "/:postId",
                    method: "GET",
                    controller: this.postsController.getPost,
                },
            ],
        });
    }
}

export class CommentsRoutes {
    public readonly routes: Hono;
    private readonly commentsController: CommentsController;

    constructor() {
        this.commentsController = new CommentsController();
        this.routes = router({
            basePath: "comments",
            routes: [
                {
                    path: "/",
                    method: "POST",
                    controller: this.commentsController.addComment,
                    middlewares: [AuthGuard],
                },
            ],
        });
    }
}
```

### Step 3: Combine Routes into Application Routes

```typescript
export const applicationRoutes = routerFactory([
    UserRoutes,
    PostsRoutes,
    CommentsRoutes,
]);
```

### Step 4: Initialize the Application

```typescript
const app = new Hono();

app.route("/", applicationRoutes);

app.listen(3000, () => {
    console.log("Blog application is running on http://localhost:3000");
});
```

## Best Practices

- **Organize by Feature**: Group related controllers and routes together.
- **Use Middleware Wisely**: Apply middleware at the route or controller level
  as needed.
- **Handle Errors Gracefully**: Use `safeAsync` and consistent error responses.
- **Keep Controllers Focused**: Controllers should handle request logic, not
  business logic.

## Conclusion

Hot Shot provides a robust structure for building scalable and maintainable web
applications. By following familiar patterns and offering utilities to simplify
common tasks, it helps you focus on writing clean and efficient code.

Explore the framework and start building your next application with Hot Shot!

---

Feel free to dive deeper into each section and adapt the examples to fit your
application's specific needs.

## Developer Information

### Mr Wayne

**Github** : [a4arpon](https://github.com/a4arpon)

**Twitter** : [@a4arpon](https://twitter.com/a4arpon)

**LinkedIn** : [@a4arpon](https://www.linkedin.com/in/a4arpon/)

**Instagram** : [@a4arpon](https://www.instagram.com/a4arpon/)

**Facebook** : [@a4arpon](https://www.facebook.com/a4arpon/)
