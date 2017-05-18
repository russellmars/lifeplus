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
          <div class="group-icons flex justify-between gray clearfix bold overflow-hidden">
            <div class="group-icon center col col-4 pointer" v-for="group in groups" @click="scrollTargetGroup(group)">
              <img class="fit" :src="group.pic" alt="">
              <div class="letter-spacing">
                <div class="name f12">{{ group.name }}</div>
                <div class="en-name f8">{{ group.enName }}</div>
              </div>
            </div>
          </div>
          <div class="groups gray">
            <div class="group clearfix overflow-hidden" v-for="group in groups" :id="'group_' + group.enName">
              <div class="group-en-name f18 blue bold">{{ group.enName }}</div>
              <div class="item col col-6 sm-col-4 md-col-3 center pointer"
                v-for="item in group.items"
                @click="checkDetail(item, group)"
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
    <footer class="relative">
      <img class="absolute" :src="bottom.pic" alt="">
      <a class="desc absolute white f12 text-decoration-none" :href="bottom.desc">{{ bottom.desc }}</a>
    </footer>
    <vodal class="vodal" :animation="vodalOptions.animation"
      :show="showVodal" :height="vodalOptions.height" :width="vodalOptions.width"
      @hide="showVodal = false">
      <template v-if="currentItem && currentGroup">
        <div>
          <div class="gray f18 line-height-4">{{ currentGroup.name + ' - ' + currentItem.name }}</div>
          <div class="gray-2 f10 line-height-4">{{ currentGroup.enName + ' - ' + currentItem.enName }}</div>
        </div>
        <div class="current-item clearfix" v-if="currentItem">
          <div class="col col-12 sm-col-4" v-for="li in currentItem.list">
            <img class="fit" :src="li.pic" alt="">
            <div class="center f10">
              <div class="line-height-4 gray">{{ li.name }}</div>
              <div class="gray-2">{{ li.enName }}</div>
            </div>
          </div>
        </div>
      </template>
    </vodal>
  </div>
</template>

<style lang="less" scoped>
  @import "../style/var.less";
  .root {
    margin: 0 auto;
    .container {
      max-width: 1200px;
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
              margin-top: 200px;
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
    footer {
      background: @color-blue-1;
      height: 100px;
      padding: 0 10%;
      margin: 0 auto;
      margin-top: 160px;
      img {
        top: 50%;
        left: 10%;
        transform: translateY(-50%);
      }
      a {
        top: 50%;
        right: 10%;
        transform: translateY(-50%);
      }
    }

    .vodal {
      .current-item {
        padding: 0 45px;
      }
    }

  }
</style>


<script>
  import contentData from './data/content'
  import Velocity from 'velocity-animate'
  import Vue from 'vue'
  const animations = [
    'zoom', 'fade', 'flip', 'door', 'rotate', 'slideUp', 'slideDown', 'slideLeft', 'slideRight'
  ]
  export default {
    beforeRouteEnter (to, from, next) {
      next(vm => {
        if (from.name === 'detail') {
          Vue.nextTick(() => {
            document.body.scrollTop = global.contentPageScrollTopValue || 0
          })
        }
      })
    },
    beforeRouteLeave (to, from, next) {
      if (to.name === 'detail') {
        global.contentPageScrollTopValue = document.body.scrollTop
      }
      next()
    },
    data () {
      return Object.assign({}, contentData, {
        showVodal: false,
        currentItem: null,
        currentGroup: null,
        vodalOptions: {
          width: 400,
          height: 240,
          animation: 'rotate'
        }
      })
    },
    methods: {
      scrollTargetGroup (group) {
        Velocity(
          document.getElementById('group_' + group.enName),
          'scroll',
          { duration: 1000 }
        )
      },
      checkDetail (item, group) {
        // this.currentItem = item
        // this.currentGroup = group
        // const animation = this.getRandomAnimation()
        // this.vodalOptions.animation = animation
        // setTimeout(() => {
        //   this.showVodal = true
        // }, 100)
        this.$router.push({
          name: 'detail',
          params: {
            group: group.enName,
            name: item.name
          }
        })
      },
      mouseleaveItem (item) {
        item.hover = false
      },
      mouseenterItem (item) {
        item.hover = true
      },
      getRandomAnimation () {
        return animations[Math.floor(Math.random() * animations.length)]
      }
    },
    mounted () {
      const clientWidth = document.body.clientWidth
      if (clientWidth < 640) {
        this.vodalOptions.width = 260
        this.vodalOptions.height = 510
      } else {
        this.vodalOptions.width = 640
        this.vodalOptions.height = 240
      }
    }
  }
</script>
