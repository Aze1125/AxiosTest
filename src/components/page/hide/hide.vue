<template>
<div>

   <div class="aaa">
    <i class="iconfont btn" style="background: red"  @click="showModal = true" >&#xe614;</i>
    <test :text="text" :showModal="showModal" @opnepop = 'opnepop'></test>
  </div> 
</div>
 
</template>

<script>
import test from '../../alert//test'
export default {
  data(){
    return{
      text:'您将要删除一条数据',
      showModal:false
    }
  },
  components:{
    test:test
  },
  methods:{
    opnepop(){
      this.showModal = false;
    },
    submitpop(){
      
    }

  }
};
</script>

<style>
.aaa{
  height: 500px;
  width: 1200px;
  left:500px;
  }
.btn{
  margin-left:500px;
}
</style>