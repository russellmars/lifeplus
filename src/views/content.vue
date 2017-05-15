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
            <div class="group-icon center col col-4 pointer" v-for="group in groups" @click="scrollTargetGroup(group)">
              <img class="fit" :src="group.pic" alt="">
              <div class="letter-spacing">
                <div class="name f12">{{ group.name }}</div>
                <div class="en-name f8">{{ group.enName }}</div>
              </div>
            </div>
          </div>
          <div class="groups gray">
            <div class="group clearfix" v-for="group in groups" :id="'group_' + group.enName">
              <div class="group-en-name f18 blue bold">{{ group.enName }}</div>
              <div class="item col col-6 sm-col-4 md-col-3 center pointer"
                v-for="item in group.items"
                @click="checkDetail(item)"
                @mouseleave="mouseleaveItem(item)"
                @mouseenter="mouseenterItem(item)">
                <div class="item-wrapper relative">
                  <img class="fit" :src="item.pic" alt="" :style="{opacity: item.hover ? 0 : 1}">
                  <div class="absolute top-0 left-0 top-0 bottom-0 right-0"><img class="fit" :src="item.gif" alt="" style="width:0;height:0;"><img class="fit" :src="item.gif" v-if="item.hover" alt=""></div>
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
  </div>
</template>

<style lang="less" scoped>
  @import "../style/var.less";
  .root {
    margin: 0 auto;
    .container {
      max-width: 1200px;
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
            .group-icon {
              padding: 40px 10px 20px 10px;
              border-left: 1px solid @color-grey-2;
              &:last-of-type {
                border-right: 1px solid @color-grey-2;
              }

              .name {
                margin: 15px 0 10px 0;
              }
              .en-name {

              }
              img {
                width: 100%;
                &:hover {
                  transform: scale(1.25, 1.25);
                  transition: transform .5s;
                }
              }
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
                .item-wrapper {
                  width: 100%;
                  height: 100%;
                }
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
  import Velocity from 'velocity-animate'
  export default {
    data () {
      return contentData
    },
    methods: {
      scrollTargetGroup (group) {
        Velocity(
          document.getElementById('group_' + group.enName),
          'scroll',
          { duration: 1000 }
        )
      },
      checkDetail (item) {
        console.log('checkDetail', item)
      },
      mouseleaveItem (item) {
        item.hover = false
      },
      mouseenterItem (item) {
        item.hover = true
      }
    }
  }
</script>
