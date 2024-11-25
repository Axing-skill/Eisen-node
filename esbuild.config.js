require("esbuild").buildSync({
  entryPoints: ["./src/main.js"],
  bundle: true,
  minify: true,
  format: "cjs",
  platform: "node",
  target: ["es2020"],
  outfile: "./dist/main.js"
});
