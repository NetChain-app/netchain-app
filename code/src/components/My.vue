<template>
  <section style="height: calc(100% - 1.26rem);">
    <header class="user_info">
        <h4 class="title">个人中心</h4>
        <div class="user">
            <img src="@/assets/img/avator_background.png" alt="" class="avator" data-clipboard-target="#username">
            <span id="username" class="username"></span>
        </div>
    </header>
    <div class="operator_list">
      <a href="#generalize" class="list_item icon_generalize">
            <span>推广中心</span>
            <i class="arrow"></i>
        </a>
      <a href="#applyQrcode" class="list_item icon_share">
          <span>B轮代理申请码</span>
          <i class="arrow"></i>
      </a>
        </c:if>
      <a href="#myGoods" class="list_item icon_goods">
          <span>商品购买</span>
          <i class="arrow"></i>
      </a>
      <a href="javascript: showExitDialog();" class="list_item icon_exit">
          <span>安全退出</span>
      </a>
    </div>
  </section>
</template>

<style lang="scss">
.user_info {
  height: 4.6rem;
  padding: 0.67rem 0 0.85rem;
  box-sizing: border-box;
  color: #fff;
  text-align: center;
  background: url('../assets/img/background.png') no-repeat;
  background-size: 100% 100%;

  .title {
    font-size: 0.45rem;
  }

  .user {
    font-size: 0.35rem;
    width: 3rem;
    margin: auto;
    padding-top: 0.77rem;

    .avator {
      width: 1.48rem;
      height: 1.48rem;
      margin-bottom: 0.3rem;
    }
  }
}



  .operator_list {
    font-size: 0.3rem;
    line-height: 1.06rem;
    text-align: left;

    .list_item {
      display: block;
      padding-left: 0.95rem;
      border-bottom: 2px solid #ddd;
      color: #333;
      position: relative;
    }

    .icon_generalize {
      background: url('../assets/img/icon_generalize.png') no-repeat 4% center;
      background-size: 6%;
    }
    .icon_share {
      background: url('../assets/img/icon_share.png') no-repeat 4% center;
      background-size: 6%;
    }

    .icon_goods {
      background: url('../assets/img/icon_goods.png') no-repeat 4% center;
      background-size: 6%;
    }

    .icon_exit {
      background: url('../assets/img/icon_exit.png') no-repeat 4% center;
      background-size: 6%;
    }

    .arrow {
      width: 12px;
      height: 12px;
      border: 1px solid #999;
      border-left: none;
      border-bottom: none;
      transform: rotate(45deg);
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0.3rem;
      margin: auto;
    }
  }
</style>

