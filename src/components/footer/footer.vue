<template>
  <div class="footer">
    <mu-appbar style="background-color:">
      <mu-icon-button icon="music_img" slot="left"></mu-icon-button>
      <span>我是用来显示歌词的</span>
      <mu-icon-button icon="play_pause_btn" slot="right"/>
      <mu-icon-button icon="playlist_btn" slot="right"/>
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
</style>
