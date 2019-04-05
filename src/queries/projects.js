import { graphql, useStaticQuery } from 'gatsby'

const getProjects = () => {
  const { github } = useStaticQuery(
    graphql`
      query {
        github {
          repositoryOwner(login: "mvfsillva") {
            pinnedRepositories(first: 6) {
              edges {
                node {
                  name
                  description
                  url
                  viewerHasStarred
                  repositoryTopics(first: 9) {
                    nodes {
                      topic { name }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  console.log('my query: ', github.repositoryOwner)
}

export default getProjects