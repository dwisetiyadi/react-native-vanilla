module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@app': './src/app',
          '@assets': './src/assets',
          '@components': './src/components',
          '@config': './src/config',
          '@modules': './src/modules',
          '@utilities': './src/utilities',
        },
      },
    ],
    'jest-hoist',
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
