<!-- 页面 -->
<template>
    <div>
      <van-nav-bar
        @click-left="tui()"
        title="商品详情"
        style="background: red"
        left-arrow
      />
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in list1" :key="index">
          <img :src="item.pics_mid" alt="" />
        </van-swipe-item>
      </van-swipe>
      <div v-for="(item, index) in list2" :key="index">
        <p style="color: red">{{ item.goods_price | yuan }}</p>
        <p>{{ item.goods_name }}</p>
      </div>
      <p style="background: #f0f0f0; height: 10px"></p>
      <p style="color: red; margin-top: 10px">
        <b>图文详情</b>
      </p>
      <img
        v-for="(item, index) in list2"
        :key="index"
        style="width: 100%; height: 200px"
        :src="item.goods_big_logo"
        alt=""
      />
      <!-- 底部的渲染 -->
      <div class="bottom">
        <p>
          <font>
            <p style="margin-top: 10px;"><van-icon  name="service-o" size="20" /></p>
            <p>客服</p>
          </font>
          <font>
            <p style="margin-top: 10px;"><van-icon  name="replay" size="20" /></p>
            <p>分享</p>
          </font>
          <font>
            <p style="margin-top: 10px;"><van-icon  name="shopping-cart-o" size="20" /></p>
            <p>购物车</p>
          </font>
        </p>
        <p>
          <button style="background: orange" @click="add()">加入购物车</button>
          <button style="background: red">立即购买</button>
        </p>
      </div>
    </div>
  </template>
  <!--vue -->
  <script>
  export default {
    data() {
      return {
        //声明的属性
        iid: "",
        list1: [],
        list2: [],
      };
    },
    //生命周期函数
    mounted() {
      this.iid = localStorage.getItem("goodsId");
      this.$axios
        .get("https://api-hmugo-web.itheima.net/api/public/v1/goods/detail", {
          params: {
            goods_id: this.iid,
          },
        })
        .then((res) => {
          this.list2.push({
            goods_price: res.data.message.goods_price,
            goods_name: res.data.message.goods_name,
            goods_big_logo: res.data.message.goods_big_logo,
          });
          res.data.message.pics.forEach((item) => {
            this.list1.push(item);
          });
        });
    },
    //调用方法
    methods: {
      tui() {
        this.$router.go(-1);
      },
      add(){
        alert(111)
      }
    },
    //监听器
    watch: {},
    // 计算属性
    computed: {},
    //过滤器
    filters: {
      yuan(val) {
        return "￥" + val;
      },
    },
    //自定义指令
    directives: {},
  };
  </script>
  <!-- css样式 -->
  <style lang="scss"  scope>
  .bottom {
    width: 100%;
    height: 60px;
    // background: skyblue;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    p {
      width: 50%;
      height: 100%;
      // background: yellowgreen;
      margin-top: 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font {
        width: 100%;
        height: 100%;
        background: skyblue;
        display: flex;
        flex-direction:column;
        // justify-content: center;
        align-items: center;
        p{
          width: 100%;
          height: 20%;
        }
      }
    }
    button {
      width: 50%;
      height: 100%;
      border: 0;
      color: white;
    }
  }
  </style>