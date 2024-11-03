Bun.build({
  entrypoints: ["./src/app.ts"],
  outdir: "./dist",
  target: "node",
  splitting: true,
  sourcemap: "external",
  minify: true,
  format: "cjs",
})
  .finally(() => {
    console.log("✅ Bundler finished")
  })
  .catch((err) => {
    console.error("❌ Bundler failed", err)
  })
