<template>
  <div class="root">
    <div class="container">
      <header class="flex justify-between items-center">
        <div>
          <img width="50%" :src="logo" alt="">
        </div>
        <div class="nav flex flex-auto justify-end">
          <div v-for="(item, index) in nav"
            @click="$router.push(item.link)"
            class="nav-item right-align bold f12">
            <div class="caps" :class="[!item.active ? 'blue' : 'gray']">{{ index | indexHandle }}</div>
            <div class="caps f14" :class="[item.active ? 'blue' : 'gray']">{{ item.enName }}</div>
            <div class="caps" :class="[item.active ? 'blue' : 'gray']">{{ item.name }}</div>
          </div>
        </div>
      </header>
      <div class="main">
        <div class="title f18 blue bold caps">{{ title }}</div>
        <div class="main-logo center">
          <img :src="logo" alt="">
        </div>
        <div class="content gray letter-spacing" v-html="content"></div>
        <div class="relevant center">
          <img class="fit" :src="relevant.pic" alt="">
        </div>
      </div>
    </div>
    <footer class="relative">
      <img class="fit" :src="bottom.pic" alt="">
      <div class="desc absolute white f12">
        <a class="desc absolute white f12" :href="bottom.desc">{{ bottom.desc }}</a>
      </div>
    </footer>
  </div>
</template>

<style lang="less" scoped>
  .root {
    margin: 0 auto;
    .container {
      max-width: 1200px;
      min-width: 600px;
      padding: 0 10%;

      header {
        margin-top: 10px;
        .nav {
          .nav-item {
            margin-right: 10%;
            &:last-of-type {
              margin-right: 0;
            }
            & > div {
              margin: 5px;
            }
          }
        }
      }
      .main {
        .title {
          margin-top: 120px;
        }
        .main-logo {
          margin-top: 60px;
        }
        .sub-title {
          margin-top: 160px;
          margin-left: 20%;
          & > div {
            margin: 20px 0;
          }
        }
        .content {
          margin-top: 100px;
          padding: 0 15%;
          line-height: 2;
          & > p {
            margin: 50px 0;
          }
        }
        .relevant {
          margin-top: 160px;
          img {
            width: 60%;
          }
        }
      }
    }
    footer {
      margin-top: 160px;
      .desc {
        right: 15%;
        top: 50%;
        transform: translateY(-50%);
        a {
          text-decoration: none;
        }
      }
    }
  }
</style>

<style lang="less">
  .root {
    .content {
      & > p {
        margin: 50px 0;
      }
    }
  }
</style>



<script>
  import aboutData from './data/about'
  export default {
    data () {
      return aboutData
    }
  }
</script>
