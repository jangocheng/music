<template>
  <ul class="play-lists">
      <li v-for="(data, index) in playlist" class="playlist-card" @click="jumpPlayListsDetail(data.id)" :key="index">
          <!-- <img v-lazy="data.coverImgUrl + '?param=200y200'" lazy="loading" class="coverImage"> -->
          <img :src="data.coverImgUrl" class="coverImage">
          <div class="playList-info">
              <p class="playList-name" style="-webkit-box-orient: vertical;">{{data.name}}</p>
              <p class="playList-info-other">
                  <span class="playList-count">{{data.trackCount}}首</span>
                  <span class="playList-creator">by {{data.creator.nickname}}</span>
                  <span class="playList-playCount">播放{{data.playCount | countHandle}}次</span>
              </p>
          </div>
      </li>
  </ul>
</template>
<script>
  export default {
    name: 'v-play-list-card',
    props: {
      playlist: {
        type: Array,
        default: []
      }
    },
    methods: {
      jumpPlayListsDetail (id) {
        // this.$router.push({
        //   path: '/playLists/' + id
        // });
      }
    },
    filters: {
      countHandle (count) {
        let wCount = parseInt(count / 100000)
        if (wCount > 0) {
          return wCount + '万'
        } else {
          return count
        }
      }
    }
  }
</script>
<style lang="less" scoped>
.play-lists{
  list-style: none;
}
.play-lists li{
  padding-left: 5px;
}
.playlist-card{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.coverImage{
  width: 0;
  flex: 1 0 15%;
  padding: 5px 0;
}
.playList-info{
  flex: 1 0 85%;
  margin-left: 5px;
  border-bottom: 1px solid #e1e5e4;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.playList-name{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
}
.playList-info-other{
  display: flex;
  justify-content: flex-start;
  font-size: 12px;
  color: #6c6e6d;
}
.playList-info-other span{
  padding-right: 5px;
}
</style>
