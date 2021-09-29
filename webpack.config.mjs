import autoprefixer from 'autoprefixer';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import RobotstxtWebpackPlugin from 'robotstxt-webpack-plugin';
import TerserJSPlugin from 'terser-webpack-plugin';
import { env, paths, server } from './config';

const webpackConfig = {
  mode: env.development ? 'development' : 'production',
  context: paths.client,
  entry: './index.jsx',
  resolve: { extensions: ['.jsx', '.mjs', '.cjs', '.js', '.scss', '.css'] },
  output: {
    filename: `js/[name]${env.production ? '.[contenthash:8]' : ''}.js`,
    chunkFilename: `js/[name]${env.production ? '.[contenthash:8]' : ''}.chunk.js`,
    path: paths.public,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|cjs|mjs|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: env.development,
            configFile: true
          }
        }
      },
      {
        test: /.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/'
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: !env.production,
              importLoaders: 2,
              modules: {
                exportGlobals: true,
                localIdentName: `${env.production ? '[path][name]__[local]--' : ''}[hash:base64:5]`
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: !env.production,
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    flexbox: 'no-2009',
                    grid: 'autoplace'
                  })
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !env.production,
              sassOptions: {
                includePaths: []
              }
            }
          }
        ]
      },
      {
        test: /\.(svg|png|jpe?g|gif)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: `images/[name].[ext]`,
              publicPath: '/'
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff2?)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: `fonts/[name].[ext]`,
              publicPath: '/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/[name]${env.development ? '' : '.[contenthash:8]'}.css`,
      chunkFilename: `css/[name]${env.development ? '' : '.[contenthash:8]'}.chunk.css`
    }),
    new HtmlWebpackPlugin({
      minify: !env.development && {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true
      },
      template: `${paths.assets}/index.ejs`,
      publicPath: '/',
      scriptLoading: 'defer'
    }),
    new FaviconsWebpackPlugin({
      mode: 'auto',
      logo: `${paths.assets}/images/logo/black_transparent-2048x2048.png`,
      cache: env.development,
      publicPath: '/',
      prefix: '',
      inject: true
    }),
    new RobotstxtWebpackPlugin({
      policy: [
        {
          userAgent: '*',
          allow: '/$',
          disallow: '/'
        }
      ]
    })
  ],
  optimization: {
    minimize: env.production,
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          format: {
            comments: false
          }
        },
        extractComments: false
      }),
      new CssMinimizerPlugin({})
    ],
    runtimeChunk: {
      name: (entry) => `runtime-${entry.name}`
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all'
        }
      }
    }
  },
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    port: server.livePort,
    static: [paths.public],
    historyApiFallback: true,
    proxy: {
      context: '/api',
      target: `http://locahost:${server.port}`,
      withCredentials: true
    }
  }
};

export default webpackConfig;
