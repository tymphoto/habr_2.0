import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    //подключение html файла в сборку
    new HTMLWebpackPlugin({
      template: paths.html,
    }), 
    // Отображение процесса сборки
    new webpack.ProgressPlugin(), 
    new MiniCssExtractPlugin({
      filename: 'css/[name.contenthash:8].css',
      chunkFilename: 'css/[name.contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    })
  ]
}
