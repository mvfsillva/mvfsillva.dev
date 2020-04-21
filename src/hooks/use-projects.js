import { useStaticQuery, graphql } from 'gatsby'

export const useGithubRepositories = () => {
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
                  repositoryTopics(first: 9) {
                    nodes {
                      topic {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  )

  return github.repositoryOwner.pinnedRepositories.edges
}
