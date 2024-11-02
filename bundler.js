Bun.build({
  entrypoints: ["./src/app.ts"],
  outdir: "./dist",
  target: "bun",
  splitting: true,
  sourcemap: "none",
  minify: true,
  bytecode: true,
})
  .finally(() => {
    console.log("✅ Bundler finished")
  })
  .catch((err) => {
    console.error("❌ Bundler failed", err)
  })
