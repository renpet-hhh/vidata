import webpack, { Configuration } from "webpack";
import nodeExternals from 'webpack-node-externals';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


const clientConfig: Configuration = {
    name: 'client',
    entry: [
        "webpack-hot-middleware/client",
        "./src/index.tsx"
    ],
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
        extensions: ['.tsx', '.ts', '.jsx', '.js']
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
    entry: "./src/server/server.tsx",
    output: {
        filename: "server-bundle.js",
        path: 'C:\\Users\\renan\\OneDrive\\Documentos\\React\\VidataUniversal\\src\\server',
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

export default [clientConfig, serverConfig];