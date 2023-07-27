<template>
  <div>
    <div class="header">
      <span>优购商城</span>
      <p>
        <input type="text" placeholder="搜素" />
      </p>
    </div>
    <van-sidebar v-model="active">
      <van-sidebar-item
        v-for="item in categories"
        :key="item.cat_id"
        :title="item.cat_name"
        @click="add(item.children)"
      />
      <div class="right">
        <van-row style="margin-top: 20px;" v-for="(item,index) in list1" :key="index" >
            <van-col span="24" style="text-align: center;">
                {{ item.cat_name }}
            </van-col>
            <van-col span="7" v-for="(item1,index1) in item.children" :key="index1" @click="id(item1.cat_id)">
               <img style="width: 100%;" :src="item1.cat_icon" alt="">
               <p style="text-align: center;">{{ item1.cat_name }}</p>
            </van-col>
        </van-row>
      </div>
    </van-sidebar>
    <Bottom></Bottom>
  </div>
</template>

<script>
import { Card } from "vant";
import Bottom from "../../components/Bottom.vue";
export default {
  data() {
    return {
      active: 0,
      categories: [],
      list1:[]
    };
  },
  components: {
    Bottom,
  },
  mounted() {
    this.$axios.get("/public/v1/categories").then((res) => {
      res.data.message.forEach((item) => {
        this.categories.push(item);
      });
    });
  },

  methods: {
    add(list){
        console.log(list)
        this.list1 = list
    },
    id(goods_id){
        //  将我们的id值存储到本地
        localStorage.setItem('cid',goods_id)
        // 跳转页面
        this.$router.push('/list')
    }
  },
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
.right{
    width: 75%;
    height: 600px;
  
    position: absolute;
    right: 0;
    top: 140px;
}
</style>