import typescript from '@rollup/plugin-typescript';
import babel from "rollup-plugin-babel"

const config = [
  {
    input: 'src/index.ts',
    output: {
      dir: './dir',
      format: 'cjs',
    },
    plugins: [
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  },
];

export default config;
