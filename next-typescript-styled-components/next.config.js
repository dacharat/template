const getEndpoint = () => {
  return process.env.NODE_ENV === 'production'
    ? 'https://someendpoint.now.sh'
    : 'http://localhost:3000'
}

module.exports = {
  env: {
    ENDPOINT: getEndpoint(),
  },
}
