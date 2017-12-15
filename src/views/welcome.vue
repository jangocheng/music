<template>
  <div class="welcome-page">
    <div class="welcome-page-content">
      <p class="welcome-page-content_tip"></p>
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
      countdown: 3, // 倒计时时间
      timeout: ''
    }
  },
  created () {
    this.changeTime()
  },
  methods: {
    enter () {
      this.clearTime(this.timeout)
      this.$router.push('/home')
    },
    changeTime () {
      this.timeout = setInterval(() => {
        this.countdown --
        if (this.countdown === 0) {
          this.clearTime(this.timeout)
        }
      }, 1000)
    },
    clearTime (time) {
      clearInterval(time)
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less" scoped>
.welcome-page {
  width: 100%;
  height: 100%;
  background: url('../../static/images/p_login_bg.jpg') no-repeat center;
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
