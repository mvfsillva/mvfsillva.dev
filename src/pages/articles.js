import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'styled-tools'

import { Header, Footer, Link } from '../components'

import getPosts from '../queries/posts'

import contacts from '../helpers/contacts'
import intl from '../helpers/intl'

import Content from '../styles/content'

const PageTitle = styled.h1`
  ${theme('typography.title')};
  margin-bottom: ${theme('spacing.xHuge')};
`

const PostList = styled.article`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  align-content: center;
  padding: ${theme('spacing.small')};
  margin-bottom: ${theme('spacing.medium')};
  border-bottom: 1px solid ${theme('palette.black')};
  min-width: 800px;

  h2 {
    ${theme('typography.subtitle')};
  }
`

const Main = styled(Content)`
  flex-direction: column;
  align-items: center;
`

const Articles = ({ lang, setLanguage }) => {
  const data = getPosts()

  return (
    <>
      <Header navigation={intl.general[lang].navigation} setLanguage={setLanguage} back />
      <PageTitle>Articles</PageTitle>
      <Main>
        {/* {data.edges.map(({ id, node }) => (
          <Link key={id} to={node.fields.slug}>
            <PostList>
              <p>{node.frontmatter.title}</p>
              <span>{node.frontmatter.date}</span>
            </PostList>
          </Link>
        ))} */}
      </Main>
      <Footer center contacts={contacts} />
    </>
  )
}

Articles.propTypes = {
  lang: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
}

export default Articles
