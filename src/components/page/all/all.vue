<template>
  <div class="all_box">
    <div></div>
    <div class="head">
      <div style="padding">
        <!-- 刷新 -->
        <i style="background: rgb(51, 51, 51)" class="iconfont">&#xe644;</i>
        <!-- 添加 -->
        <i
          style="background: rgb(43, 192, 130)"
          class="iconfont"
          @click="isAdd = true"
          >&#xe7fc;<span>&nbsp;添加</span></i
        >
        <!-- article_id,title,add_time,abstract -->
        <!-- item.article_id, item.title, item.add_time, item.abstract -->
        <!-- 添加弹出框组件 -->
        <addAlert
          class="add_div"
          :isAdd="isAdd"
          @addDataBtn="addDataBtn"
          @cancleBtn="cancleBtn"
        ></addAlert>
      </div>
      <div class="search">
        <input type="search" placeholder="search" />
        <i style="background: rgb(221, 224, 223); color: black" class="iconfont"
          >&#xe854;</i
        >
      </div>
    </div>
    <div class="info_list">
      <table class="list_table">
        <thead>
          <tr class="title_tr">
            <th>标题</th>
            <th>创建时间</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr v-for="(item, index) in list">
            <td>
              <input v-show="edit_currentIndex == index" v-model="item.title" />
              <span v-show="edit_currentIndex != index">{{ item.title }}</span>
            </td>
            <td>
              <input v-show="edit_currentIndex == index" v-model="item.add_time" />
              <span v-show="edit_currentIndex != index">{{ item.add_time }}</span>
            </td>
            <td>
              <div>
                <select class="add_select" v-show="edit_currentIndex == index"  v-model="item.abstract">
                  <option></option>
                  <option>已上映</option>
                  <option>待上映</option>
                </select>
              <span v-show="edit_currentIndex != index">{{ item.abstract }}</span>

              </div>
            </td>
            <td>
              <!-- 修改按钮 num(index); @click="isEdit = !isEdit; v-show="!isEdit""-->
              <i
                class="iconfont"
                v-show="edit_currentIndex != index"
                style="background: rgb(43, 192, 130)"
                @click="edit_index(index)"
                >&#xe61c;</i
              >
              <!-- 修改完成按钮 v-show="isEdit"-->
              <i
                class="iconfont"
                v-show="edit_currentIndex == index"
                style="background: rgb(43, 192, 130)"
                @click="
                  editData(
                    item.article_id,
                    item.title,
                    item.add_time,
                    item.abstract,
                    index
                  )
                "
                >完成</i
              >

              <!-- 删除按钮                   v-show="currentIndex == index"
                 -->
              <i
                class="iconfont delbtn"
                style="background: red"
                @click="delpop(item.article_id);del_index(index)"

                >&#xe614;</i
              >
              <del-alert
                class="del-alert"
                v-show="del_currentIndex == index"
                :text="text"
                :showModal="showModal"
                @cancleBtn="cancleBtn"
                @submitBtn="submitBtn(item.article_id, item.title)"
              ></del-alert>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="end" style="margin: 10px 0">
      <div>显示第1到第{{ list.length }}条纪录，总共{{ list.length }}条纪录</div>
    </div>
  </div>
</template>

<script>
import delAlert from "../../alert/delAlert";
import addAlert from "../../alert/addAlert";
export default {
  components: {
    delAlert: delAlert,
    addAlert: addAlert,
  },
  data() {
    return {
      list: [],
      text: "即将为您删除一条数据",
      showModal: false,
      isEdit: false,
      isAdd: false,
      article_id: 0,
      edit_currentIndex: -1,
      del_currentIndex: -1
    };
  },
  created() {
    this.seekData();
  },
  methods: {
    edit_index(index) {
      this.edit_currentIndex = index;

    },
    del_index(index){
      this.del_currentIndex = index;

    },

    num(index, title) {
      console.log(index, "标题", title);
    },
    delpop(article_id) {
      this.showModal = true;
      this.article_id = article_id;
    },

    // 查询
    seekData() {
      this.$axios.post("index.php/api/article/article_list").then((res) => {
        console.log(res.data.data);
        this.list = res.data.data;
      });
    },
    // 添加数据
    addData(title, abstract) {
      this.$axios
        .post("/index.php/api/article/add_article", {
          title: title,
          abstract: abstract,
        })
        .then((res) => {
          console.log("添加数据");
          this.seekData();
        })
        .catch((err) => {
          err;
        });
    },
    // 修改数据
    editData(article_id, title, add_time, abstract, index) {
      this.edit_currentIndex = -1;
      this.$axios
        .post("/index.php/api/article/update_article", {
          article_id: article_id,
          title: title,
          add_time: add_time,
          abstract: abstract,
        })
        .then((res) => {
          console.log("修改数据");
          this.isEdit = false;
          this.seekData();
        });
    },
    // 删除
    delData(article_id) {
      this.$axios
        .post("/index.php/api/article/del_article", {
          article_id: article_id,
        })
        .then((res) => {
          this.seekData();
        })
        .catch((err) => {
          err;
        });
    },
    // 取消按钮
    cancleBtn() {
      this.showModal = false;
      this.isAdd = false;
      console.log("已取消");
    },
    // 确定按钮
    submitBtn(article_id, title) {
      // 先关闭
      this.showModal = false;
      // 后调用@closepopa="closepopa"
      console.log("已删除一条数据");
      this.delData(this.article_id);
    },
    // 添加按钮
    addDataBtn(data) {
      this.isAdd = false;
      this.addData(data.title, data.abstract);
    },
  },
};
</script>

<style>
.delbtn {
  /* pointer-events: none; */
}


.add_select {
  height: 36px;
  width: 225px;
}
.add_div {
  position: fixed;
  display: flex;
  top: 30%;
  left: 39.65%;
  z-index: 2;
}

.del-alert {
  background-color: #fff;
  position: fixed;
  display: flex;
  top: 30%;
  left: 40%;
  z-index: 2;
}

.all_box {
  padding: 20px;
  background: #fff;
}
.head {
  display: flex;
  height: 30px;
  line-height: 30px;
  justify-content: space-between;
}
i {
  color: #fff;
  padding: 8px;
  font-style: normal;
  cursor: default;
  border-radius: 5px;
}
.info_list {
  display: flex;
}

table {
  border: 1px solid rgb(231, 231, 231);
  margin-top: 10px;
  width: 100%;
  text-align: center;
}
input {
  height: 31px;
}
tr {
  height: 40px;
  line-height: 40px;
}
th {
  height: 40px;

  width: 25%;
  border: 0.1px solid #f6f6f6;
}
tbody tr:nth-child(odd) {
  background-color: rgb(233, 233, 233);
}
tbody tr:nth-child(even) {
  background-color: rgb(248, 247, 247);
}
</style>