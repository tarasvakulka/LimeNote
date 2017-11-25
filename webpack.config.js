
module.exports = {
    entry: "./client/main.js",
    output: {
        path: __dirname + '/public/build',
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        rules:[
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/, /public/],
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['env','react']
                    }
                }
            },
            {
                test: /\.s?css$/,
                exclude: [/node_modules/, /public/],
                use: ["style-loader","css-loader","sass-loader"]
            },
            {
                test: /\.json$/,
                use: ["json-loader"]
            },
            {
                test: /\.gif$/,
                use: ["url-loader?limit=10000&mimetype=image/gif"]
            },
            {
                test: /\.jpg$/,
                use: ["url-loader?limit=10000&mimetype=image/jpg"]
            },
            {
                test: /\.png$/,
                use: ["url-loader?limit=10000&mimetype=image/png"]
            },
            {
                test: /\.svg/,
                use: ["url-loader?limit=26000&mimetype=image/svg+xml"]
            }
        ]
    }
}