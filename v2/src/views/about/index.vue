<template>
  <site-main :title="title">
    <div class="content markdown-body" v-html="content"></div>
  </site-main>
</template>

<script>
import SiteMain from '@/components/site-main/index.vue'
export default {
  name: 'about',
  components: {
    SiteMain
  },
  data() {
    return {
      title: 'About',
      content: `<p>本名：张智杰</p><p>网站名 Jack Atlas 源自某个动漫人物。</p><h3>网站结构</h3><p>这里有：</p><ul><li>我的技术心得</li><li>我的读书笔记</li><li>一些练习向作品</li></ul><p>也会有：</p><ul><li>生活点滴</li><li>兴趣爱好</li></ul><p>外加一些：</p><ul><li>翻译的技术文章</li></ul><p>这里比较少：</p><ul><li>照片和视频</li></ul><p>这里不会有：</p><ul><li>转载内容</li></ul><h3>联系方式</h3><ul><li>网站：<a href="http://jackatlas.com/">http://jackatlas.xyz/</a></li><li>Github：<a href="https://github.com/JackAtlas" target="_blank">https://github.com/JackAtlas</a></li><li>Email：<a href="mailto:jackatlas8864@gmail.com">jackatlas8864[at]gmail.com</a></li></ul>`
    }
  }
}
</script>
