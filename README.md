# todo-list
todo list using react

1. Install node, npm and yarn.
2. npm -g install eslint eslint-plugin-react live-server
3. goto project directory 
4. yarn init and answer questions
5. eslint --init
```
PS C:\Users\kmuthuk2\Desktop\BKP_FOLDER2\react-tutorial> eslint --init
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? React
? Where does your code run? Browser, Node
? How would you like to define a style for your project? Answer questions about your style
? What format do you want your config file to be in? JSON
? What style of indentation do you use? Spaces
? What quotes do you use for strings? Single
? What line endings do you use? Windows
? Do you require semicolons? Yes
? What format do you want your config file to be in? JSON
Local ESLint installation not found.
The config that you've selected requires the following dependencies: 
```

```
yarn add -D eslint-plugin-react@latest eslint@latest
Successfully created .eslintrc.json file in C:\Users\kmuthuk2\Desktop\BKP_FOLDER2\react-tutorial
ESLint was installed locally. We recommend using this local copy instead of your globally-installed copy.
```

```
PS C:\Users\kmuthuk2\Desktop\BKP_FOLDER2\react-tutorial>
yarn add -D  @babel/cli @babel/core @babel/preset-env @babel/preset-react 
babel-loader css-loader style-loader webpack  webpack-cli webpack-dev-server
```

```
yarn add react@latest react-dom@latest
```


```
PS C:\Users\kmuthuk2\Desktop\BKP_FOLDER2\React Learning\To-Do> cat .\.babelrc
{
    "comments": false,
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```


```
PS C:\Users\kmuthuk2\Desktop\BKP_FOLDER2\React Learning\To-Do> cat .\package.json
{
  "name": "To-Do",
  "version": "1.0.0",
  "description": "To-Do using react",
  "main": "index.js",
  "author": "kannan",
  "license": "MIT",
  "dependencies": {
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
  },
  "devDependencies": {
    "@babel/cli": "^7.4.3",
    "@babel/core": "^7.4.3",
    "@babel/preset-env": "^7.4.3",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.5",
    "css-loader": "^2.1.1",
    "eslint": "^5.16.0",
    "eslint-plugin-react": "^7.12.4",
    "style-loader": "^0.23.1",
    "webpack": "^4.29.6",
    "webpack-cli": "^3.3.0",
    "webpack-dev-server": "^3.3.1"
  },
    "scripts": {
    "serve": "webpack-dev-server",
    "build": "webpack"
  }
}
```

```
PS C:\Users\kmuthuk2\Desktop\BKP_FOLDER2\React Learning\To-Do> cat .\webpack.config.js
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
```
