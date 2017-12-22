<template>
  <ul class="singer-list">
    <li class="singer-card"  v-for="(data, index) in singer" @click="jumpSingerDetail(data.id)" :key="index">
      <!-- <img v-lazy="data.picUrl" lazy="loading" class="avatar"> -->
      <img :src="data.picUrl" lazy="loading" class="avatar">
      <p class="singer-name">
        <span class="name" style="-webkit-box-orient: vertical;">{{data.name}}</span>
        <span class="trans" v-if="data.alia">({{data.alia[0]}})</span>
      </p>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'v-singer-list',
    props: {
      singer: {
        type: Array,
        default: []
      }
    },
    methods: {
      jumpSingerDetail (id) {
        // this.$router.push({
        //   path: '/singer/' + id
        // })
      }
    }
  }
</script>
<style lang="less" scoped>
.singer-list{
  list-style:none;
}
.singer-list  li{
  padding-left: 5px;
}
.singer-card{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.avatar{
  width: 0;
  flex: 1 0 15%;
  padding: 5px 3px;
}
.singer-name{
  flex: 1 0 85%;
  margin-left: 5px;
  border-bottom: 1px solid #e1e5e4;
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 12px;
}
.trans{
  font-size: 12px;
  color: #6c6e6d;
}
</style>
