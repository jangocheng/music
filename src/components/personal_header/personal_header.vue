<template>
  <div>
      <mu-tabs :value="activaTab" @change="handleChange" style="background-color:#fff">
        <mu-tab value="musics" title="音乐" style="color:black"/>
        <mu-tab value="videos" title="视频" style="color:black"/>
        <mu-tab value="radios" title="电台" style="color:black"/>
      </mu-tabs>
      <swiper></swiper>
      <psheader></psheader>
  </div>
</template>

<script>
import psheader from '../personal_sec_header/ps_header'
import swiper from '../swiper/swiper'

export default {
  data () {
    return {
      activaTab: 'musics'
    }
  },
  components: {
    swiper,
    psheader
  },
  methods: {
    handleChange (val) {
      this.activaTab = val
    }
  }
}
</script>
