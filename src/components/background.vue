<template>
  <div>
    <div class="toolbar-font">
      <inputbox></inputbox>
      <buttons></buttons>
    </div>
    <div class="timer-font">
      <display></display>
    </div>
  </div>
</template>

<script>
import inputbox from './inputbox.vue'
import buttons from './buttons.vue'
import display from './display.vue'
export default{
  name: 'background',
  components: {
    inputbox,
    buttons,
    display
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .toolbar-font {
    height: 70px;
    width: 1140px;
    background-color: #97A5BC;
    padding-left: 40px;
    padding-right: 40px;
    position: relative;
    margin: 0;
}

.timer-font {
    height: 440px;
    width: 1140px;
    padding-left: 40px;
    padding-right: 40px;
    background-color: #F2F4F7;
    margin: 0;
}
</style>
