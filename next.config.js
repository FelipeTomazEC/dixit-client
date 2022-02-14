module.exports = {
  images: {
    domains: process.env.IMAGE_SERVERS.split(',')
  },
  env: {
    WS_URL: process.env.WS_URL,
    API_URL: process.env.API_URL
  }
}