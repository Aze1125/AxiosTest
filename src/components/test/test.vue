<template>
  <div id="app" class="box">
    <div calss="text">
      <div class="title">
        <span>全部</span>
        <span>正常</span>
        <span>隐藏</span>
      </div>
      <div class="opration">
        <div class="button">
          <button style="background-color: rgb(30, 31, 32)">
            <i class="iconfont">&#xe644;</i>
          </button>
          <button style="background-color: rgb(109, 233, 146)">
            <i class="iconfont">&#xe7fc;</i>
            <span>正常</span>
          </button>
        </div>

        <div class="search">
          <input type="text" placeholder="标题" />
          <button style="background-color: gray">
            <i class="iconfont">&#xe71f;</i>
          </button>
        </div>
      </div>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th calss="">标题</th>
              <th calss="">创建时间</th>
              <th calss="">状态</th>
              <th calss="">操作</th>
            </tr>
          </thead>
          <tbody>
            <template>
              <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>
                  <template>
                    <i class="iconfont">&#xe61c;</i>
                  </template>
                  <template>
                    <i class="iconfont">&#xe614;</i>
                  </template>
                </th>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.axiosExample();
  },
  methods: {
    axiosExample() {
      //'http://127.0.0.1/index.php/api/article/article_list'
      this.$axios
        .post("index.php/api/article/seek_article", {
          article_id: 1,
          page: 1,
          num: 1,
        })
        .then((response) => {
          console.log(response.data);
        });
    },
  },
};
</script>

<style>
.title {
  /* border: 1px solid red;s */
}
.title span {
}
.box {
  margin: 0 auto;
  width: 1200px;
}
.container {
  /* display: flex; */
  border: 1px solid red;
}
.iconfont {
  color: #ffffff;
}
.thead {
  /* display: flex;
  align-content: space-around; */
}
</style>