<template>
  <div id="app">
    <div class="app-container">
      <mt-header fixed title="头部区域!"></mt-header>
    </div>
    <mt-tab-container v-model="selected">

      <mt-tab-container-item id="1">
        <HomePage></HomePage>
      </mt-tab-container-item>

      <mt-tab-container-item id="2">
        <MemberPage></MemberPage>
      </mt-tab-container-item>

      <mt-tab-container-item id="3">
        <CartPage></CartPage>
      </mt-tab-container-item>

      <mt-tab-container-item id="4">
        <SearchPage></SearchPage>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="1">首页</mt-tab-item>
      <mt-tab-item id="2">会员</mt-tab-item>
      <mt-tab-item id="3">购物车</mt-tab-item>
      <mt-tab-item id="4">搜索</mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import HomePage from "@/components/Home";
import MemberPage from "@/components/Member";
import CartPage from "@/components/Shoppingcart";
import SearchPage from "@/components/Search";

export default {
  data() {
    return {
      selected: "1"
    };
  },
  components: {
    HomePage,
    MemberPage,
    CartPage,
    SearchPage
  }
};
</script>

<style lang="css" scoped>
.app-container {
  padding-top: 40px;
}
</style>
