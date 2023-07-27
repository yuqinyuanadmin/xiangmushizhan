<template>
  <div>
    <van-row v-for="(item, index) in goods" :key="index" @click="add(item.goods_id)">
      <van-col span="12">
        <img
          style="width: 100%; height: 100%"
          :src="item.goods_small_logo"
          alt=""
        />
      </van-col>
      <van-col span="8" style="margin-left: 20px; margin-top: 20px">
        {{ item.goods_name }}
        <p style="font-size:20px; color:red;">{{ item.goods_price }}</p>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      goods: [],
    };
  },

  mounted() {
    this.id = localStorage.getItem("cid");
    this.$axios
      .get("public/v1/goods/search", {
        params: {
          cid: this.id,
        },
      })
      .then((res) => {
        console.log(res);
        res.data.message.goods.forEach((item) => {
          this.goods.push(item);
        });
      });
  },

  methods: {
    add(goods_id){
        console.log(goods_id)
        localStorage.setItem('goodsId',goods_id)
        this.$router.push('/shangDetails')
    }
  },
};
</script>

<style lang="scss" scoped>
</style>