<template>
  <div>
    <van-tabbar v-model="active" active-color="#ee0a24" route>
      <van-tabbar-item to="/homePage" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/card" icon="search">分类</van-tabbar-item>
      <van-tabbar-item  icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:0
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>

</style>