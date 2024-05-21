import { BuildOptions } from "./types/config";
import { Configuration as DevServerBuildConfiguration } from "webpack-dev-server";

export function buildDevServer(
    options: BuildOptions
): DevServerBuildConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
