<template>
  <div class="add-alert-box" v-show="isAdd">
    <div>
      <span class="add_text">您即将添加一条数据</span>
      <table>
        <tr>
          <th>
            <label for="title">标题</label>
            <input
              name="title"
              type="text"
              placeholder="请输入标题"
              v-model="title"
            />
          </th>
          <th>
            <label for="abstract">状态</label>
            <!-- <input
              name="abstract"
              type="text"
              v-model="abstract"
              placeholder="请输入状态"
            /> -->
            <div>
              <select class="add_select" name="abstract" v-model="abstract">
                <option></option>
                <option>待上映</option>
                <option>已上映</option>
              </select>
            </div>
          </th>
        </tr>
      </table>
      <div class="addsave add_btn" @click="addDataBtn">保存</div>
      <div class="addcancel add_btn" @click="cancleBtn">取消</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list", "isAdd"],
  data() {
    return {
      title: "",
      abstract: "",
    };
  },
  methods: {
    addDataBtn() {
      let data = {
        title: this.title,
        abstract: this.abstract,
      };
      this.$emit("addDataBtn", data);
    },
    cancleBtn() {
      this.$emit("cancleBtn");
    },
  },
};
</script>

<style>
.add_select {
  height: 36px;
  width: 225px;
}
.add-alert-box {
  text-align: center;
  /* display: flex; */
  padding: 40px 40px 0;
  border-radius: 30px;
  /* border: 1px solid red; */
  box-shadow: 0px 0px 20px rgba(100, 100, 100, 0.4);
  height: 230px;
  background-color: #fff;
  width: 520px;
}
.add_text {
  display: block;
  padding-bottom: 10px;
  text-align: center;
  font-size: 24px;
  /* border: 1px solid red; */
}
.add_btn {
  position: absolute;
  bottom: 30px;
  width: 40px;
  height: 20px;
  line-height: 20px;
  padding: 10px;
  text-align: center;
  font-size: 18px;
  border-radius: 15px;
  cursor: default;
  color: #fff;
}
.addcancel {
  right: 100px;
  background: rgb(224, 102, 102);
  box-shadow: 2px 1px 5px rgb(155, 49, 49);
}
.addsave {
  right: 30px;
  background: rgb(43, 192, 130);
  box-shadow: 2px 1px 5px rgb(12, 116, 72);
}
</style>