<template>
  <div id="app">
    <div class="toolbar-font">
      <time-input v-if="navStatus == 'start'" v-model="oriHour" input-type="hour"></time-input>
      <time-input v-if="navStatus == 'start'" v-model="oriMinute" input-type="minute"></time-input>
      <time-input v-if="navStatus == 'start'" v-model="oriSecond" input-type="second"></time-input>
      <time-hint v-if="navStatus == 'counting' && countStatus == 'up'">{{ hint }}</time-hint>
      <time-hint v-if="navStatus == 'counting' && countStatus == 'down'">{{ hint }}</time-hint>
      <time-hint v-if="navStatus == 'pause' && countStatus == 'up'">{{ hint }}</time-hint>
      <time-hint v-if="navStatus == 'pause' && countStatus == 'down'">{{ hint }}</time-hint>
      <time-hint v-if="navStatus == 'counted' && countStatus == 'up'">{{ hint }}</time-hint>
      <time-hint v-if="navStatus == 'counted' && countStatus == 'down'">{{ hint }}</time-hint>
      <time-button v-if="navStatus == 'start'" @action="setTimerUp()" btn-color="begin">开始正计时</time-button>
      <time-button v-if="navStatus == 'start'" @action="setTimerDown()" btn-color="begin">开始倒计时</time-button>
      <time-button v-if="navStatus == 'counting'" @action="pauseTimer()" btn-color="pause">暂停计时器</time-button>
      <time-button v-if="navStatus == 'pause'" @action="continueTimer()" btn-color="resume">恢复计时器</time-button>
      <time-button v-if="navStatus != 'start'" @action="restartTimer()" btn-color="restart">重新再计时</time-button>
      <time-button
        v-if="navStatus != 'start' && countStatus == 'up'"
        @action="clearTimer()"
        btn-color="clear"
      >清空正计时</time-button>
      <time-button
        v-if="navStatus != 'start' && countStatus == 'down'"
        @action="clearTimer()"
        btn-color="clear"
      >清空倒计时</time-button>
    </div>
    <div class="timer-font">
      <h1 id="time" class="timecontent">{{ currenTime }}</h1>
    </div>
  </div>
</template>

<script>
import TimeButton from './components/TimeButton'
import TimeHint from './components/TimeHint.vue'
import TimeInput from './components/TimeInput.vue'
export default {
  name: 'App',
  mounted () {
    var _this = this
    document.onkeyup = function (keyboard) {
      window.event.preventDefault()
      let key = window.event.keyCode
      if (_this.navStatus === 'start' && key === 13) {
        _this.setTimerUp()
      } else if (_this.navStatus === 'counting' && key === 32) {
        _this.pauseTimer()
      } else if (_this.navStatus === 'pause' && key === 32) {
        _this.continueTimer()
      }
    }
  },
  data () {
    return {
      navStatus: 'start',
      countStatus: 'up',
      oriHour: '0',
      oriMinute: '0',
      oriSecond: '0',
      oDate: 0,
      oDate1: 0,
      subtime: 0,
      timer: null,
      lastTime: 0,
      iniTime: 0,
      currenTime: '00:00:00',
      hint: ''
    }
  },
  methods: {
    setTimeContent: function () {
      if (parseInt(this.oriHour) > 99) {
        this.oriHour = '99'
      } else if (parseInt(this.oriHour) < 0) {
        this.oriHour = '0'
      } else if (this.oriHour === null || this.oriHour === undefined || this.oriHour === '') {
        this.oriHour = '0'
      }
      if (parseInt(this.oriMinute) > 59) {
        this.oriMinute = '59'
      } else if (parseInt(this.oriMinute) < 0) {
        this.oriMinute = '0'
      } else if (this.oriMinute === null || this.oriMinute === undefined || this.oriMinute === '') {
        this.oriMinute = '0'
      }
      if (parseInt(this.oriSecond) > 59) {
        this.oriSecond = '59'
      } else if (parseInt(this.oriSecond) < 0) {
        this.oriSecond = '0'
      } else if (this.oriSecond === null || this.oriSecond === undefined || this.oriSecond === '') {
        this.oriSecond = '0'
      }
      this.lastTime = parseInt(this.oriHour) * 3600 + parseInt(this.oriMinute) * 60 + parseInt(this.oriSecond)
      // alert(this.lastTime)
      if (this.oriHour.length < 2) {
        this.oriHour = '0' + this.oriHour
      }
      if (this.oriMinute.length < 2) {
        this.oriMinute = '0' + this.oriMinute
      }
      if (this.oriSecond.length < 2) {
        this.oriSecond = '0' + this.oriSecond
      }
    },
    setTimerDown: function () {
      this.oDate = Date.now()
      console.log('开始倒计时')
      this.setTimeContent()
      this.countStatus = 'down'
      this.navStatus = 'counting'
      this.hint =
        '正在倒计时 ' +
        this.oriHour +
        ':' +
        this.oriMinute +
        ':' +
        this.oriSecond
      this.timer = setInterval(this.countDown, 1000)
    },

    setTimerUp: function () {
      this.oDate = Date.now()
      console.log('开始正计时')
      this.setTimeContent()
      this.countStatus = 'up'
      this.navStatus = 'counting'
      this.hint =
        '正在正计时 ' +
        this.oriHour +
        ':' +
        this.oriMinute +
        ':' +
        this.oriSecond
      this.timer = setInterval(this.countUp, 1000)
    },

    pauseTimer: function () {
      this.oDate1 = Date.now()
      this.subtime = 1000 - (this.oDate1 - this.oDate) % 1000
      this.navStatus = 'pause'
      if (this.countStatus === 'up') {
        this.hint =
          '暂停正计时 ' +
          this.oriHour +
          ':' +
          this.oriMinute +
          ':' +
          this.oriSecond
      } else if (this.countStatus === 'down') {
        this.hint =
          '暂停倒计时 ' +
          this.oriHour +
          ':' +
          this.oriMinute +
          ':' +
          this.oriSecond
      }
      clearInterval(this.timer)
    },

    resumeTimer: function () {
      if (this.countStatus === 'down') {
        this.hint =
          '正在倒计时 ' +
          this.oriHour +
          ':' +
          this.oriMinute +
          ':' +
          this.oriSecond
        this.countDown()
        this.timer = setInterval(this.countDown, 1000)
      } else if (this.countStatus === 'up') {
        this.hint =
            '正在正计时 ' +
            this.oriHour +
            ':' +
            this.oriMinute +
            ':' +
            this.oriSecond
        this.countUp()
        this.timer = setInterval(this.countUp, 1000)
      }
    },

    continueTimer: function () {
      this.navStatus = 'counting'
      setTimeout(this.resumeTimer, this.subtime)
    },

    restartTimer: function () {
      clearInterval(this.timer)
      this.currenTime = '00:00:00'
      this.navStatus = 'counting'
      this.lastTime = parseInt(
        this.oriHour * 60 * 60 + this.oriMinute * 60 + this.oriSecond
      )
      if (this.countStatus === 'down') {
        this.hint =
          '正在倒计时 ' +
          this.oriHour +
          ':' +
          this.oriMinute +
          ':' +
          this.oriSecond
        this.timer = setInterval(() => {
          this.countDown()
        }, 1000)
      } else if (this.countStatus === 'up') {
        this.hint =
          '正在正计时 ' +
          this.oriHour +
          ':' +
          this.oriMinute +
          ':' +
          this.oriSecond
        this.iniTime = 0
        this.timer = setInterval(() => {
          this.countUp()
        }, 1000)
      }
    },

    clearTimer: function () {
      clearInterval(this.timer)
      this.navStatus = 'start'
      this.currenTime = '00:00:00'
      this.iniTime = 0
      this.lastTime = 0
    },

    countDown: function () {
      this.lastTime -= 1
      if (this.lastTime >= 0) {
        let newHour = parseInt(this.lastTime / 60 / 60)
        let newMinute = parseInt((this.lastTime / 60) % 60)
        let newSecond = parseInt(this.lastTime % 60)
        if (newHour < 10) {
          newHour = '0' + newHour
        }
        if (newMinute < 10) {
          newMinute = '0' + newMinute
        }
        if (newSecond < 10) {
          newSecond = '0' + newSecond
        }
        this.currenTime = newHour + ':' + newMinute + ':' + newSecond
      } else {
        clearInterval(this.timer)
        this.navStatus = 'counted'
        this.hint =
          '倒计时 ' +
          this.oriHour +
          ':' +
          this.oriMinute +
          ':' +
          this.oriSecond +
          ' 已结束'
      }
    },

    countUp: function () {
      this.iniTime += 1
      if (this.iniTime <= parseInt(this.lastTime)) {
        let newHour = parseInt(this.iniTime / 60 / 60)
        let newMinute = parseInt((this.iniTime / 60) % 60)
        let newSecond = parseInt(this.iniTime % 60)
        if (newHour < 10) {
          newHour = '0' + newHour
        }
        if (newMinute < 10) {
          newMinute = '0' + newMinute
        }
        if (newSecond < 10) {
          newSecond = '0' + newSecond
        }
        this.currenTime = newHour + ':' + newMinute + ':' + newSecond
      } else {
        clearInterval(this.timer)
        this.iniTime = 0
        this.navStatus = 'counted'
        this.hint =
          '正计时 ' +
          this.oriHour +
          ':' +
          this.oriMinute +
          ':' +
          this.oriSecond +
          ' 已结束'
      }
    }
  },
  components: {
    TimeButton,
    TimeHint,
    TimeInput
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  border: 0;
}
#app {
  border: 0;
  margin: 0;
  padding: 0;
}
.toolbar-font {
  width: 1140px;
  height: 70px;
  font-size: 0;
  background-color: #97a5bc;
  padding-left: 40px;
  padding-right: 40px;
  position: relative;
}
.timer-font {
  height: 440px;
  width: 1140px;
  padding-left: 40px;
  padding-right: 40px;
  background-color: #f2f4f7;
}
.timecontent {
  font-family: PTMono-Bold, "PT Mono", monospace;
  font-weight: 700;
  font-size: 200px;
  line-height: 200px;
  width: 960px;
  height: 200px;
  color: #333333;
  display: inline-block;
  background-color: #f2f4f7;
  margin: 127px 90px 113px 91px;
  border: 0;
  padding: 0;
}
</style>
