/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ddragon.leagueoflegends.com",
        pathname: "/cdn/**", // Riot API 이미지 경로 패턴
      },
    ],
    formats: ["image/avif", "image/webp"], // 웹 최적화된 이미지 포맷 지원
  },
};

export default nextConfig;
