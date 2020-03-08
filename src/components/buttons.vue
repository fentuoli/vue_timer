<template>
  <div>
    <button id="countup">
        开始正计时
    </button>
    <button id="countdown" @click="CountdownClick">
        开始倒计时
    </button>
    <button id="clear">
        清空倒计时
    </button>
    <button id="restart">
        重新再计时
    </button>
    <button id="resume">
        恢复计时器
    </button>
    <button id="pause">
        暂停计时器
    </button>
  </div>
</template>

<script>
export default{
  name: 'buttons',
  methods: {
    CountdownClick: function () {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #countup {
    width: 98px;
    height: 40px;
    font-family: PingFangSC-Regular, "PingFang SC", sans-serif;
    background-color: #2188E9;
    color: #FFFFFF;
    font-size: 16px;
    border: 0;
    padding: 0;
    border-radius: 5px;
    position: absolute;
    left: 310px;
    top: 15px;
}

#countdown {
    width: 98px;
    height: 40px;
    font-family: PingFangSC-Regular, "PingFang SC", sans-serif;
    background-color: #2188E9;
    color: #FFFFFF;
    font-size: 16px;
    border: 0;
    padding: 0;
    border-radius: 5px;
    position: absolute;
    left: 428px;
    top: 15px;
}

#resume {
    width: 98px;
    height: 40px;
    font-family: PingFangSC-Regular, "PingFang SC", sans-serif;
    background-color: #2188E9;
    color: #FFFFFF;
    font-size: 16px;
    border: 0;
    padding: 0;
    border-radius: 5px;
    display: none;
    position: absolute;
    left: 227px;
    top: 15px;
}

#pause {
    width: 98px;
    height: 40px;
    font-family: PingFangSC-Regular, "PingFang SC", sans-serif;
    background-color: #2188E9;
    color: #FFFFFF;
    font-size: 16px;
    border: 0;
    padding: 0;
    border-radius: 5px;
    display: none;
    position: absolute;
    left: 227px;
    top: 15px;
}

#clear {
    width: 98px;
    height: 40px;
    font-family: PingFangSC-Regular, "PingFang SC", sans-serif;
    background-color: #DD2E1D;
    color: #FFFFFF;
    font-size: 16px;
    border: 0;
    padding: 0;
    border-radius: 5px;
    display: none;
    position: absolute;
    left: 964px;
    top: 15px;
}

#restart {
    width: 98px;
    height: 40px;
    font-family: PingFangSC-Regular, "PingFang SC", sans-serif;
    background-color: #FFB020;
    color: #FFFFFF;
    font-size: 16px;
    border: 0;
    padding: 0;
    border-radius: 5px;
    display: none;
    position: absolute;
    left: 1082px;
    top: 15px;
}
</style>
