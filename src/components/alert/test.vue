<template>
  <div>
    <div class="pop del_alert" v-if="showModal">
      <div class="text">{{text}}</div>
      <button class="cancel" @click="close">取消</button>
       <button class="submit" type="submit" >确定</button>
    </div>
     <div>
  </div>
  </div>
 
</template>

<script>
export default {
  props:['showModal','text'],

  methods:{
      close(){
        this.$emit('opnepop');
      },
      sure(){
        this.$emit('submitpop')
      } 
  }
};
</script>

<style>

.pop {
  background-color: #fff;
  position: fixed;
  display: flex;
  top: 30%;
  left: 40%;
  z-index: 2;
}
.del_alert {
  border-radius: 10px;
  position: relative;
  height: 150px;
  width: 350px;
  /* border: 3px solid rgb(223, 223, 223); */
  box-shadow: 0px 0px 20px rgba(100, 100, 100, 0.4);
}
.btn{
  color: #fff;
  border: none;

  padding: 8px;
  font-style: normal;
  cursor: default;
  border-radius: 5px;
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
.submit {
  background: rgb(43, 192, 130);
  box-shadow: 2px 1px 5px rgb(12, 116, 72);
  right: 10px;
}
.cancel {
  background: rgb(224, 102, 102);
  box-shadow: 2px 1px 5px rgb(155, 49, 49);
  right: 70px;
}
</style>