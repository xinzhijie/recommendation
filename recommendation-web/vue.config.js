module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "./static",
  productionSourceMap: false,
  devServer: {
    publicPath: "/",
    host: "0.0.0.0",
    port: 9090,
    useLocalIp: true,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        pathRewrite: { "^/api": "/api" }
      }
    },
    hotOnly: true,
    compress: false,
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
