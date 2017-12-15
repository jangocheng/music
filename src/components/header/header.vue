<template>
  <div class="header">
    <div class="name">
      <span @click="showAsideMenu(true)" class="func"><i class="func-icon"></i></span>
      <router-link to="/find" class="item">
        <span class="music"><i class="music-icon"></i></span>
      </router-link>
      <router-link to="/personal" class="item">
        <span class="personal"><i class="personal-icon"></i></span>
      </router-link>
      <router-link to="/social" class="item">
        <span class="social"><i class="social-icon"></i></span>
      </router-link>
      <span class="search"><i @click="toSearch" class="search-icon"></i></span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  background-color: #B72712;
  color: #fff;
  width: 100%;
  z-index: 20;
}
.name {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}
.func {
  flex: 1;
}
.func-icon {
  background: url('./func.svg') no-repeat;
  background-size: contain;
}
.search {
  flex: 1;
}
.search-icon {
    background: url('./search.svg') no-repeat;
    background-size: contain;
}
.item {
  display: inline-block;
  flex:1;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}
.music {
  flex: 1;
}
.music-icon {
    background: url('./music.svg') no-repeat;
    background-size: contain;
}
.personal {
  flex: 1;
}
.personal-icon {
    background: url('./personal.svg') no-repeat;
    background-size: contain;
}
.social {
  flex: 1;
}
.social-icon {
  background: url('./social.svg') no-repeat;
  background-size: contain;
}
i{
  display:inline-block;
  width: 30px;
  height: 30px;
  right: 15px;
  bottom: 0;
  cursor: pointer;
}
</style>
