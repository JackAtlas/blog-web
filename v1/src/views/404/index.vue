<template>
  <site-main :des="des" :title="title"></site-main>
</template>

<script>
import SiteMain from '@/components/site-main'
export default {
  name: '404',
  components: {
    SiteMain
  },
  data() {
    return {
      title: 'Oops!',
      des: 'Seems like you\'ve come to an unkown place. Please visit other part through the navigation above.'
    }
  }
}
</script>
