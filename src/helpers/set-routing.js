const routing = [
  {
    sobre: {
      text: 'sobre',
      url: 'about',
    },
    about: {
      text: 'about',
      url: 'about',
    },
  },
  {
    projetos: {
      text: 'projetos',
      url: 'projects',
    },
    projects: {
      text: 'projects',
      url: 'projects',
    },
  },
  {
    artigos: {
      text: 'artigos',
      url: 'articles',
    },
    articles: {
      text: 'articles',
      url: 'articles',
    },
  },
]

const setRouting = url => {
  const router = routing.filter(item => [url] && item[url])[0]
  return { url: router[url].url, text: router[url].text }
}

export default setRouting
