import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// export default nextConfig;
import withPWA from "@ducanh2912/next-pwa";

const withPWAConfig = withPWA({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: false,
workboxOptions: {
    disableDevLogs: true,
  },
});

module.exports = withPWAConfig(nextConfig);