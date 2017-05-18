<template>
  <div class="root absolute left-0 right-0 top-0 bottom-0">
    <div class="container absolute left-0 right-0 top-0 bottom-0">
      <!--<div class="side-text absolute caps">{{ sideText }}</div>-->
      <img class="side-text absolute position-middle" src="../assets/home/side-text.png" alt="">
      <div class="logo-wrapper absolute position-center">
        <div class="logo">
          <img class="fit" src="../assets/home/logo.png" alt="">
        </div>
        <!--<div class="sub-logo">
          <img class="fit" src="../assets/home/sub-logo.png" alt="">
        </div>-->
      </div>
      <div class="navs absolute position-center flex justify-center">
        <!--<img src="../assets/home/nav-home.png" alt="">
        <img src="../assets/home/nav-content.png" alt="">
        <img src="../assets/home/nav-about.png" alt="">-->
        <div v-for="(item, index) in nav"
          @click="$router.push(item.link)"
          class="nav-item right-align bold f12 pointer">
          <div class="caps" :class="[!item.active ? 'blue' : 'gray']">{{ index | indexHandle }}</div>
          <div class="caps f14" :class="[item.active ? 'blue' : 'gray']">{{ item.enName }}</div>
          <div class="caps" :class="[item.active ? 'blue' : 'gray']">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import "../style/var.less";
  .root {
    margin: 2.6vh 2.9vw;
    box-sizing: border-box;
    .container {
      border: 3px solid @color-blue-1;
    }

    .side-text {
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
      display: inline-block;
    }

    .logo-wrapper {
      top: 32.2vh;
      .logo {
        width: 15vw;
      }

      .sub-logo {
        margin-top: 4vh;
        // width: 124px
      }
    }

    .navs {
      // bottom: 25%;
      top: 69.7vh;
      width: 100%;
      text-align: center;
      img {
        margin: 0 5%;
        max-height: 40px;
      }
      .nav-item {
        margin-right: 9.1vw;
        &:last-of-type {
          margin-right: 0;
        }
        & > div {
          margin: 5px;
        }
      }
    }
  }
</style>

<script>
  import homeData from './data/home'
  export default {
    data () {
      return homeData
    }
  }
</script>

