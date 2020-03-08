<template>
  <div>
      <input type="text" id="time" value="00:00:00">
  </div>
</template>

<script>
export default{
  name: 'display'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #time {
    font-family: PTMono-Bold, "PT Mono", monospace;
    font-weight: 700;
    font-size: 200px;
    line-height: 200px;
    width: 960px;
    height: 200px;
    color: #333333;
    background-color: #F2F4F7;
    margin: 127px 90px 113px 91px;
    border: 0;
    padding: 0;
}
</style>
