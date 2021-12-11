<template>
  <site-main :des="des" :title="title">
    <ul class="list">
      <li class="demo" v-for="(d, i) in list" :key="`demo-${i}`">
        <h2 class="demo-title">{{d.title}}</h2>
        <img class="demo-image" :alt="d.title" :src="d.image">
        <p class="demo-summary">{{d.summary}}</p>
        <div class="clearfix demo-links">
          <button class="f-r demo-btn" @click="openDemo(d.link)">Demo</button>
          <button class="f-r demo-btn" v-if="d.source" @click="openSourceCode(d.source)">源码</button>
        </div>
      </li>
    </ul>
  </site-main>
</template>

<script>
const a = [{"_id":"61a3158f12337f0f4e1cfeae","title":"CSS 3 火影三眼","summary":"CSS 3 实现火影中的三勾玉写轮眼、万花筒写轮眼和轮回眼。","link":"https://jackatlas.xyz/demo/static/sharinngann/","__v":0,"image":"https://user-images.githubusercontent.com/4383746/48325376-3a154c00-e670-11e8-9925-15a8703b34c2.png"},{"_id":"61a3199c2cbd8b12121df483","title":"Pokemon MVP","summary":"Pokemon Most Viable Product，宝可梦最小可用产品。含基础渲染、地图渲染、人物行走、事件对话、简单对战等功能。","link":"https://jackatlas.xyz/demo/static/pokemon-mvp/","__v":0,"image":"https://user-images.githubusercontent.com/4383746/143731417-cd062744-19c1-43bf-aba5-985285f34ba9.png","source":"https://gitee.com/jackatlas/pokemon-mvp"},{"_id":"61a31efc2c3f4a12c54c66a2","title":"测试标题1","image":"https://via.placeholder.com/250x150","summary":"测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1测试简介1","link":"dsfdasfdsafsdfasdfdsfaadsf","__v":0},{"_id":"61a31f232c3f4a12c54c66a3","title":"测试标题2","image":"https://via.placeholder.com/250x400","summary":"测试简介2","link":"dsfsdfdsaadfsda","__v":0}]

import SiteMain from '@/components/site-main/index.vue'
import { fetchList } from '@/api/demos'

export default {
  name: 'demo',
  components: { SiteMain },
  data() {
    return {
      title: 'Demo',
      des: '我的各种案例、小作品集。',
      list: []
    }
  },
  methods: {
    fetchList() {
      fetchList()
        .then(res => {
          if (res.status === 200) {
            const { data } = res
            if (data.code === 0) {
              this.list = data.result
            } else {
              console.log(data.msg)
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    openDemo(link) {
      window.open(link)
    },
    openSourceCode(source) {
      window.open(source)
    }
  },
  created() {
    this.fetchList()
  }
}
</script>

<style scoped>
.list {
  column-count: 3;
  column-gap: 20px;
  padding-left: 0;
}

@media screen and (max-width: 800px) {
  .list {
    column-count: 2;
  }
}

@media screen and (max-width: 500px) {
  .list {
    column-count: 1;
  }
}

.demo {
  break-inside: avoid;
  list-style: none;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.demo:last-child {
  margin-bottom: 0;
}

.demo-title {
  padding: 0 10px;
  font-size: 1.3125rem;
  font-weight: 600;
  color: #212121;
}

.demo-image {
  display: block;
  width: 100%;
  height: auto;
}

.demo-summary {
  padding: 0 10px;
  font-size: .875rem;
  font-weight: 400;
  line-height: 1.46429;
}

.demo-links {
  padding: 0 10px 10px;
}

.demo-btn {
  font-size: .875rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: background-color linear .2s;
}

.demo-btn + .demo-btn {
  margin-right: 10px;
}

.demo-btn:hover {
  background-color: #eee;
  cursor: pointer;
}
</style>