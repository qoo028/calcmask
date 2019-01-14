<template>
  <div class="box">
    <div class="level is-mobile">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading has-text-grey-light">現在の問題数</p>
          <p class="subtitle has-text-grey">{{countofquetion}}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading has-text-grey-light">正解数</p>
          <p class="subtitle has-text-grey">{{countofanswer}}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading has-text-grey-light">不正解数</p>
          <p class="subtitle has-text-grey">{{countoffail}}</p>
        </div>
      </div>
       <div class="level-item has-text-centered">
        <div>
          <p class="heading has-text-grey-light">正答率</p>
          <p class="subtitle has-text-grey">{{paranswer}}%</p>
        </div>
      </div>
    </div>
    <div v-if="doAnswer">
      <div class="level">
        <div class="level-item">
          <p class="title has-text-grey-darker">
            2
            <sup>{{quetion}}</sup> = ？
          </p>
        </div>
      </div>
      <div class="level">
        <div class="level">
          <div class="level-item title has-text-grey-darker">
            <div class="field has-addons is-fullwidth">
              <div class="control">
                <input
                  class="input is-medium"
                  type="number"
                  placeholder="Answer"
                  v-model="respond"
                  @keyup.enter="checkAnswer"
                  autofocus
                >
              </div>
              <div class="control">
                <button class="button is-medium" @click="checkAnswer">return</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="level-item">
        <p class="title has-text-grey-darker">
          2<sup>{{quetion}}</sup>= {{answer}}
        </p>
      </div>

      <button class="button is-medium is is-fullwidth" @click="nextQuetion">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'multi',
  data(){
      return{
           quetion: 0, 
           respond: '', 
           answer: 0, 
           doAnswer: 'true',
           countofquetion :'1' ,
           countofanswer:'0',
           countoffail :'0',
           paranswer:'0'
      }
  },
  methods: {
      initMulti : function(){
        const min = Math.ceil(0);
        const max = Math.floor(10);
        this.quetion = Math.floor(Math.random() * (max - min)) + min;
        this.answer = 2 ** this.quetion
        this.respond = ''
      },
      checkAnswer : function(){
        this.doAnswer = false
        if(parseInt(this.respond) === this.answer){
            this.countofanswer = parseInt(this.countofanswer) + 1
        }else{
            this.countoffail = parseInt(this.countoffail) + 1
        }
        this.calcParAnswer()
      },
      nextQuetion : function(){
        this.initMulti()
        this.doAnswer = true
        this.countofquetion = parseInt(this.countofquetion) + 1
      },
      calcParAnswer:function(){
          this.paranswer = (Math.round((this.countofanswer / this.countofquetion)*1000)/10)
      }
  },
  mounted: function(){
    this.$nextTick(function(){
        this.initMulti()
    })
  }
}
</script>