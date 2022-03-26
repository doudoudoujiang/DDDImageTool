import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json";
const input = ["src/index.js"];
export default [
    {
        // UMD node插件无法使用
        input: "src/index.js",
        plugins: [
            nodeResolve(),
            babel({
                babelHelpers: "bundled",
            }),
            terser(),
            commonjs()
        ],
        output: {
            file: `dist/${pkg.name}.min.js`,
            format: "umd",
            name: "myLibrary",
            esModule: false,
            exports: "named",
            sourcemap: true,
        },
    }, 
    // ESM and CJS
    {
        input,
        plugins: [nodeResolve(),commonjs()],
        output: [{
                dir: "dist/esm",
                format: "esm",
                exports: "named",
                sourcemap: true,
            },
            {
                dir: "dist/cjs",
                format: "cjs",
                exports: "named",
                sourcemap: true,
            },
        ],
    },
]