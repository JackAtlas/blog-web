<template>
  <site-main :des="des" :title="title">
    <router-link class="about" to="/about">About Me</router-link>
  </site-main>
</template>

<script>
import SiteMain from '@/components/site-main/index.vue'
export default {
  name: 'home',
  components: {
    SiteMain
  },
  setup() {
    return {
      title: 'Home',
      des: '我叫张智杰，是一名前端开发者，欢迎来到我的小站。'
    }
  }
}
</script>

<style scoped>
.about {
  display: inline-block;
  min-width: 88px;
  min-height: 36px;
  padding: 8px 16px;
  font-size: .875em;
  font-weight: 600;
  text-transform: uppercase;
  border: 2px solid #e0e0e0;
  border-radius: 2px;
  transition: .3s cubic-bezier(.4, 2, .2, 1);
  transition-property: background-color, box-shadow;
}

.about:hover {
  background-color: rgba(0, 0, 0, .12);
}
</style>