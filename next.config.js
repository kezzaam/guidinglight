/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // any image from external api needs to be accepted here
        domains: ["images.dog.ceo"],
    }
}

module.exports = nextConfig
