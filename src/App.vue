<template>
  <nav>
    <router-link to="/">首頁</router-link> |
    <router-link to="/products">商品列表</router-link> |
    <router-link to="/cart">購物車</router-link> |
    <router-link to="/admin">管理員後台</router-link> |
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

h1 {
  text-align: center;
}
</style>
