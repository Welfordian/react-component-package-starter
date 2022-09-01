import pkg from './package.json'
import commonjs from 'rollup-plugin-commonjs';

const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { babel } = require('@rollup/plugin-babel');

console.log(commonjs);

export default {
    input: 'src/index.js',
    plugins: [
        nodeResolve(),
        babel({ 
            exclude: 'node_modules/**',
            presets: ['@babel/env', '@babel/preset-react']
        }),
        commonjs()
    ],
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        strict: false
      }
    ],
    external: ['react', 'react-dom']
  }
  