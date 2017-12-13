<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item,index) in items" :key="index">
        <img v-if="item.pic" :src="item.pic">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css' // 若不引入这个样式，会造成图片竖向排列，即所有图片展示在第一页
import api from '../../api/index'

export default{
  components: {
    swiper,
    swiperSlide
  },
  created () {
    this.getBannerResource()
  },
  data () {
    return {
      items: [],
      swiperOption: {
        notNextTick: true,
        pagination: '.swiper-pagination',
        direction: 'horizontal',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        onSlideChangeEnd: swiper => {
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.swiper.slideTo(0, 0, false)
  },
  methods: {
    stopPlay () {
      this.mySwiper.stopAutoplay()
    },
    paly () {
      this.mySwiper.startAutoplay()
    },
    getBannerResource () {
      api.getBannerResource().then((response) => {
        this.items = response.data.banners
      }).catch((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.swiper-wrapper {
  margin-top: 10px;
  height: 230px;
}

.swiper-wrapper img {
  width: 100%;
  height: 100%;
}
</style>
