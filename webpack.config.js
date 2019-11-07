const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader?attrs[]=video:src"
          }
        ]
      },
	  {
        test: /\.(mp4|png)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
			  mimtetype: 'video/mp4',
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};