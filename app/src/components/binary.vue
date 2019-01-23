<template>
  <div class="multi">
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
        <div class="level-item">下記の2進数を10進数に表せ</div>
      </div>
      <div class="level">
        <div class="level-item">
          <p class="title has-text-grey-darker">{{quetion}}</p>
        </div>
      </div>
      <div class="level">
        <div class="level is-hidden-mobile">
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
                <button class="button is-medium" @click="checkAnswer">回答</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="level">答えは</div>
      <div class="level">
        <p class="title has-text-success" v-if="success">
          
          {{quetion}} = {{answer}}
        </p>
        <p class="title has-text-danger" v-else>
          
          {{quetion}} = {{answer}}
        </p>
      </div>
      <div class="level">
        <div class="level-item title has-text-grey-darker">
          <div class="field has-addons is-fullwidth is-hidden-mobile">
            <div class="control">
              <input
                class="input is-medium is-success"
                type="number"
                placeholder="Answer"
                v-model="responded"
                @keyup.enter="nextQuetion"
                autofocus
                v-if="success"
              >
              <input
                class="input is-medium is-danger"
                type="number"
                placeholder="Answer"
                v-model="responded"
                @keyup.enter="nextQuetion"
                autofocus
                v-else
              >
            </div>
            <div class="control">
              <button class="button is-medium" @click="nextQuetion">次へ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section is-hidden-tablet">
      <keypad v-on:send="nextPage" :input="respond"/>
    </div>
    <b-collapse :open="false">
      <button class="button is-fullwidth is-white" slot="trigger">詳細</button>
      <b-table :data="data" :narrowed="true" :mobile-cards="false">
        <template slot-scope="props">
          <b-table-column filed="bit" label="ビット" centered>{{props.row.bit}}</b-table-column>
          <b-table-column filed="sum" label="値" numeric>{{props.row.sum}}</b-table-column>
          <b-table-column filed="countofanswer" label="正答数" centered>{{props.row.countofanswer}}</b-table-column>
          <b-table-column filed="countofquetion" label="総数" centered>{{props.row.countofquetion}}</b-table-column>
          <b-table-column filed="paranswer" label="正答率" numeric>{{props.row.paranswer}}％</b-table-column>
        </template>
      </b-table>
    </b-collapse>
  </div>
</template>

<script>
import keypad from "./keypad.vue";
export default {
  name: "binary",
  components: { keypad },
  data() {
    return {
      num: "",
      quetion: "3",
      respond: "",
      responded: "",
      answer: 0,
      doAnswer: "true",
      success: "false",
      countofquetion: "1",
      countofanswer: "0",
      countoffail: "0",
      paranswer: "0",
      data: []
    };
  },
  methods: {
    init: function() {
      for (let i = 0; i < 9; i++) {
        this.data.push({
          bit: this.createBit(i),
          sum: this.transBitToNum(this.createBit(i)),
          countofanswer: 0,
          countofquetion: 0,
          paranswer: 0
        });
      }
      this.initBinary();
    },
    initBinary: function() {
      const min = Math.ceil(0);
      const max = Math.floor(9);
      this.num = Math.floor(Math.random() * (max - min)) + min;
      this.quetion = this.createBit(this.num);
      this.answer = this.transBitToNum(this.quetion);
      this.respond = "";
    },
    checkAnswer: function() {
      this.responded = this.valdNum(this.respond);
      this.doAnswer = false;
      if (parseInt(this.responded) == this.answer) {
        this.success = true;
        this.countofanswer = parseInt(this.countofanswer) + 1;
        this.data[this.num].countofanswer =
          parseInt(this.data[this.num].countofanswer) + 1;
      } else {
        this.success = false;
        this.countoffail = parseInt(this.countoffail) + 1;
      }
      this.data[this.num].countofquetion =
        parseInt(this.data[this.num].countofquetion) + 1;
      this.data[this.num].paranswer = this.calcPar(
        this.data[this.num].countofanswer,
        this.data[this.num].countofquetion
      );
      this.calcParAnswer();
    },
    nextQuetion: function() {
      this.initBinary();
      this.doAnswer = true;
      this.countofquetion = parseInt(this.countofquetion) + 1;
    },
    nextPage: function() {
      if (this.doAnswer) {
        this.checkAnswer();
      } else {
        this.nextQuetion();
      }
    },
    calcParAnswer: function() {
      this.paranswer = this.calcPar(this.countofanswer, this.countofquetion);
    },
    createBit: function(num) {
      let result = "";
      for (let i = 0; i < 8; i++) {
        if (i < num) {
          result = "" + result + "1";
        } else {
          result = "" + result + "0";
        }
      }
      return result;
    },
    transBitToNum: function(bit) {
      return parseInt(bit, 2);
    },
    calcPar: function(num, all) {
      num = parseInt(num);
      all = parseInt(all);
      return Math.round((num / all) * 1000) / 10;
    },
    valdNum: function(num) {
      if (!isNaN(num)) {
        if (parseInt(num) >= 0) {
          return parseInt(num);
        } else {
          return parseInt(-1 * num);
        }
      } else {
        return parseInt(0);
      }
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.init();
    });
  }
};
</script>