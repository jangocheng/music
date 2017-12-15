<template>
  <div class="marking-header">
    <ul class="h-img">
        <li @click="to_recommend_fm">
            <div class="mhimg">
                <!-- <i v-if="!bcg1" id="icon_fm"></i> -->
                <img :src="bcg_fm"/>
            </div>
            <div class="mha">
                <a>私人FM</a>
            </div>
        </li>
        <li @click="to_recommend_daily">
            <div class="mhimg">
                <img :src="bcg_daily"/>
            </div>
            <div class="mha">
                <a>每日推荐</a>
            </div>
        </li>
        <li @click="to_recommend_playlist">
            <div class="mhimg">
                <img :src="bcg_playlist"/>
            </div>
            <div class="mha">
                <a>歌单</a>
            </div>
        </li>
        <li @click="to_recommend_rank">
            <div class="mhimg">
                <img :src="bcg_rank"/>
            </div>
            <div class="mha">
                <a>排行榜</a>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import imgP from '../../resource'
export default {
  data () {
    return {
      bcg_fm: imgP.bcg_fm,
      bcg_daily: imgP.bcg_daily,
      bcg_playlist: imgP.bcg_playlist,
      bcg_rank: imgP.bcg_rank
    }
  },
  methods: {
    to_recommend_fm () {
      this.bcg_fm = imgP.bcg_fm_prs
    },
    to_recommend_daily () {
      this.bcg_daily = imgP.bcg_daily_prs
    },
    to_recommend_playlist () {
      this.bcg_playlist = imgP.bcg_playlist_prs
    },
    to_recommend_rank () {
      this.bcg_rank = imgP.bcg_ran_prs
    }
  }
}
</script>

<style>
.marking-header {
    margin-top: 10px;
    overflow: hidden;
}

.h-img {
    -webkit-padding-start: -10;
    text-align: center;
}

.h-img li {
    display: inline-block;
    list-style: none;
    margin: 0 14px;
    cursor: pointer;
}

.mhimg {
    height: 50px;
    width: 50px;
}

.mhimg img {
    display: inline-block;
    position: relative;
    font-size: 10px;
    width: 50px;
    height: 50px;
}

.mha {
    margin-top: 10px;
    text-align: center;
}

.mha a {
    font-size: 14px;
    color: black;
    text-decoration: none;
}

</style>
