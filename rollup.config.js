import json from "@rollup/plugin-json"
import typescript from "rollup-plugin-typescript2"
import { cleandir } from "rollup-plugin-cleandir"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import pkg from './package.json'

import babel from 'rollup-plugin-babel'

module.exports = {
  input: ["./src/index.ts"],
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module, 
      format: "es"
    },
    // {
    //   file: pkg.browser,
    //   format: "umd",
    //   name: "hello"
    // }
  ],
  plugins: [
    cleandir("./lib"),
    json(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: "ES2015",
        },
      },
    }),
    babel({
      exclude: "node_modules/**"
    }),
    commonjs(),
    resolve(),
    terser(),l
    filesize()
  ],
}
