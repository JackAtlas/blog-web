import request from '@/utils/request'
import { api, apiMap } from './'

export function fetchList() {
  return request({
    url: api + apiMap.articles,
    method: 'get'
  })
}
