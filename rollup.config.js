import typescript from 'rollup-plugin-typescript3';
import {eslint} from 'rollup-plugin-eslint';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    plugins: [
        eslint(),
        typescript()
    ],
    external: [
        'express',
        'sqlite3',
        'swagger-ui-express'
    ]
};