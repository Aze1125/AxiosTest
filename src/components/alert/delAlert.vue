<template>
  <div>
      <div class="del_alert" v-if="showModal">
        <div class="text">{{ text }}</div>
        <button class="delcancel" @click="cancleBtn">取消</button>
        <button class="delsubmit" @click="submitBtn">确定</button>
        <!-- <button  @keydown.13="submitBtn">aaaaaa</button> -->
      </div>
    </div>
</template>

<script>
export default {
  props: ["showModal", "text"],
  data() {
    return {};
  },
  methods: {
    cancleBtn() {
      this.$emit("cancleBtn");
    },
    submitBtn() {
      this.$emit("submitBtn");
    },
  },
};
</script>

<style>

/*  */
.del_alert {
  display: flex;
  border-radius: 10px;
  position: relative;
  height: 150px;
  width: 350px;
  /* border: 3px solid rgb(223, 223, 223); */
  box-shadow: 0px 0px 20px rgba(100, 100, 100, 0.4);
}
button {
  padding: 5px 8px;
  color: #fff;
  border: none;
  position: absolute;
  bottom: 20px;
}
button:hover {
  background-color: rgba(104, 104, 104, 0.698) /* Green */;
  color: white;
  box-shadow: 2px 1px 5px #252525b2;
}
.text {
  padding: 30px;
}
.delsubmit {
  background: rgb(43, 192, 130);
  box-shadow: 2px 1px 5px rgb(12, 116, 72);
  right: 10px;
}
.delcancel {
  background: rgb(224, 102, 102);
  box-shadow: 2px 1px 5px rgb(155, 49, 49);
  right: 70px;
}
</style>