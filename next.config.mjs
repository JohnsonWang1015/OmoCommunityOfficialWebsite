/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "www.dropbox.com",
            },
            {
                hostname: "dl.dropboxusercontent.com",
            },
        ],
    },
};

export default nextConfig;
