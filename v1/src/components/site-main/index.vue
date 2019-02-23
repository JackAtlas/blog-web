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

<style lang="scss" scoped>
.main {
  padding: 0 16px;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;

  .container {
    padding: 2em 0 4em;

    .page-title {
      font-size: 2.125rem;
      font-weight: 400;
      color: #212121;
    }

    .page-des {
      margin: 1em 0;
      font-size: .875rem;
      font-weight: 400;
      line-height: 1.46429em;
      color: #616161;
    }
  }
}
</style>
