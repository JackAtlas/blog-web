<template>
  <footer>
    <div class="container footer">
      <div class="copyright">Copyright &copy; JackAtlas.com 2018</div>
      <div class="made"><a href="https://github.com/JackAtlas" target="_blank">Made with <span class="heart">❤</span> by JackAtlas</a></div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100px;

  & .made a {
    & .heart {
      display: inline-block;
      color: #f44336;
      transition: .3s cubic-bezier(.4, 0, .2, 1);
    }

    &:hover {
      border-bottom: 1px solid currentColor;
      color: rgba(33,150,243,.8);
      transition: .3s cubic-bezier(.4, 0, .2, 1);
      transition-property: border-bottom, color;

      & .heart {
        color: #d32f2f;
        transform: scale(1.4);
      }
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: space-around;
    height: 60px;
  }
}
</style>
