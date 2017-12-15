<template>
  <div class="home">
    <header></header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from '../components/header/header'
export default {
  component: {
    header
  }
}
</script>
