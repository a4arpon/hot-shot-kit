import { $ } from "bun"

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
    await $`bun run start`
  })
  .catch((err) => {
    console.error("❌ Bundler failed", err)
  })
