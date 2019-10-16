<template>
  <div class="home">
    <router-link to="/login">点击登录</router-link>
    <router-link to="/about">点击关于</router-link>

    <div>
      <span class="iconfont icongongzuotai"></span>
    </div>
    <el-input
      type='number'
      v-model='num'
      @keydown.native="channelInputLimit"
    ></el-input>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data () {
    return {
      num: ''
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    channelInputLimit(e){
      let key = e.key
      // 不允许输入'e'和'.'
      if (key === 'e' || key === '.') {
        e.returnValue = false
        return false
      }
      return true
        }
  }
};
</script>
