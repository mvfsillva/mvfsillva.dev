import React from 'react'
import { ApolloProvider } from 'react-apollo'
import client from './src/services/client'

require('typeface-playfair-display')
require('typeface-open-sans')

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)