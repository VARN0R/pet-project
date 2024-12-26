import path from "path";
import { buildPlugins } from "./buildPlugins";
import { buildResolve } from "./buildResolve";
import { WebpackOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: WebpackOptions) {
  const { mode, paths, isDev } = options;

  return {
    mode: mode, // режим разработки. Можно установить режим produnction, тогда все файлы сожмутся до минимального размера. Это нужно чтобы быстрее отправить данные на клиент
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolve(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
