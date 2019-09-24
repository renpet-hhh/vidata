import webpack, { Configuration } from "webpack";
import nodeExternals from 'webpack-node-externals';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

const clientEntry = process.env.NODE_ENV === "production" ? ["eventsource-polyfill", "./src/index.tsx"] :
    ["eventsource-polyfill", "react-hot-loader/patch", "webpack-hot-middleware/client?path=/__webpack_hmr", "./src/index.tsx"];

const clientConfig: Configuration = {
    name: 'client',
    entry: clientEntry,
    output: {
        filename: "client.js",
        path: 'C:\\Users\\renan\\OneDrive\\Documentos\\React\\VidataUniversal\\build',
        publicPath: "/"
    },
    devtool: "eval-source-map",
    // @ts-ignore
    mode: process.env.NODE_ENV,
    target: "web",
    module: {
        rules: [
            {
                test: /\.(?:jsx?|tsx?)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ],
                        plugins: [
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true
                        }
                    },
                    {
                        loader: 'css-loader'
                    }
                ],
            }

        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]

}

const serverConfig: Configuration = {
    name: 'server',
    entry: "./src/server/global-middlewares/serverRenderer.tsx",
    output: {
        filename: "server.js",
        path: path.resolve("build"),
        libraryTarget: "commonjs2"
    },
    // @ts-ignore
    mode: process.env.NODE_ENV,
    target: 'node',
    node: {
        __dirname: false
    },
    module: {
        rules: [
            {
                test: /\.(?:jsx?|tsx?)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ],
                        plugins: [
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ignore-loader'
                    }
                ]
            }
        ]
    },
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.css']
    }
}

module.exports = [clientConfig, serverConfig];