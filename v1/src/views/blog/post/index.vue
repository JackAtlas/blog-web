<template>
  <site-main :title="title">
    <div>
      <div class="meta"><span class="author">{{article.author}}</span><span class="time">{{parseTime(article.time, '{y}-{m}-{d}')}}</span></div>
      <div class="content markdown-body" ref="content" v-html="article.content"></div>
    </div>
  </site-main>
</template>

<script>
import 'github-markdown-css/github-markdown.css'
import hljs from 'highlight.js'
import { getArticle } from '@/api/article'
import { parseTime } from '@/utils'
import SiteMain from '@/components/site-main'
export default {
  name: 'post',
  components: {
    SiteMain
  },
  data() {
    return {
      title: '',

      loading: false,
      article: {}
    }
  },
  methods: {
    fetchData(enTitle) {
      if (this.loading) return
      this.loading = true
      getArticle({ enTitle })
        .then(res => {
          if (res.status === 200) {
            const { data } = res
            if (data.code === 0) {
              if (data.result) {
                this.article = data.result
                this.title = data.result.title
              }
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
    },
    parseTime(time, cFormat) {
      return parseTime(time, cFormat)
    }
  },
  updated() {
    const preArray = this.$refs.content.getElementsByTagName('pre')
    for (var i = 0; i < preArray.length; i++) {
      hljs.highlightBlock(preArray[i])
    }
  },
  created() {
    const enTitle = this.$route.params.enTitle
    if (enTitle) this.fetchData(enTitle)
  }
}
</script>

<style scoped>
.meta {
  margin-bottom: 20px;
  padding-bottom: 20px;
  text-align: right;
  border-bottom: 1px solid #ccc;
}

.time {
  margin-left: 30px;
}
</style>
