const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  staticDirs: ["../static"],
  webpackFinal: async (config) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [
      /node_modules\/(?!(gatsby|gatsby-script)\/)/,
    ]

    // Remove core-js to prevent issues with Storybook
    config.module.rules[0].exclude = [/core-js/]
    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[0].use[0].options.plugins.push([
      require.resolve('babel-plugin-remove-graphql-queries'),
      {
        stage: 'develop-html',
        staticQueryDir: 'page-data/sq/d',
      },
    ])

    config.module.rules.push({
      test: /\.s(a|c)ss$/,
      use: [
        'style-loader',
        {
          loader: "css-loader",
          options: {
            importLoaders: 1, // We always need to apply postcss-loader before css-loader
            modules: {
              auto: /(?<!variables)\.module\.scss$/, // true
              localIdentName: "[name]__[local]--[hash:base64:5]",
            },
          },
        },
        {
          loader: 'postcss-loader', // required for tailwind
          options: {
            implementation: require('postcss'), // postcss 8
            postcssOptions: {
              config: path.resolve(__dirname, '../postcss.config.js'),
            },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            // sourceMap: true,
            implementation: require('sass'), // dart sass
          },
        },
      ],
    });

    config.resolve.roots = [
      path.resolve(__dirname, '../static'),
    ];

    config.resolve.mainFields = ['browser', 'module', 'main']
    return config
  },
}
