<template>
  <div id="app">
    <div class="app-container">
      <mt-header fixed title="头部区域!"></mt-header>
    </div>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 5" :key="n" :title="'项目 ' + n"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">hey!</mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="1">标签1</mt-tab-item>
      <mt-tab-item id="2">标签2</mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "1"
    };
  }
};
</script>

<style lang="css" scoped>
.app-container {
  padding-top: 40px;
}
</style>
