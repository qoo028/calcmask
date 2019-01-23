<template>
  <div>
    <div class="columns is-mobile">
      <div class="column button is-large" @click="send">
          <div class="level is-mobile">
              <div class="level-item"><p class="has-text-right">{{input}}</p></div>
              
              <div class="level-right"><div class="level-item"><p class="is-size-6 has-text-grey	">次へ</p></div></div>
              
          
          </div>
      </div>
    </div>
    <div class="columns is-mobile">
      <a class="column button is-large" @click="add(1)">1</a>
      <a class="column button is-large" @click="add(2)">2</a>
      <a class="column button is-large" @click="add(3)">3</a>
    </div>
    <div class="columns is-mobile">
      <div class="column button is-large" @click="add(4)">4</div>
      <div class="column button is-large" @click="add(5)">5</div>
      <div class="column button is-large" @click="add(6)">6</div>
    </div>
    <div class="columns is-mobile">
      <div class="column button is-large" @click="add(7)">7</div>
      <div class="column button is-large" @click="add(8)">8</div>
      <div class="column button is-large" @click="add(9)">9</div>
    </div>
    <div class="columns is-mobile">
      <div class="column is-large"></div>
      <div class="column button is-large" @click="add(0)">0</div>
      <div class="column button is-large" @click="backspace">
        <b-icon pack="fas" icon="backspace" size="is-small"></b-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "keypad",
  props:['input'],

  methods: {
    add: function(num) {
      this.sendinput(this.input + "" + num);
    },
    backspace: function() {
      this.sendinput(this.input.slice(0, this.input.length - 1));
    },
    delete: function() {
      this.input = "";
    },
    sendinput: function(str) {
      this.$parent.respond = str;
    },
    send: function() {
      this.$emit("send");
    }
  }
};
</script>
