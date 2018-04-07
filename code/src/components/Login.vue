<template>
  <div class="container">
    <section class="login_top">
        <img src="@/assets/img/logo.png" alt="" class="logo">
        <img src="@/assets/img/apply_name.png" alt="" class="apply_name">
    </section>
    <section class="login_form">
        <div class="error"></div>
        <form action=""  method="post">
            <div class="input-group username">
                <input type="text"  name="userName" id ="userName" placeholder="用户名"  autocomplete="off" >
            </div>
            <div class="input-group password">
                <input type="password" id="password" name="password" placeholder="密码"  autocomplete="off" >
            </div>
            <!-- <div class="checkcode">
                <input class="checkcode_ipt" id="checkcode" maxlength="4" name="checkcode" type="number" pattern="[0-9]*" placeholder="&nbsp;验证码" autocomplete="off" />
                <img alt="验证码" class="imagecode" src="" />
                <a href="javascript:void(0)"  onclick="reloadCode()" >看不清，换一张</a>
            </div> -->
            <router-link to="/home" class="login_btn">登录</router-link>
        </form>
    </section>
  </div>
</template>

<style lang="scss">
.login_top {
  padding: 1.5rem 0 1.34rem;

  img {
    display: block;
    margin: auto;
  }

  .logo {
    width: 1.84rem;
    height: 1.84rem;
  }

  .apply_name {
    width: 2.57rem;
    height: 0.82rem;
    margin-top: 0.2rem;
  }
}

.login_form {
  position: relative;

  .error {
    width: 80%;
    font-size: 0.4rem;
    color: #f00;
    text-align: center;
    background: rgba(255, 2, 2, 0.25);
    border-radius: 0.26rem;
    position: absolute;
    left: 0;
    right: 0;
    top: -0.8rem;
    margin: auto;
  }

  .input-group {
    width: 6.36rem;
    height: 0.92rem;
    border: 1px solid #ddd;
    border-radius: 0.92rem;
    background: no-repeat 5% center;
    background-size: 0.4rem 0.42rem;
    overflow: hidden;
    margin: auto;
    margin-bottom: 0.3rem;
  }

  .username {
    background-image: url(../assets/img/username.png);
  }

  .password {
    background-image: url(../assets/img/lock.png);
  }

  .login_btn {
    font-size: 0.36rem;
    width: 6.36rem;
    height: 0.92rem;
    line-height: 0.92rem;
    background: url(../assets/img/login_btn.png) no-repeat 5% center;
    background-size: 100%;
    color: #fff;
    display: block;
    margin: auto;
  }

  .input-group input {
    float: left;
    width: 75%;
    height: 0.6rem;
    line-height: 0.6rem;
    border: none;
    margin-top: 0.16rem;
    margin-left: 16%;
  }

  .checkcode {
    font-size: 0.16rem;
    width: 6.36rem;
    height: 0.9rem;
    margin: auto;
    margin-bottom: 0.3rem;
  }

  .checkcode .checkcode_ipt {
    font-size: 0.4rem;
    float: left;
    width: 2rem;
    padding-left: 0.08rem;
    height: 100%;
    box-sizing: border-box;
  }

  .checkcode .imagecode {
    margin-left: 0.4rem;
  }
}
</style>
