<template>
  <label id="hint"><slot></slot></label>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hint {
  width: 192px;
  height: 22px;
  position: absolute;
  display: inline-block;
  margin: 0;
  border: 0;
  left: 40px;
  top: 24px;
  font-family: PTMono-Regular, "PT Mono", PingFangSC-Regular, "PingFang SC", sans-serif;
  color: #FFFFFF;
  background-color: #97A5BC;
  font-size: 16px;
}
</style>
