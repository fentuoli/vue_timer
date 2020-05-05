<template>
  <label :for="InputType" :class="InputType"><input type="text" v-model="time" :id="InputType" class="timeinput" placeholder="0"></label>
</template>

<script>
export default {
  data () {
    return {
      time: ''
    }
  },
  props: {
    InputType: {
      type: String,
      default: 'hour'
    }
  },
  watch: {
    time (newvalue) {
      this.$emit('input', newvalue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timeinput {
  width: 70px;
  height: 40px;
  background-color: #FFFFFF;
  border-radius: 5px;
  text-indent: 9px;
  font-family: PingFangSC-Regular, "PingFang SC", sans-serif;
  color: #AFAFAF;
  font-size: 16px;
  padding: 0;
}
input::placeholder {
    line-height: 22px;
    padding: 9px;
    font-weight: normal;
    font-size: 16px;
    font-family: PingFangSC-Regular, "PingFang SC", sans-serif;
    color: #AFAFAF;
}
.hour {
  width: 70px;
  height: 40px;
  position: relative;
  margin-left: 0;
  margin-top: 15px;
  display: inline-block;
}
.minute {
  width: 70px;
  height: 40px;
  position: relative;
  margin-left: 20px;
  margin-top: 15px;
  display: inline-block;
}
.second {
  width: 70px;
  height: 40px;
  position: relative;
  margin-left: 20px;
  margin-top: 15px;
  display: inline-block;
}

.hour::after {
  content: "时";
  width: 32px;
  height: 22px;
  position: absolute;
  left: 29px;
  top: 9px;
  font-family: PingFangSC-Regular, "PingFang SC", sans-serif;
  font-size: 16px;
  color: #222222;
  text-align: right;

}

.minute::after {
  content: "分";
  width: 32px;
  height: 22px;
  position: absolute;
  left: 29px;
  top: 9px;
  font-family: PingFangSC-Regular, "PingFang SC", sans-serif;
  font-size: 16px;
  color: #222222;
  text-align: right;
}

.second::after {
  content: "秒";
  width: 32px;
  height: 22px;
  position: absolute;
  left: 29px;
  top: 9px;
  font-family: PingFangSC-Regular, "PingFang SC", sans-serif;
  font-size: 16px;
  color: #222222;
  text-align: right;
}
</style>
