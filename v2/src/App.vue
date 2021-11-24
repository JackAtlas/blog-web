<template>
  <div>
    <site-header></site-header>
    <router-view />
    <site-footer></site-footer>
  </div>
</template>

<script setup>
import SiteHeader from '@/components/site-header/index.vue'
import SiteFooter from '@/components/site-footer/index.vue'

let baseStyle, heartStyle, largeTextStyle, smallTextStyle
baseStyle = 'font-family: "SF Mono", "Hack", monospace; font-weight: 500; vertical-align: middle; color: #303030;'
heartStyle = baseStyle + ' font-family: sans-serif; font-size: 12px; line-height: 12px; color: #f44336;'
largeTextStyle = baseStyle + ' font-size: 30px; line-height: 1.5em; -webkit-text-fill-color: #303030; -webkit-text-stroke: 1px #fff;'
smallTextStyle = baseStyle + ' font-size: 20px; line-height: 1.2em; -webkit-text-fill-color: #303030; -webkit-text-stroke: 1px #fff;'
console.clear()
console.log('%c    Copyright © JackAtlas.xyz 2021', largeTextStyle)
console.log('%c            Made with%c ♥ %cby JackAtlas', smallTextStyle, heartStyle, smallTextStyle)
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
