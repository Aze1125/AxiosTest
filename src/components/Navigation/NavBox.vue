<template>
  <div class="box">
    <div style="padding-left: 10px" id="nav">
      <router-link to="/all" class="box_item">全部</router-link>
      <router-link to="/normal" class="box_item">正常</router-link>
      <router-link to="/hide" class="box_item">隐藏</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // path: String,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style>
body {
  padding: 20px;
  background: #f6f6f6;
}
#nav {
  display: flex;
  background: #bec8d236;
  /* box-shadow: 0px 5px 5px rgba(100, 100, 100, 0.4); 阴影 */
}
.box_item {
  /* border: 1px solid red; */
  text-align: center;
  height: 45px;
  line-height: 45px;
  width: 60px;
  text-decoration: none;
  color: black;
}
.router-link-active {
  text-decoration: none;
  background: #fff;
}
</style>