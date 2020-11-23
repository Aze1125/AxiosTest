<template>
  <div class="box">
    <div class="head">
      <ul>
        <li>
          <router-link to="/all" exact> 全部</router-link>
          <router-link to="/normal" exact>正常</router-link>
          <router-link to="/hide" exact> 隐藏</router-link>
        </li>
      </ul>
      <!-- <span>全部</span>
      <span>正常</span>
      <span>隐藏</span> -->
    </div>
    <div class="middle">
      <div class="mid_oper">
        <div class="icon">
          <i style="background-color: black">a</i>
          <i style="background-color: rgb(27, 196, 139)">a<span>添加</span></i>
        </div>

        <div class="search">
          <input type="search" placeholder="搜索">
          <i class="search_icon">ss</i>
        </div>
      </div>
      <div class="mid_list">
        <table>
          <thead>
            <tr>
              <th>标题</th>
              <th>创建时间</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>a</th>
              <th>a</th>
              <th>a</th>
              <th>a</th>
              <!-- <td>{{item.title}}</td>
              <td>{{item.add_time}}</td>
              <td>{{item.abstract}}</td>
              <td>{{}}</td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="end">
      <span>显示第 到第 条记录，总共 条记录</span>
    </div>
  </div>
</template>

<script>
import middle from "./middle.vue";
export default {
  components: { middle },
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
          // console.log(data);
        });
    },
  },
};
</script>

<style>
.box {
  width: 1200px;
  margin: 0 auto;
}
.head {
  height: 50px;
  line-height: 50px;
  /* border: 1px solid red; */
}
.head span {
  padding: 12px 10px;
  font-size: 18px;
  /* border: 1px solid red; */
}

i {
  color: #fff;
  top:-5px;
  padding: 5px 10px;
  font-style: normal;
  /* border: 1px solid rgb(255, 0, 0); */
}
.mid_oper {
  display: flex;
  line-height: 40px;
  margin: 5px 0;
  /* border: 1px solid red; */
  justify-content: space-between;


}
/* .icon{
  border: 1px solid red;
} */
.search{
  right: 0px;
  /* border: 1px solid red; */
  /* line-height: 40px; */
}
.search_icon{
color:black;
background: rgb(174, 175, 175);
}


.mid_list {
  padding-top: 10px;
}
table {
  width: 100%;
  border: 0.5px solid rgb(206, 205, 205);
}
tr {
  border: 1px solid red;
}
th {
  height: 40px;
}
.end {
  height: 50px;
  line-height: 50px;
}


ul{
  list-style-type: none;
  margin: 0;
}
li{
  display: inline-block;
  margin:0 10px;
}
</style>