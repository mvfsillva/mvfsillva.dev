import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

const GITHUB_BASE_URL = 'https://api.github.com/graphql'
const TOKEN = process.env.GATSBY_GITHUB_TOKEN

export default new ApolloClient({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${TOKEN}`,
  },
  fetch,
})
