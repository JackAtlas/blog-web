<template>
  <site-main :des="des" :title="title">
    <ul class="list">
      <li class="post" v-for="(p, i) in list" :key="`post-${i}`">
        <router-link class="post-link" :to="`/blog/${p.enTitle}`">
          <h2 class="post-title">{{p.title}}</h2>
        </router-link>
        <p class="post-summary">{{p.summary}}</p>
        <div class="clearfix">
          <div class="f-r post-author">{{p.time}}</div>
          <div class="f-l post-time">{{p.author}}</div>
        </div>
      </li>
    </ul>
  </site-main>
</template>

<script>
  import { fetchList } from '@/api/articles'
  import SiteMain from '@/components/site-main/index.vue'
  
  export default {
    name: 'blog-list',
    components: { SiteMain },
    data() {
      return {
        title: 'Blog',
        des: '我的博客，这里有技术文、美食文、心情文，大杂烩一锅端。',

        loading: false,
        list: []
      }
    },
    methods: {
      fetchList() {
        if (this.loading) return
        this.loading = true
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
            this.loading = false
          })
          .catch(err => {
            console.log(err)
            this.loading = false
          })
      }
    },
    created() {
      this.fetchList()
    }
  }
</script>

<style scoped>
.list {
  margin-bottom: 0;
  padding-left: 0;
}

.post {
  padding: 16px 0;
  list-style: none;
  border-bottom: 1px solid #eee;
}

.post:last-child {
  border-bottom: none;
}

.post-link:hover {
  text-decoration: underline;
}

.post-title {
  font-size: 1.3125rem;
  font-weight: 600;
  line-height: 1.66667em;
  color: #212121;
}

.post-summary {
  margin: 1em 0;
  font-size: .875rem;
  font-weight: 400;
  line-height: 1.46429em;
  color: #616161;
}

.post-author,
.post-time {
  font-size: .875rem;
  color: #919191;
}
</style>