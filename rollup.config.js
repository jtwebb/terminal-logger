import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/index.js',
  output: [
    {
      file: 'build/bundles/bundle.esm.js',
      format: 'es',
      sourcemap: true,
      globals: { 'util': 'util', 'path': 'path' }
    },
    {
      file: 'build/bundles/bundle.esm.min.js',
      format: 'es',
      plugins: [terser()],
      sourcemap: true,
      globals: { 'util': 'util', 'path': 'path' }
    },
    {
      file: 'build/bundles/bundle.umd.js',
      format: 'cjs',
      name: 'logger',
      sourcemap: true,
      globals: { 'util': 'util', 'path': 'path' }
    },
    {
      file: 'build/bundles/bundle.umd.min.js',
      format: 'cjs',
      plugins: [terser()],
      name: 'logger',
      sourcemap: true,
      globals: { 'util': 'util', 'path': 'path' }
    }
  ],
  plugins: [
    resolve({ extensions: ['.js'], browser: false }),
    babel({ babelHelpers: 'bundled', include: ['./src/index.js'], extensions: ['.js'], exclude: './node_modules/**' })
  ]
};
