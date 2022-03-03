import json from "@rollup/plugin-json"
import typescript from "rollup-plugin-typescript2"
import { cleandir } from "rollup-plugin-cleandir"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"

const extensions = [".js", ".ts"]

module.exports = {
  input: ["./src/index.ts"],
  output: {
    file: "dist/fascapi.js",
    // dir: "./dist",
    format: "cjs",
  },
  plugins: [
    cleandir("./dist"),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: "ESNext",
        },
      },
    }),
    resolve(),
    commonjs(),
    json(),
  ],
}
