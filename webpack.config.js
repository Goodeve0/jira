const path = require("path");

module.exports = {
  entry: "./src/index.tsx", // 指定入口文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true, // 每次构建清理输出目录
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // 解析文件扩展名
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // 处理 TypeScript 文件
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.less$/, // 处理 Less 文件
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(js|jsx)$/, // 处理 JavaScript 文件
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  mode: "production", // 生产模式
};
