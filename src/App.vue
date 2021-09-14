<template>

  <div class="timer">
    <H1>{{$store.state.timer}}</H1>
  </div>

  <router-view>
  </router-view>

</template>


<script>

  export default {
    name: 'App',
    data() {
      return {
      }
    },
    computed:{
      colorNumber:{
        get(){
          return this.$store.state.currentColor
        },
        set(val){
          this.$store.dispatch('colorChange', val)
        }
      }
    },
    methods:{

      startValue(){
        switch (this.$route.path) {
          case '/red':
            return 0
          case '/yellow':
            return 1
          case '/green':
            return 2
          case '/':
            if(localStorage.session.split(',')[1] == false){
              this.$router.push({name: this.$store.state.colorChange[0].color})
              return 0
            }
            this.$router.push({name: this.$store.state.colorChange[localStorage.session.split(',')[1]].color})
            return localStorage.session.split(',')[1]
        }
        return 0
      }
    },

    async mounted() {

      await new Promise((resolve) => {
        setTimeout(()=>resolve("готово!"),0)    // без этого таймаута this.$route.path ничего не показывает
      })

      let colorArr = this.$store.state.colorChange
      let colorNumber = this.startValue()
      let weekSec = localStorage.session.split(',')[0]

      do{
          await new Promise((resolve) => {
              let sec = weekSec || colorArr[colorNumber].time
            console.log(weekSec)
            console.log(sec)

            weekSec = null
              let interval = 100

              let timer = setInterval(() => {
                  sec -= interval
                  if(sec <= 0) {
                      clearInterval(timer)

                      colorArr.length-1 <= colorNumber ? colorNumber = 0 : colorNumber++
                      this.$store.dispatch('colorChange', colorNumber)
                      this.$router.push({name: colorArr[colorNumber].color})

                      resolve("готово!")
                  }
                  this.timer = this.$store.dispatch('timerUp', Math.trunc(sec / 100))
              }, interval);

          })
        // eslint-disable-next-line no-constant-condition
      } while (true)
    }
  }
</script>



<style>
  @import './clear.module.css';
  :root {
    --footer-height: 50px;
  }

  main{
    width: 100%;
    height: calc(100vh - var(--footer-height));
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .timer{
    position: absolute;
    bottom: 0;
    height: var(--footer-height);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 30pt;
  }
</style>
