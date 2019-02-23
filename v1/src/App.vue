<template>
  <div id="app">
    <site-header></site-header>
    <router-view/>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
export default {
  components: {
    SiteHeader,
    SiteFooter
  },

  created() {
    let baseStyle, heartStyle, largeTextStyle, smallTextStyle
    baseStyle = 'font-family: "SF Mono", "Hack", monospace; font-weight: 500; vertical-align: middle; color: #303030;'
    heartStyle = baseStyle + ' font-family: sans-serif; font-size: 12px; line-height: 12px; color: #f44336;'
    largeTextStyle = baseStyle + ' font-size: 20px; line-height: 1.5em;'
    smallTextStyle = baseStyle + ' font-size: 16px; line-height: 1.2em;'
    console.clear()
    console.log('%c    Copyright © JackAtlas.com 2018', largeTextStyle)
    console.log('%c            Made with%c ♥ %cby JackAtlas', smallTextStyle, heartStyle, smallTextStyle)
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
