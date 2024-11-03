# Hot Shot Ready Kit -

## What is Hot Shot Ready Kit?

Hot Shot Ready Kit is a ready-to-use package top of [HotShot](https://github.com/a4arpon/hot-shot) that provides a complete and ready-to-use application structure for building modern web applications with Bun.js. It includes a set of pre-configured libraries, utiltieis & mod manager. It provides bundeling support and multi threaded support for the server.

## Getting Started

To get started with Hot Shot Ready Kit, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/a4arpon/hot-shot-ready-kit.git && cd hot-shot-ready-kit && rm -rf .git
```

2. Install the dependencies:

```bash
bun i
```

3. Run the application:

```bash
bun run dev
```

4. Open your browser and navigate to `http://localhost:PORT`.

That's it! You have successfully set up and run the Hot Shot Ready Kit application.

## Pre-Configured Libraries

The Hot Shot Ready Kit comes with a set of pre-configured libraries that you can use in your application. These libraries include:

- Hono
- HotShot
- Postgres
- Drizzle
- Drizzle-Zod
- Drizzle-Kit
- Sharp
- Nodemailer
- BullMQ
- Redis
- Ioredis
- Jsonwebtoken
- Zod
- Biome
- Drizzle Kit


These libraries are pre-configured and ready to use in your application. You can easily add or remove them as needed.

## Pre-Configured Utilities

The Hot Shot Ready Kit also comes with a set of pre-configured utilities that you can use in your application. These utilities include:

- Generators: A set of utility functions for generating random data.



## Documentation


### Mod Manager

The Mod Manager is a file that manages all the modules in your application. It is responsible for loading and registering all the modules, including routers, controllers, services, guards, and queues.

#### Router Factory

The Router Factory is a function that takes an array of routers and returns a single router that combines all the routers into a single router. This function is used to combine all the routers in your application into a single router.

```typescript
export const applicationRoutes = routerFactory([AuthRouter, BlogsRouter])
```

#### Application Workers

The Application Workers is a file that manages all the workers in your application. It is responsible for loading and registering all the workers, including queues, cache drivers, and other workers.

```typescript
export const applicationWorkers = [NotificationQueueWorker]
```


### Ioredis-Json

Ioredis-Json is a utility library that provides a set of functions for interacting with Redis using JSON data. It includes functions for setting, getting, deleting, and managing JSON data in Redis.

#### Cache Response

Cache Response is a type that represents the response from a cache operation. It includes a key, data, and success flag.

How to use:

```typescript
const cacheResponse = cacheResponse("key", { name: "John Doe" }, true)
```

#### Cache Name Generator

Cache Name Generator is a function that generates a cache name based on a cache partition and a key. It is used to generate cache names for different parts of the application.

How to use:

```typescript
const cacheName = cacheNameGen("blogs", "123")
```

#### JSON Redis

JSON Redis is a utility library that provides a set of functions for interacting with Redis using JSON data. It includes functions for setting, getting, deleting, and managing JSON data in Redis.

How to use:

```typescript
await jsonRedis.set("key", { name: "John Doe" })
const data = await jsonRedis.get("key")
await jsonRedis.delete("key")
```

## Running App With Node

This application is designed to run with Bun.js. If you want to run it with Node.js, you can use the following command:

```bash
npm i @hono/node-server && npm i -D esbuild tsx
```

**Note:** You will need to install esbuild and tsx as dev dependencies.**

ESBuild Config:

```js
import { promises as fs } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { build } from "esbuild"


// This function reads the package.json file and returns an array of dependencies to exclude from the bundle.

async function builderInit() {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const packageJsonPath = path.join(__dirname, "package.json")
  const data = await fs.readFile(packageJsonPath, "utf-8")
  const packageJson = JSON.parse(data)
  return Object.keys(packageJson.dependencies || {})
}

builderInit()
  .then((dependencies) => {
    build({
      platform: "node",
      target: ["node22"],
      outdir: "dist",
      entryPoints: ["./src/server.ts"],
      bundle: true,
      minify: true,
      minifySyntax: true,
      minifyIdentifiers: true,
      minifyWhitespace: true,
      keepNames: false,
      sourcemap: false,
      treeShaking: true,
      format: "esm",
      entryNames: "[name]",
      logLevel: "info",
      tsconfig: "./tsconfig.json",
      external: ["events", "node:events", ...dependencies],
    })
  })
  .then(() => {
    console.log("Build successful!")
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
```

Changes on the application adapter:

Current Code

```ts
Bun.serve({
  fetch: app.fetch,
  port: env.PORT,
  reusePort: true,
})
```

New Code

```ts
serve({
    fetch: app.fetch,
    port: env.PORT,
    hostname: "0.0.0.0",
  })
```


## Contributing

Contributions are welcome! If you have any suggestions or improvements, please open an issue or submit a pull request.

Some uncompleted features:

- Update the mod manager when a new module is added from the cli.
- Update the mod manager when a new worker is added from the cli.
- Update application utilities and other pre-configured libraries from the cli without breaking the application.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
