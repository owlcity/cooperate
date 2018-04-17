const { injectBabelPlugin,getLoader } = require('react-app-rewired');
const fileLoaderMatcher = function (rule) {
  return rule.loader && rule.loader.indexOf(`file-loader`) != -1;
}
const path = require('path');
const theme = require('./config-theme.json');

module.exports = function override(config, env) {
    // babel-plugin-import
    config = injectBabelPlugin(['import', {
      libraryName: 'antd-mobile',
      //style: 'css',
      style: true, // use less for customized theme
    }], config);
    //alias
    config.resolve = {
        alias: {
          '@': path.resolve(__dirname, 'src/'),
          'assets': path.resolve(__dirname, 'src/assets/'),
          'components': path.resolve(__dirname, 'src/components'),
          'pages': path.resolve(__dirname, 'src/pages'),
          'public': path.resolve(__dirname, 'src/public'),
        }
    };
    // customize theme
    config.module.rules[1].oneOf.unshift(
      {
        test: /\.less$/,
        use: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
          {
            loader: require.resolve('less-loader'),
            options: {
              javascriptEnabled: true,
              // theme vars, also can use theme.js instead of this.
              modifyVars: theme,
            },
          },
        ]
      }
    );

    // css-modules
    config.module.rules[1].oneOf.unshift(
      {
        test: /\.css$/,
        exclude: /node_modules|antd-mobile\.css/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]___[hash:base64:5]'
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ]
      }
    );

    // file-loader exclude
    let l = getLoader(config.module.rules, fileLoaderMatcher);
    l.exclude.push(/\.less$/);

    return config;
};