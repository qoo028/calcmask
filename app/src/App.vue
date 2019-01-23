<template>
  <div id="app">
    <div class="navbar">
      <div class="title has-text-grey-darker">{{title}}</div>
    </div>
       <b-tabs position="is-centered" class="block">
            <b-tab-item label="乗数"><multi /></b-tab-item>
            <b-tab-item label="ビット"><binary /></b-tab-item>
        </b-tabs>
  </div>
</template>

<script>
import multi from "./components/multi.vue";
import binary from "./components/binary.vue";

export default {
  name: "app",
  components: {
    multi,
    binary
  },
  data() {
    return {
      title: "計算ドリル",
      currentTab: 'multi',
      tabs: ['multi','binary']
    };
  },
  computed:{
    currentTabComponent:function(){
      return 'tab-'+this.currentTab.toLowerCase()
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
