<template>
  <div>
    <input class="time_input" id="hour" type="text" placeholder="0">
    <span class="tip" id="tip1">时</span>
    <input class="time_input" id="minute" type="text" placeholder="0">
    <span class="tip" id="tip2">分</span>
    <input class="time_input" id="second" type="text" placeholder="0">
    <span class="tip" id="tip3">秒</span>
    <input id="hint" type="text">
  </div>
</template>

<script>
export default{
  name: 'inputbox'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #hour {
    height: 40px;
    width: 70px;
    border-radius: 5px;
    background-color: #FFFFFF;
    border: 0;
    padding: 0;
    position: absolute;
    left: 40px;
    top: 15px;
}

#minute {
    height: 40px;
    width: 70px;
    border-radius: 5px;
    background-color: #FFFFFF;
    border: 0;
    padding: 0;
    position: absolute;
    left: 130px;
    top: 15px;
}

#second {
    height: 40px;
    width: 70px;
    border-radius: 5px;
    background-color: #FFFFFF;
    border: 0;
    padding: 0;
    position: absolute;
    left: 220px;
    top: 15px;
}

input::placeholder {
    line-height: 22px;
    padding: 9px;
    font-weight: normal;
    font-size: 16px;
    font-family: PingFangSC-Regular, "PingFang SC", sans-serif;
    color: #AFAFAF;
}

#tip1 {
    height: 22px;
    width: 32px;
    font-size: 16px;
    font-family: PingFangSC-Regular, "PingFang SC", sans-serif;
    color: #222222;
    line-height: 22px;
    text-align: right;
    position: absolute;
    left: 69px;
    bottom: 24px;
}

#tip2 {
    height: 22px;
    width: 32px;
    font-size: 16px;
    font-family: PingFangSC-Regular, "PingFang SC", sans-serif;
    color: #222222;
    line-height: 22px;
    text-align: right;
    position: absolute;
    left: 159px;
    top: 24px;
}

#tip3 {
    height: 22px;
    width: 32px;
    font-size: 16px;
    font-family: PingFangSC-Regular, "PingFang SC", sans-serif;
    color: #222222;
    line-height: 22px;
    text-align: right;
    position: absolute;
    left: 249px;
    top: 24px;
}
#hint {
    height: 22px;
    width: 192px;
    font-family: PTMono-Regular, "PT Mono", PingFangSC-Regular, "PingFang SC", sans-serif;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 22px;
    margin: 0;
    border: 0;
    background-color: #97A5BC;
    position: absolute;
    left: 40px;
    top: 24px;
    display: none;
}
</style>
