/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // any image from external api needs to be accepted here
        domains: ["images.dog.ceo"],
    },
    experimental: {
        serverComponentsExternalPackages: ['@prisma/client', 'bcrypt'],
    },

}

module.exports = nextConfig
