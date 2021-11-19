/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const { sessionMiddleware, simpleRolesIsAuthorized } = require("blitz");

let config = {
  middleware: [
    sessionMiddleware({
      isAuthorized: simpleRolesIsAuthorized,
    }),
  ],
  webpack(config, options) {
    if (process.env.ANALYZE === "true") {
      const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          generateStatsFile: true,
          reportFilename: options.isServer
            ? "../analyze/server.html"
            : "./analyze/client.html",
        })
      );
    }
    return config;
  },
  reactStrictMode: true,
  pageExtensions: ["mdx", "tsx", "js", "ts"],
  async headers() {
    return [
      {
        source: "/:path*",
        // https://bit.ly/3aWDvYg
        headers: [
          {
            key: "x-frame-options",
            value: "frameGuard",
          },
          {
            key: "x-content-type-options",
            value: "nosniff",
          },
          {
            key: "expect-ct",
            value: "expectCT",
          },
          {
            key: "x-download-options",
            value: "noopen",
          },
        ],
      },
    ];
  },
  poweredByHeader: false,
};

// if (process.env.NODE_ENV === "production") {
// }

module.exports = config;
