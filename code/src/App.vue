<template>
  <div id="app">
    <router-view/>
    <footer class="tab_bar">
        <div class="tab" v-for="(item,index) in tab.items" :key="index">
            <router-link :to="item.path" class="tab_link">
                <img :src="tab.index === index ? item.activeImg : item.img" alt="">
                <span v-text="item.txt"></span>
            </router-link>
        </div>
    </footer>
  </div>
</template>

<script>
import homePng from '@/assets/img/home.png'
import homeActivePng from '@/assets/img/home_active.png'
import applyPng from '@/assets/img/apply.png'
import applyActivePng from '@/assets/img/apply_active.png'
import userPng from '@/assets/img/user.png'
import userActivePng from '@/assets/img/user_active.png'

export default {
name: "App",
  data(){
    return {
      tab: {
        index: 0,
        items: [
          {
            txt: '首页',
            path: '/home',
            img: homePng,
            activeImg: homeActivePng
          },
          {
            txt: '应用',
            path: '/apply',
            img: applyPng,
            activeImg: applyActivePng
          },
          {
            txt: '我的',
            path: '/user',
            img: userPng,
            activeImg: userActivePng
          }
        ]
      }
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.tab_bar {
  font-size: 0.26rem;
  width: 100%;
  height: 1.3rem;
  border-top: 0.03rem solid #eaeaea;
  display: flex;
  text-align: center;
  background: #fafafa;

  .tab {
    flex: auto;
  }

  .tab_link {
    width: 0.72rem;
    padding: 0.15rem 0.15rem 0.12rem;
    text-align: center;
    display: inline-block;
    color: #666;
  }

  .tab_link img {
    height: 0.56rem;
    margin-bottom: 0.02rem;
  }
}
</style>
