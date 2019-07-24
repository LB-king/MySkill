<template lang="pug">
    .main
        el-radio(label='1',v-model='model') 选项1
        el-radio(label='2',v-model='model') 选项2
        hr
        el-radio-group(v-model="radio")
          el-radio(:label="3") 备选项3
          el-radio(:label="6") 备选项6
          el-radio(:label="9") 备选项9
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  computed: {
    model:{
      get(){
        return this.isAgree
      },
      set(v){
        this.$emit('setAgree',v)
      }
    },
    radio:{
      get(){
        return this.isRadio
      },
      set(v){
        this.$emit('setRadio',Number(v))
      }
    }
    
  },
  props: {
    isAgree: {
      type: String,
      default: ""
    },
    isRadio: {
      type: Number,
      default: 0
    }
  }
};
</script>

