import axios from 'axios'
import {
  BannerResource,
  SearchResource
} from './resource'

export default {
  // 获取banner首页轮播图
  getBannerResource () {
    return axios.get(BannerResource)
  },
  getSearchResource (keywords, limit, offset, type) {
    return axios.get(SearchResource, {
      params: {
        keywords: keywords,
        limit: limit,
        offset: offset,
        type: type
      }
    })
  }
}
