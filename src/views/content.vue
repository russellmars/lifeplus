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
            class="nav-item right-align bold f12 pointer">
            <div class="caps" :class="[!item.active ? 'blue' : 'gray']">{{ index | indexHandle }}</div>
            <div class="caps f14" :class="[item.active ? 'blue' : 'gray']">{{ item.enName }}</div>
            <div class="caps" :class="[item.active ? 'blue' : 'gray']">{{ item.name }}</div>
          </div>
        </div>
      </header>
      <div class="main">
        <div class="title f18 blue bold caps">{{ title }}</div>
        <div class="content">
          <div class="sub-title">
            <div class="gray-2 f26 bold caps">{{ subTitle.text }}</div>
            <div class="gray f14 bold letter-spacing">{{ subTitle.enText }}</div>
          </div>
          <div class="group-icons flex justify-between gray clearfix bold">
            <div class="center col col-4" v-for="group in groups">
              <img class="fit" :src="group.pic" alt="">
              <div class="letter-spacing">
                <div class="name f12">{{ group.name }}</div>
                <div class="en-name f8">{{ group.enName }}</div>
              </div>
            </div>
          </div>
          <div class="groups gray">
            <div class="group clearfix" v-for="group in groups">
              <div class="group-en-name f18 blue bold">{{ group.enName }}</div>
              <div class="item col md-col-3 sm-col-4 center" v-for="item in group.items">
                <img class="fit" :src="item.pic" alt="">
                <div class="letter-spacing">
                  <div class="name f12 line-height-4">{{ item.name }}</div>
                  <div class="en-name f8 line-height-4">{{ item.enName }}</div>
                </div>
              </div>
            </div>
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
      margin: 0 auto;
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
        .content {
          margin: 0 5%;
          .sub-title {
            margin-top: 160px;
            margin-left: 15%;
            & > div {
              margin: 20px 0;
            }
          }
          .group-icons {
            margin-top: 150px;
            padding: 0 10px;
            .name {
              margin: 15px 0 10px 0;
            }
            .en-name {

            }
            img {
              width: 100%;
            }
          }
          .groups {
            .group {
              margin-top: 100px;
              .group-en-name {
                margin-bottom: 30px;
                padding-left: 8%;
              }
              .item {
                padding: 10px;
                height: 300px;
                .name {
                  margin: 10px 0;
                }
                .en-name {

                }
              }
            }
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
