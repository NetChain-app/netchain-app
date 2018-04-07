<template>
  <section style="height: calc(100% - 1.26rem);">
    <header class="apply_top">
      <h4 class="title">应用中心</h4>
    </header>
    <scroller :height="'10.8rem'" :lock-x="true">
      <div class="apply_list">
          <a href="https://www.kaolamall.com/wap/goods_14626.htm">
              <img src="@/assets/img/bvghfgyu@3x.png" alt="" >
          </a>
          <a href="https://kaolamall.com/wap/goods_13355.htm">
              <img src="@/assets/img/apply_1.png" alt="" >
          </a>
          <a href="https://www.dlbcc.com/frame.home.html">
              <img src="@/assets/img/apply_2.png" alt="">
          </a>
          <a href="#">
              <img src="@/assets/img/apply_3.jpg" alt="">
          </a>
          <a href="#">
              <img src="@/assets/img/apply_4.jpg" alt="">
          </a>
      </div>
    </scroller>
  </section>
</template>

<style lang="scss">
.apply_top {
  font-size: 0.52rem;
  height: 1.32rem;
  line-height: 1.32rem;
  text-align: center;
  color: #fff;
  background-image: linear-gradient(145deg, #2bdea3, #41a2ea);
  background-repeat: no-repeat;
}

.apply_list {
  padding: 0.15rem;

  a {
    display: block;
    margin-bottom: 0.15rem;
    overflow: hidden;

    img {
      width: 100%;
      float: left;
    }
  }
}
</style>

