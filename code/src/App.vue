<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

html,
body {
  height: 100%;
  overflow: hidden;
}

img {
  display: block;
  margin: auto;
}

button,input{
  border: none;
  outline: none;
}

.container{
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  text-align: center;
  color: #2c3e50;
}
</style>
