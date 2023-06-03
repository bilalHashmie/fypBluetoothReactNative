// @ts-nocheck
module.exports = api => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
              '@src': './src',
            '@utils': './utils',
            '@hooks': './src/hooks',
            '@store': './store',
            '@actions': './store/actions',
            '@reducers': './store/reducers',
            '@types': './store/types',
            '@screens': './screens',
            '@assets': './assets',
            '@styles': './styles',
            '@components': './src/components',
            '@constants': './constants',
            '@routes': './navigation',
            '@layouts': './layouts',
          },

          extensions: ['.js', '.jsx', '.es', '.es6', '.mjs', '.ts', '.tsx'],
        },
      ],
      'nativewind/babel',
      'react-native-reanimated/plugin',
    ],
  };
};
