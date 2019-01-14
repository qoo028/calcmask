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
          <div class="level">
          <p class="title has-text-success" v-if="success"><b-icon pack="far" icon="circle" type="is-success" size="is-small"></b-icon>  2<sup>{{quetion}}</sup> = {{respond}}</p>
          <p class="title has-text-danger" v-else><b-icon pack="fas" icon="times" type="is-danger" size="is-small"></b-icon> 2<sup>{{quetion}}</sup> ≠ {{respond}}</p>
        </div>

        <button class="button is-medium is is-fullwidth" @click="nextQuetion">Next</button>
      </div>
      <div class="level"></div>
      <b-collapse :open="false">
        <button class="button is-fullwidth is-white"  slot="trigger">詳細</button>
          <b-table :data="data" :narrowed="true" :mobile-cards="false">
            <template slot-scope="props">
              <b-table-column filed="num" label="乗">
                2
                <sup>{{props.row.num}}</sup>
              </b-table-column>
              <b-table-column filed="sum" label="値" numeric>{{props.row.sum}}</b-table-column>
              <b-table-column
                filed="countofanswer"
                label="正答数"
                centered
              >{{props.row.countofanswer}}</b-table-column>
              <b-table-column
                filed="countofquetion"
                label="総数"
                centered
              >{{props.row.countofquetion}}</b-table-column>
              <b-table-column filed="paranswer" label="正答率" numeric>{{props.row.paranswer}}％</b-table-column>
            </template>
          </b-table>
      </b-collapse>
  </div>
</template>

<script>
export default {
  name: "multi",
  data() {
    return {
      quetion: 0,
      respond: "",
      answer: 0,
      doAnswer: "true",
      success:'false',
      countofquetion: "1",
      countofanswer: "0",
      countoffail: "0",
      paranswer: "0",
      data: []
    };
  },
  methods: {
    init: function() {
      for (let i = 0; i < 11; i++) {
        this.data.push({
          num: i,
          sum: 2 ** i,
          countofanswer: 0,
          countofquetion: 0,
          paranswer: 0
        });
      }
      this.initMulti();
    },
    initMulti: function() {
      const min = Math.ceil(0);
      const max = Math.floor(11);
      this.quetion = Math.floor(Math.random() * (max - min)) + min;
      this.answer = 2 ** this.quetion;
      this.respond = "";
    },
    checkAnswer: function() {
      this.doAnswer = false;
      if (parseInt(this.respond) === this.answer) {
        this.success= true
        this.countofanswer = parseInt(this.countofanswer) + 1;
        this.data[this.quetion].countofanswer =
          parseInt(this.data[this.quetion].countofanswer) + 1;
      } else {
          this.success= false
        this.countoffail = parseInt(this.countoffail) + 1;
      }
      this.data[this.quetion].countofquetion =
        parseInt(this.data[this.quetion].countofquetion) + 1;
      this.data[this.quetion].paranswer = this.calcPar(
        this.data[this.quetion].countofanswer,
        this.data[this.quetion].countofquetion
      );
      this.calcParAnswer();
    },
    nextQuetion: function() {
      this.initMulti();
      this.doAnswer = true;
      this.countofquetion = parseInt(this.countofquetion) + 1;
    },
    calcParAnswer: function() {
      this.paranswer = this.calcPar(this.countofanswer, this.countofquetion);
    },
    calcPar: function(num, all) {
      num = parseInt(num);
      all = parseInt(all);
      return Math.round((num / all) * 1000) / 10;
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.init();
    });
  }
};
</script>