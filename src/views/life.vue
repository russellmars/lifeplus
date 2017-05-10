<template>
  <div>
    lift +
    <img :src="path" alt="">
  </div>
</template>
<script>
export default {
  data () {
    return {
      path: './static/img/logo.png'
    }
  }
}
</script>

