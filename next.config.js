const withPWA = require('next-pwa')

module.exports = withPWA(/** @type {import('next').NextConfig} */({
  pwa: {
    dest: 'public'
  },
  reactStrictMode: true,

}))
