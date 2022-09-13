import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from "./types/config";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    //подключение html файла в сборку
    new HTMLWebpackPlugin({
      template: paths.html,
    }), 
    // Отображение процесса сборки
    new webpack.ProgressPlugin(), 
  ]
}
