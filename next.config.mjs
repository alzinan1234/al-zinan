/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "w7.pngwing.com",
      "encrypted-tbn0.gstatic.com",
      "www.toptal.com",
      "i.ytimg.com",
    ],
  },

  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/pdf/",
            publicPath: "/_next/static/pdf/",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
