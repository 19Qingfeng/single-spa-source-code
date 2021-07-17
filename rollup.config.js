import server from 'rollup-plugin-server';

export default {
  input: './src/main.js',
  output: [
    {
      file: './lib/single-spa.js',
      format: 'umd',
      name: 'singleSpa',
      sourcemap: true,
    },
  ],
  plugins: [
    server({
      port: 10000,
      openPage: './index.html',
      contentBase: '',
    }),
  ],
};
