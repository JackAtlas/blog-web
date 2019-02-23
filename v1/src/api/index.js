const env = process.env.NODE_ENV

export const api = env === 'development' ? '//localhost:8080/v1/blog/' : '//api.jackatlas.com/v1/blog/'

export const apiMap = {
  articles: 'articles',
  article: 'article'
}
