<template>
    <div class="container">
        <router-view/>
        <footer class="tab_bar">
            <div class="tab" v-for="(item,index) in tab.items" :key="index" @touchstart="activeChange(index)">
                <router-link :to="item.path" class="tab_link">
                    <img :src="tab.index === index ? item.activeImg : item.img" alt="">
                    <span v-text="item.txt"></span>
                </router-link>
            </div>
        </footer>
    </div>
</template>

<script>
import homePng from "@/assets/img/home.png";
import homeActivePng from "@/assets/img/home_active.png";
import applyPng from "@/assets/img/apply.png";
import applyActivePng from "@/assets/img/apply_active.png";
import userPng from "@/assets/img/user.png";
import userActivePng from "@/assets/img/user_active.png";

export default {
  data() {
    return {
      tab: {
        index: 0,
        items: [
          {
            txt: "首页",
            path: "/home",
            img: homePng,
            activeImg: homeActivePng
          },
          {
            txt: "应用",
            path: "/apply",
            img: applyPng,
            activeImg: applyActivePng
          },
          {
            txt: "我的",
            path: "/my",
            img: userPng,
            activeImg: userActivePng
          }
        ]
      }
    };
  },
  methods: {
    activeChange(index) {
      console.log(index);
      this.tab.index = index;
    }
  }
};
</script>

<style lang="less">
.tab_bar {
  font-size: 0.26rem;
  width: 100%;
  height: 1.26rem;
  display: flex;
  text-align: center;
  background: #fafafa;
  position: relative;
  z-index: 999;

  .tab {
    flex: auto;
  }

  .tab_link {
    width: 100%;
    padding: 0.2rem 0 0.04rem;
    display: inline-block;
    color: #666;
  }

  .tab_link img {
    height: 0.56rem;
    display: block;
    margin: 0 auto 0.06rem;
  }
}
</style>
