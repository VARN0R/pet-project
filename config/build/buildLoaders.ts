import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { WebpackOptions } from "./types/config";

export function buildLoaders(options: WebpackOptions): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.s[c]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            //для файлов где в названии нет слова module не применять css модули
            auto: (resPath: string) => Boolean(resPath.includes(".module")),
            //для дев режима оставляем названия
            localIdentName: options.isDev
              ? "[path][name]__[local]"
              : "[hash:base64:8]",
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  // Если typescript не использовать, то нужен ещё и babel
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptLoader, cssLoader];
}
