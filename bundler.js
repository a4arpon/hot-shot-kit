if (typeof Bun !== "undefined") {
  Bun.build({
    entrypoints: ["./src/app.ts"],
    outdir: "./dist",
    target: "node",
    splitting: true,
    sourcemap: "external",
    minify: true,
    format: "esm",
  })
    .finally(() => {
      console.log("✅ Bundler finished")
    })
    .catch((err) => {
      console.error("❌ Bundler failed", err)
    })
} else {
  console.error("❌ Bundler not supported on this runtime")
  console.error("Try to use ESBuild instead if youre using Node.js")
}
