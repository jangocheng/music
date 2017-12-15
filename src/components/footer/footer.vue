<template>
  <div class="footer">
    <mu-appbar style="background-color:#fff;height:50px;">
      <mu-icon-button slot="left" style="padding:0px;"><img :src="music_img"/></mu-icon-button>
      <span>我是用来显示歌词的</span>
      <mu-icon-button slot="right"><img :src="play_pause_btn"/></mu-icon-button>
      <mu-icon-button slot="right"><img :src="playlist_btn"/></mu-icon-button>
    </mu-appbar>
  </div>
</template>

<script>
import imgP from '../../resource'
export default {
  data () {
    return {
      music_img: imgP.music_img
    }
  }
}
</script>

<style>
.footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
}
img {
  text-align: center;
}
span {
  color: black;
  font-size: 15px;
}
</style>
