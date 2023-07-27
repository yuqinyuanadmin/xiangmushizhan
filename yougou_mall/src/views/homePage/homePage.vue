<template>
  <div>
    <div class="header">
      <span>优购商城</span>
      <p>
        <input type="text" placeholder="搜素" />
      </p>
    </div>
    <!-- 轮播图的实现 -->
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in image" :key="image.goods_id">
        <img :src="image.image_src" />
      </van-swipe-item>
    </van-swipe>
    <!-- 导航 -->
    <ul class="catitems">
      <li v-for="(item, index) in catitems" :key="index">
        <img :src="item.image_src" alt="" />
      </li>
    </ul>
    <!-- 楼层的实现 -->
    <van-row style="margin-top: 10px;" v-for="(item,index) in floordata" :key="index">
        <van-col >
            <img class="lou" :src="item.floor_title.image_src" alt="">
            <van-row>
                <van-col span="8" v-for="(item1,index1) in item.product_list" :key="index1">
                    <img class="lou" :src="item1.image_src" alt="">
                </van-col>
            </van-row>
        </van-col>
    </van-row>

    <Bottom></Bottom>
  </div>
</template>

<script>
import Bottom from "../../components/Bottom.vue";
export default {
  data() {
    return {
      image: [],
      catitems: [],
      floordata: [],
    };
  },
  components: {
    Bottom,
  },
  mounted() {
    // 请求轮播图渲染接口
    this.$axios.get("/public/v1/home/swiperdata").then((res) => {
      this.image = res.data.message;
    });
    // 请求导航接口
    this.$axios.get("public/v1/home/catitems").then((res) => {
      res.data.message.forEach((item) => {
        this.catitems.push(item);
      });
    });
    // 请求楼层数据
    this.$axios.get("public/v1/home/floordata").then((res) => {
      res.data.message.forEach((item) => {
        this.floordata.push(item);
      });
      console.log(this.floordata);
    });
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 8.75rem;
  background: #ff0100;
  text-align: center;
  padding-top: 2.5rem;
  box-sizing: border-box;
  span {
    color: white;
    font-size: 1.25rem;
  }
  input {
    width: 20rem;
    height: 1.875rem;
    border: none;
    text-align: center;
    font-size: 1.25rem;
    margin-top: 0.625rem;
  }
}
.van-swipe img {
  width: 100%;
  height: 9.375rem;
}
.catitems {
  width: 100%;
  height: 8.75rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  li {
    width: 24%;
    height: 100%;
    img {
      width: 100%;
      height: 80%;
    }
  }
}
.lou{
    width: 100%;
}
</style>