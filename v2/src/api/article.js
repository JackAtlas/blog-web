import request from '@/utils/request'
import { api, apiMap } from './'

export function getArticle(query) {
  if (!query || !query.enTitle) return Promise.reject('请传入文章的英文标题')
  let url = `${api}${apiMap.article}?enTitle=${query.enTitle}`
  return request({
    url,
    method: 'get'
  })
}
