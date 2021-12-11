<template>
  <main class="main">
    <div class="container">
      <h1 class="page-title">{{title}}</h1>
      <div class="page-des" v-if="des" v-html="des"></div>
      <slot></slot>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'site-main',
    props: {
      title: {
        required: true,
        type: String
      },
      des: {
        type: String
      }
    }
  }
</script>

<style scoped>
.main {
  padding: 0 16px;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.container {
  margin: 0 auto;
  padding: 2em 0;
  transition: max-width .3s cubic-bezier(.4, 0, .2, 1);
}

@media screen and (min-width: 800px) {
  .container {
    max-width: 760px;
  }
}

@media screen and (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}

.page-title {
  font-size: 2.125em;
  font-weight: 400;
  color: 212121;
}

.page-des {
  margin: 1em 0;
  font-size: .875em;
  font-weight: 400;
  line-height: 1.46429;
  color: 616161;
}
</style>