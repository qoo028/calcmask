<template>
  <div id="app">
                <div class="level">
                <div class="level-item title has-text-grey-darker">
                    {{title}}
                </div>
            </div>

            <div class="level">
                <div class="level-item title has-text-grey-darker">
                    <div class="field has-addons">
                        <p class="control">
                            <a class="button is-info is-selected">
                                <span>乗数</span>
                            </a>
                        </p>
                        <p class="control">
                            <a class="button">
                                <span>ビット</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
    <multi/>
  </div>
</template>

<script>
import multi from './components/multi.vue'

export default {
  name: 'app',
  components: {
    multi
  },
  data(){
    return{
      title:'計算ドリル'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
