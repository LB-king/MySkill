<template>
  <div class="about">
    <h1>This is an about page</h1>
    <radio 
    :is-radio="iradio"
     @setRadio="setRado" 
     :is-agree="igree" 
     @setAgree="setAgee"></radio>
    <el-button @click="clickMe">点击</el-button>
  </div>
</template>
<script>
import radio from "../components/radio";
import { mapMutions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    igree() {
      return this.$store.state.iGree;
    },
    iradio() {
      return this.$store.state.iRadio;
    }
  },
  methods: {
    clickMe() {
      console.log(this.$store.state.iRadio);
    },
    setAgee(v) {
      this.$store.commit("updataIgee", v);
    },
    setRado(v) {
      this.$store.commit("updataIradio", v);
    }
  },
  components: {
    radio
  }
};
</script>

