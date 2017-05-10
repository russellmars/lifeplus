<template>
  <div class="root absolute left-0 right-0 top-0 bottom-0">
    <img class="side-text absolute position-middle" src="../assets/home/side-text.png" alt="">
    <div class="logo-wrapper absolute position-center">
      <div class="logo">
        <img class="fit" src="../assets/home/logo.png" alt="">
      </div>
      <div class="sub-logo">
        <img class="fit" src="../assets/home/sub-logo.png" alt="">
      </div>
    </div>
    <div class="navs absolute position-center">
      <img src="../assets/home/nav-home.png" alt="">
      <img src="../assets/home/nav-content.png" alt="">
      <img src="../assets/home/nav-about.png" alt="">
    </div>
  </div>
</template>
<style lang="less" scoped>
  @color-blue-1: blue;
  .root {
    margin: 40px;
    border: 3px solid @color-blue-1;
    min-width: 600px;

    .side-text {
      left: 15px;
    }

    .logo-wrapper {
      top: 25%;
      width: 12%;
      .logo {

      }

      .sub-logo {
        margin-top: 30px;
      }
    }

    .navs {
      bottom: 25%;
      width: 100%;
      text-align: center;
      img {
        margin: 0 10%;
        max-height: 40px;
      }
    }
  }
</style>

