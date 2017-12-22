<template>
  <ul class="mv-list">
    <li class="mv-card" v-for="(data, index) in MVs" style="flex: 0 0 49.5%" @click="jumpMvDetail(data.id)" :key="index">
      <!-- <img v-lazy="data.cover + '?param=400y200'" lazy="loading" class="mv-image"> -->
      <img :src="data.cover" class="mv-image">
      <h2 style="-webkit-box-orient: vertical;">{{data.name}}</h2>
      <p style="-webkit-box-orient: vertical;">{{data.artistName}}</p>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'v-mv-list',
    props: {
      MVs: {
        type: Array,
        default: []
      }
    },
    methods: {
      jumpMvDetail (id) {
        // this.$router.push({
        //   path: '/mv/' + id
        // });
      }
    }
  }
</script>
<style lang="less" scoped>
ul .mv-list{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-flow: row wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
ul .mv-list li{
  padding-top: 10px;
  flex: 0 0 49.5%;
  width: 0;
}
.mv-image{
  width: 100%;
}
.mv-card h2{
  font-size: 12px;
  font-weight: normal;
  color: #2a2e2d;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  line-height: 1.2;
  margin: 0 5px;
}
.mv-card  p{
  font-size: 10px;
  font-weight: normal;
  color: #838987;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  line-height: 1.2;
  margin: 0 5px;
}
</style>
