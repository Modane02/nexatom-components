/**@type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images:{
        domains:["segurolight.com.br"]
    }
}

module.exports = nextConfig;