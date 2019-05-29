<template>
    <nav class="msite_nav">
      <div class="swiper-container" v-if="foodTypes.length">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide food_types_container"
            v-for="(item, index) in foodTypes"
            :key="index"
            style="width:100px;float:left"
          >
            <router-link
            :to="{path: '/food', query: {title: item.title, restaurant_category_id: getCategoryId(item.link)}}"
            class="link_to_food"
            >
              <figure style="width:100px">
                <img :src="imgBaseUrl + item.image_url" style="width:100%">
                <figcaption>{{item.title}}</figcaption>
              </figure>
            </router-link>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <!-- <img src="../../images/fl.svg" class="fl_back animation_opactiy" v-else> -->
    </nav>
</template>

<script>
import {foodTypes} from '@/service/getData.js'
// import '@/plugins/swiper.min1.js'
import '@/style/swiper.min.css'
export default {
  data () {
    return {
      imgBaseUrl: 'https://fuss10.elemecdn.com' // 图片域名地址
    }
  },
  components: {},
  computed: {
    foodTypes () {
      return foodTypes
    }
  },
  mounted () {
    /* eslint-disable */
    // 初始化swiper
    new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      loop: true
    })
  },
  methods: {
    // 解码url地址，求去restaurant_category_id值
    getCategoryId (url) {
      let urlData = decodeURIComponent(url.split('=')[1].replace('&target_name', ''))
      if (/restaurant_category_id/gi.test(urlData)) {
        return JSON.parse(urlData).restaurant_category_id.id
      } else {
        return ''
      }
    }
  }
}
</script>

<style scoped lang='scss'>
@import '@/style/mixin.scss';
.msite_nav{
padding-top: 2.1rem;
background-color: #fff;
border-bottom: 0.025rem solid $bc;
height: 10.6rem;
.swiper-container{
  @include wh(100%, auto);
  padding-bottom: 0.6rem;
  .swiper-pagination{
    bottom: 0.2rem;
  }
}
.fl_back{
  @include wh(100%, 100%);
}
}
</style>
