module.exports = {
  client: {
    service: {
      name: 'default',
      url: `${import.meta.env.VITE_API_URL}/graphql`,
    },
  },
};
