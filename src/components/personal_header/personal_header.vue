<template>
  <div>
    <toolbar></toolbar>
      <mu-tabs :value="activaTab" @change="handleChange" style="background-color:#fff;height:25px;">
        <mu-tab value="musics" title="音乐" style="color:black"/>
        <mu-tab value="videos" title="视频" style="color:black"/>
        <mu-tab value="radios" title="电台" style="color:black"/>
      </mu-tabs>
      <swiper></swiper>
      <psheader></psheader>
      <bottombar></bottombar>
  </div>
</template>

<script>
import header from '../header/header'
import psheader from '../personal_sec_header/ps_header'
import swiper from '../swiper/swiper'
import footer from '../footer/footer'

export default {
  data () {
    return {
      activaTab: 'musics'
    }
  },
  components: {
    toolbar: header,
    swiper,
    psheader,
    bottombar: footer
  },
  methods: {
    handleChange (val) {
      this.activaTab = val
    }
  }
}
</script>
