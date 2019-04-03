import ApolloClient from 'apollo-boost'

const GITHUB_BASE_URL = 'https://api.github.com/graphql'
const TOKEN = process.env.GATSBY_GITHUB_TOKEN

export default new ApolloClient({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${TOKEN}`,
  },
})
