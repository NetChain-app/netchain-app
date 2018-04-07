<template>
  <section style="height: calc(100% - 1.26rem);">
    <header class="home_top">
        <a class="top_item" data-unfinished="1">
            <img src="@/assets/img/saoma.png" alt="">
            <p>扫码</p>
        </a>
        <a class="top_item" data-unfinished="1">
            <img src="@/assets/img/shoukuan.png" alt="">
            <p>收款</p>
        </a>
        <a class="top_item" data-unfinished="1">
            <img src="@/assets/img/fukuan.png" alt="">
            <p>付款</p>
        </a>
    </header>
    <scroller :height="'8.3rem'" :lock-x="true" :use-pulldown="true"
      :pulldown-config="{downContent: '下拉刷新', 
                         upContent: '释放刷新', 
                         loadingContent: '加载中...',
                         height: 40}">
        <div class="coin_list">
            <a href="#wangmall" class="list_item">
                <div class="item_wrap">
                    <img src="@/assets/img/logo.png" alt="" class="coin_img">
                    <div class="coin_info">
                        <p>A轮网链</p>
                        <p>SKNC</p>
                    </div>
                    <div class="coin_money">
                        <span>0</span>
                        <span> SKNC</span>
                    </div>
                </div>
            </a>
            <a href="${txt}/api/v1/findById?t=1#wangmall" class="list_item">
                <div class="item_wrap">
                    <img src="@/assets/img/logo.png" alt="" class="coin_img">
                    <div class="coin_info">
                        <p>B轮网链</p>
                        <p>SKNC</p>
                    </div>
                    <div class="coin_money">
                        <span>0</span>
                        <span>SKNC</span>
                    </div>
                </div>
            </a>
              <a class="list_item" data-unfinished="1">
                <div class="item_wrap">
                    <img src="@/assets/img/btc.png" alt="" class="coin_img">
                    <div class="coin_info">
                        <p>比特币</p>
                        <p>BTC</p>
                    </div>
                    <div class="coin_money">
                        <span>0</span>
                        <span> BTC</span>
                    </div>
                </div>
            </a>
            <a class="list_item" data-unfinished="1">
                <div class="item_wrap">
                    <img src="@/assets/img/eth.png" alt="" class="coin_img">
                    <div class="coin_info">
                        <p>以太币</p>
                        <p>ETH</p>
                    </div>
                    <div class="coin_money">
                        <span>0</span>
                        <span> ETH</span>
                    </div>
                </div>
            </a>
            <a class="list_item" data-unfinished="1">
                <div class="item_wrap">
                    <img src="@/assets/img/eos.png" alt="" class="coin_img">
                    <div class="coin_info">
                        <p>EOS</p>
                        <p> EOS</p>
                    </div>
                    <div class="coin_money">
                        <span>0</span>
                        <span> EOS</span>
                    </div>
                </div>
            </a>
            <a class="list_item" data-unfinished="1">
                <div class="item_wrap">
                    <img src="@/assets/img/ltc.png" alt="" class="coin_img">
                    <div class="coin_info">
                        <p>莱特币</p>
                        <p>LTC</p>
                    </div>
                    <div class="coin_money">
                        <span>0</span>
                        <span> LTC</span>
                    </div>
                </div>
            </a>
            <a class="list_item" data-unfinished="1">
                <div class="item_wrap">
                    <img src="@/assets/img/ltc.png" alt="" class="coin_img">
                    <div class="coin_info">
                        <p>莱特币</p>
                        <p>LTC</p>
                    </div>
                    <div class="coin_money">
                        <span>0</span>
                        <span> LTC</span>
                    </div>
                </div>
            </a>
            <a class="list_item" data-unfinished="1">
                <div class="item_wrap">
                    <img src="@/assets/img/ltc.png" alt="" class="coin_img">
                    <div class="coin_info">
                        <p>莱特币</p>
                        <p>LTC</p>
                    </div>
                    <div class="coin_money">
                        <span>0</span>
                        <span> LTC</span>
                    </div>
                </div>
            </a>
        </div>
    </scroller>
  </section>
</template>

<style lang="scss">
.home_top {
  color: #fff;
  height: 3.75rem;
  background-image: linear-gradient(#0088FF 15%, #2293F7 30%, #54CFFC);
  background-repeat: no-repeat;
  padding: 0.42rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  .top_item {
    font-size: 0.3rem;
    height: 1.78rem;
    text-align: center;
    flex: auto;

    img {
      width: 1rem;
      height: 1rem;
      margin-bottom: 0.3rem;
    }
  }
}

.coin_list {
  font-size: 0.3rem;

  .list_item {
    display: block;
    padding: 0.3rem 0.6rem;
    border-bottom: 1px solid #ddd;
    color: #666;
  }

  .item_wrap {
    height: 1rem;
    margin: auto;

    .coin_img {
      float: left;
      width: 1rem;
      height: 1rem;
    }

    .coin_info {
      float: left;
      width: 1.1rem;
      height: 0.8rem;
      line-height: 0.4rem;
      margin-left: 0.3rem;
      margin-top: 0.15rem;
      text-align: left;
    }

    .coin_money {
      float: right;
      margin-top: 0.25rem;
    }
  }
}

.xs-plugin-pulldown-container{
  font-size: 0.4rem;
}
</style>

