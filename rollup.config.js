import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: './js/App.js',
  output: {
    file: './dist/app.min.js',
    sourceMap: true,
    format: 'iife',
    name: 'app'
  },
  plugins: [
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    })
  ]
}