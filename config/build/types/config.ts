export type BuildMode = "production" | "development";

export interface BuildPaths {
  build: string;
  entry: string;
  html: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface WebpackOptions {
  paths: BuildPaths;
  mode: BuildMode;
  isDev: boolean;
  port: number;
}
