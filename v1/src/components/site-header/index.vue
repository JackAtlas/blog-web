<template>
  <header>
    <div class="logo-wrapper">
      <img src="@/assets/logo.png" alt="" class="logo">
    </div>
    <nav class="nav">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/blog">Blog</router-link>
      <router-link class="nav-link" to="/about">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'site-header'
}
</script>

<style lang="scss" scoped>
  .logo-wrapper {
    padding-top: 30px;
    text-align: center;

    & .logo {
      display: inline-block;
      height: 200px;

      @media screen and (max-width: 600px) {
        height: 140px;
      }
    }
  }

  .nav {
    padding: 16px 0;
    text-align: center;

    & .nav-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 88px;
      min-height: 36px;
      font-size: .875rem;
      font-weight: 600;
      line-height: 1.4em;
      text-transform: uppercase;
      border-radius: 2px;
      outline: none;
      user-select: none;
      transition: background-color 250ms cubic-bezier(.4, 0, .2, 1) 0ms, background-color 250ms cubic-bezier(.4, 0, .2, 1) 0ms;

      &:hover {
        background-color: rgba(0, 0, 0, .12);
      }
    }
  }
</style>
