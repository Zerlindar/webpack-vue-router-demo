<template>
  <div class="swipe" ref = "imageView">
    <div class="swipe-wrap">
      <div v-for="image in imageSwiper"><img class = "image" :src="image" /></a></div>
    </div>
    <!-- 分页 -->
    <div class="pagination">
      <span :class="[item == (index + 1)? 'swipe-active': '', 'swipe-pagination']" v-for="item in imageSwiper.length"></span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .swipe {
    height: 100%;
    overflow: hidden;
    visibility: hidden;
    position: relative;
  }
  .swipe-wrap {
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .swipe-wrap > div {
    float:left;
    width:100%;
    height: 100%;
    position: relative;
  }
  .image{
    display: block;
    width: 100%;
    height: 100%;
  }

  .pagination {
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 1rem;
    line-height: 1rem;
    cursor: pointer;
  }
  .swipe-pagination {
    content: "";
    display: inline-block;
    width: .2rem;
    height: .2rem;
    border-radius: 100%;
    background: #000;
    opacity: 0.2;
    margin: 0 10px;
    z-index: 10;
  }
  .swipe-active {
    opacity: 1;
  }
</style>
<script type="text/javascript">
  import Swipe from "../../plugin/swipe";
  import styles from '../../plugin/style.css';         //导入css样式表
  export default {
    data: function(){
      return {
        clientWidth: 0,
        clientHeight: 0,
        index: 0,
      }
    },
    props: {
      imageSwiper: {
        type: Array,
        required: true
      }
    },
    computed: {
      length: function(){
        return this.imageSwiper.length
      },
    },
    mounted: function() {
      var self = this;
      //获取子组件中分页小圈圈
      var slides = self.$refs.imageView;
      self.mySwipe = new Swipe(slides, {
        startSlide: 0,
        continuous: true,
        speed: 1000,
        auto: 4000,
        stopPropagation: false,
        callback: function(index, elem) {
          //渲染分页小圈圈
          console.log("index: ", index);
          self.index = index;
        },
      });
    }
  }
</script>
