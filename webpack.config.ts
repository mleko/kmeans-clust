import * as path from "path";
import * as webpack from "webpack";

const isProduction = process.env.NODE_ENV === "production";

const config = {
    mode: isProduction ? "production" : "development",
    resolve: {
        // .js is required for react imports.
        // .tsx is for our app entry point.
        // .ts is optional, in case you will be importing any regular ts files.
        extensions: [".js", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "tslint-loader",
                enforce: "pre"
            },
            {
                // Set up ts-loader for .ts/.tsx files and exclude any imports from node_modules.
                test: /\.tsx?$/,
                loaders: ["awesome-typescript-loader"],
                exclude: /node_modules/
            }
        ]
    },
    entry: {
        // Set index.tsx as application entry point.
        bundle: "./example/index.ts"
    },
    devServer: {
        contentBase: path.join(__dirname, "example")
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development")
            }
        })
    ]
};

if (!isProduction) {
    config.plugins.unshift(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    );
    config.devServer["hot"] = true;
} else {
    config.plugins.push(
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin()
    );
}

module.exports = config;
