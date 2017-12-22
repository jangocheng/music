<template>
  <div class="welcome-page">
    <div class="welcome-page-content">
      <p class="welcome-page-content_skip">
        <i class="demo-raised-button" @click="enter">跳过{{countdown}}</i>
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
    &_skip {
      position: absolute;
      top: 85%;
      left: 65%;
      width: 100%;
    }
  }
}
.demo-raised-button{
  font-size:15px;
  text-align: center;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid #ccd0cf;
  background-color: rgba(0, 0, 0, 0);

}
</style>
