/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "puvgtufvrywnimyrntkc.supabase.co",
      },
    ],
  },
  // ↑↑追加↑↑
};

export default nextConfig;