import { spawn } from "bun"

Bun.build({
  entrypoints: ["./src/app.ts"],
  outdir: "./dist",
  target: "bun",
  splitting: true,
  sourcemap: "external",
  minify: true,
  format: "esm",
})
  .then(() => {
    console.log("✅ Bundler finished")
  })
  .finally(async () => {
    const bunProcess = spawn({
      cmd: ["bun", "./dist/app.js"],
      detached: true,
      stdio: ["ignore"],
    })
    bunProcess.unref()
    console.log("Started Bun process in the background")
  })
  .catch((err) => {
    console.error("❌ Bundler failed", err)
  })
