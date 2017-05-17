<template>
  <div class="root absolute top-0 left-0 right-0 bottom-0">
    <template v-if="group && item">
      <div @click="$router.go(-1)" class="back-btn absolute f18 blue letter-spacing pointer">{{ '< ' + group.enName }}</div>
      <div class="titles absolute">
        <div class="main-title gray f26 letter-spacing bold">{{ group.name + '－' + item.name }}</div>
        <div class="gray-2 f14 letter-spacing">{{ group.enName + ' - ' + item.enName }}</div>
      </div>
      <div class="pics absolute">
        <div>
          <div class="item col relative" :style="getItemStyle(item.list.length)" :class="getGridClass(item.list.length)" v-for="(li, index) in item.list">
            <div class="border-line-left absolute" v-if="index === 0"></div>
            <div class="border-line-right absolute"></div>
            <img class="fit" :src="li.pic" alt="">
            <div class="center">
              <div class="line-height-4 gray letter-spacing f14">{{ li.name }}</div>
              <div class="gray-2 letter-spacing f12">{{ li.enName }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
  @import "../style/var.less";
  .root {
    margin: 0 auto;
    .back-btn {
      top: 16vh;
      left: 11vw;
    }
    .titles {
      top: 36vh;
      left: 21vw;
      .main-title {
        margin-bottom: 2.3vh;
      }
    }
    .pics {
      top: 50vh;
      left: 11vw;
      right: 11vw;
      .item {
        padding: 0 3.5vw;
        padding-bottom: 4vh;
        .border-line-left {
          left: 0;
          top: 50%;
          height: 80%;
          width: 2px;
          background: rgb(216, 216, 216);
          transform: translateY(-50%);
        }
        .border-line-right {
          right: 0;
          top: 50%;
          height: 80%;
          width: 2px;
          background: rgb(216, 216, 216);
          // background: @color-grey-1;
          transform: translateY(-50%);
        }
      }
    }
  }
</style>

<script>
  import contentData from './data/content'
  import find from 'lodash/find'
  export default {
    data () {
      return {
        item: null,
        group: null
      }
    },
    methods: {
      getGridClass (itemLength) {
        let clz = 'col-12'
        switch (itemLength) {
          case 1:
            clz = 'col-12'
            break
          case 2:
            clz = 'col-6'
            break
          case 3:
            clz = 'col-4'
            break
          case 4:
            clz = 'col-3'
            break
          default:
            clz = 'col-12'
            break
        }
        return [clz]
      },
      getItemStyle (itemLength) {
        let padding = '20'
        switch (itemLength) {
          case 1:
            padding = '20'
            break
          case 2:
            padding = '6'
            break
          case 3:
            padding = '3.5'
            break
          case 4:
            padding = '2'
            break
          default:
            padding = '20'
            break
        }
        return {
          paddingLeft: padding + 'vw',
          paddingRight: padding + 'vw'
        }
      }
    },
    mounted () {
      const groupEnName = this.$route.params.group
      const itemName = this.$route.params.name
      this.group = find(contentData.groups, group => {
        return group.enName === groupEnName
      })
      if (this.group) {
        this.item = find(this.group.items, item => {
          return item.name === itemName
        })
      }
    }
  }
</script>

