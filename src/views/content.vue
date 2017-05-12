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
        <div class="sub-title">
          <div class="gray-2 f26 bold caps">{{ subTitle.text }}</div>
          <div class="gray f14 bold  letter-spacing">{{ subTitle.enText }}</div>
        </div>
        <div class="group-icons flex justify-between">
          <div v-for="group in groups">
            <img :src="group.pic" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .root {
    margin: 0 auto;
    .container {
      max-width: 1200px;
      min-width: 600px;
      height: 400px;
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
        .sub-title {
          margin-top: 160px;
          margin-left: 20%;
          & > div {
            margin: 20px 0;
          }
        }
        .group-icons {
          margin-top: 150px;
          img {
            width: 100%;
          }
        }
      }
    }
  }
</style>


<script>
  import contentData from './data/content'
  export default {
    data () {
      return contentData
    }
  }
</script>
