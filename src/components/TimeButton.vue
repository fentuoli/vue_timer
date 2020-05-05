<template>
  <button :class="BtnColor+' btnbasic'" @click="$emit('action')"><slot></slot></button>
</template>

<script>
export default {
  props: {
    BtnColor: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btnbasic {
  margin-top: 15px;
  width: 98px;
  height: 40px;
  padding: 0;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #FFFFFF;
  border-radius: 5px;
}
.begin {
  margin-left: 20px;
  background: #2188E9;
}
.pause {
  background: #2188E9;
  position: absolute;
  left: 227px;
}
.resume {
  background: #2188E9;
  position: absolute;
  left: 227px;
}
.clear {
  position: absolute;
  left: 964px;
  background: #DD2E1D;
}
.restart {
  position: absolute;
  left: 1082px;
  background: #FFB020;
}
</style>
