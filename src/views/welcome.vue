<template>
  <div class="welcome-page">
    <div class="welcome-page-content">
      <p class="welcome-page-content_tip">网易云音乐</p>
      <p class="welcome-page-content_skip">
        <mu-raised-button :label="'跳过'+countdown" class="demo-raised-button" @click="enter" primary/>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      countdown: 3 // 倒计时时间
    }
  },
  created () {
    this.changeTime()
  },
  methods: {
    enter () {
      this.$router.push('/index')
    },
    changeTime () {
      var timeout = setInterval(() => {
        this.countdown --
        if (this.countdown === 0) {
          this.clearTime(timeout)
        }
        console.log(this.countdown)
      }, 1000)
    },
    clearTime (time) {
      clearInterval(time)
      this.$router.push('/index')
    }
  }
}
</script>

<style lang="less" scoped>
.welcome-page {
  width: 100%;
  height: 100%;
  background: url('../components/header/music.svg') no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  &-content {
    &_tip {
      width: 100%;
      padding: 200px 0;
      font-size: 24px;
      color: #fff;
      font-weight: bold;
    }
    &_skip {
      position: absolute;
      top: 100px;
      left: 100px;
      width: 100%;
    }
  }
}
</style>
