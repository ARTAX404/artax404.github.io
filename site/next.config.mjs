import createNextPwa from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const withPWA = createNextPwa({
  dest: "public",
  register: true,
  skipWaiting: true,
  cacheStartUrl: true,
  disable: process.env.NODE_ENV === "development",
});

export default withPWA({
  reactStrictMode: true,
  experimental: { typedRoutes: true },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "placekitten.com" }
    ],
  },
});

