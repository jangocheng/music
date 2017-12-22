<template>
    <ul class="user-list">
      <li v-for="(data, index) in user" class="user-card" @click="jumpUserDetail(data.userId)" :key="index">
        <!-- <img v-lazy="data.avatarUrl + '?param=200y200'" lazy="loading" class="avatarImage"> -->
        <img :src="data.avatarUrl" class="avatarImage">
        <div class="avatar-info">
            <p class="avatar-name">
                {{data.nickname}}
                <span class="gender-man" v-if="data.gender === 1"><i class="man-icon"></i></span>
                <span class="gender-female" v-else><i class="female-icon"></i></span>
            </p>
            <p class="avatar-intro" style="-webkit-box-orient: vertical;">{{data.signature}}</p>
        </div>
      </li>
    </ul>
</template>
<script>
  export default {
    name: 'v-user-card',
    props: {
      user: {
        type: Array,
        default: []
      }
    },
    methods: {
      jumpUserDetail (id) {
        // this.$router.push({
        //   path: '/user/' + id
        // });
      }
    }
  }
</script>
<style lang="less" scoped>
ul .user-list{
  list-style: none;
}
ul .user-list li{
  padding-left: 5px;
}
.user-card{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.avatarImage{
  width: 0;
  border-radius: 50%;
  flex: 1 0 15%;
  padding: 5px 0;
}
.avatar-info{
  flex: 1 0 85%;
  margin-left: 5px;
  border-bottom: 1px solid #e1e5e4;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.avatar-name{
  display: flex;
  justify-content: flex-start;
  font-size: 12px;
}
.female-icon{
  background: url(./female.svg) no-repeat;
  background-size: contain;
}
.man-icon{
  background: url(./man.svg) no-repeat;
  background-size: contain;
}
i{
  display: inline-block;
  width: 20px;
  height: 20px;
}
.avatar-intro{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  font-size: 12px;
  color: #6c6e6d;
  padding-right: 10px;
}
&.fade-enter-active, &.fade-leave-active {
  transition: all 0.2s linear;
  transform: translate3d(0, 0, 0);
}
&.fade-enter, &.fade-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
</style>
