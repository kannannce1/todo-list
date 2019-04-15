const path = require('path');

module.exports = () => {
    return {
        context: __dirname,
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, 'dist'),
            publicPath: '/',
            filename: 'bundle.js'
        },
        mode: 'development',
        devtool: 'cheap-module-source-map',
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                }
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: false,
            historyApiFallback: true,
            disableHostCheck: true
        }
    };
};