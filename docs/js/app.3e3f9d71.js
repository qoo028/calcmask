(function(t){function e(e){for(var n,o,r=e[0],l=e[1],u=e[2],d=0,v=[];d<r.length;d++)o=r[d],i[o]&&v.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(v.length)v.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],n=!0,r=1;r<s.length;r++){var l=s[r];0!==i[l]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},i={app:0},a=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/calcmask/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("64a9"),i=s.n(n);i.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var n=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"level"},[s("div",{staticClass:"level-item title has-text-grey-darker"},[t._v(t._s(t.title))])]),s("b-tabs",{staticClass:"block",attrs:{position:"is-centered"}},[s("b-tab-item",{attrs:{label:"乗数"}},[s("multi")],1),s("b-tab-item",{attrs:{label:"ビット"}},[s("binary")],1)],1)],1)},a=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"multi"},[s("div",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading has-text-grey-light"},[t._v("現在の問題数")]),s("p",{staticClass:"subtitle has-text-grey"},[t._v(t._s(t.countofquetion))])])]),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading has-text-grey-light"},[t._v("正解数")]),s("p",{staticClass:"subtitle has-text-grey"},[t._v(t._s(t.countofanswer))])])]),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading has-text-grey-light"},[t._v("不正解数")]),s("p",{staticClass:"subtitle has-text-grey"},[t._v(t._s(t.countoffail))])])]),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading has-text-grey-light"},[t._v("正答率")]),s("p",{staticClass:"subtitle has-text-grey"},[t._v(t._s(t.paranswer)+"%")])])])]),t.doAnswer?s("div",[s("div",{staticClass:"level"},[t._v("下記の値を計算せよ")]),s("div",{staticClass:"level"},[s("div",{staticClass:"level-item"},[s("p",{staticClass:"title has-text-grey-darker"},[t._v("\n          2\n          "),s("sup",[t._v(t._s(t.quetion))]),t._v(" = \n        ")])])]),s("div",{staticClass:"level"},[s("div",{staticClass:"level-item title has-text-grey-darker"},[s("div",{staticClass:"field has-addons is-fullwidth"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.respond,expression:"respond"}],staticClass:"input is-medium",attrs:{type:"number",placeholder:"Answer",autofocus:""},domProps:{value:t.respond},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.checkAnswer(e):null},input:function(e){e.target.composing||(t.respond=e.target.value)}}})]),s("div",{staticClass:"control"},[s("button",{staticClass:"button is-medium",on:{click:t.checkAnswer}},[t._v("回答")])])])])])]):s("div",[s("div",{staticClass:"level"},[t._v("答えは")]),s("div",{staticClass:"level"},[t.success?s("p",{staticClass:"title has-text-success"},[t._v("\n        2\n        "),s("sup",[t._v(t._s(t.quetion))]),t._v("\n        = "+t._s(t.answer)+"\n      ")]):s("p",{staticClass:"title has-text-danger"},[t._v("\n        2\n        "),s("sup",[t._v(t._s(t.quetion))]),t._v("\n        ＝ "+t._s(t.answer)+"\n      ")])]),s("div",{staticClass:"level"},[s("div",{staticClass:"level-item title has-text-grey-darker"},[s("div",{staticClass:"field has-addons is-fullwidth"},[s("div",{staticClass:"control"},[t.success?s("input",{directives:[{name:"model",rawName:"v-model",value:t.responded,expression:"responded"}],staticClass:"input is-medium is-success",attrs:{type:"number",placeholder:"Answer",autofocus:""},domProps:{value:t.responded},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.nextQuetion(e):null},input:function(e){e.target.composing||(t.responded=e.target.value)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.responded,expression:"responded"}],staticClass:"input is-medium is-danger",attrs:{type:"number",placeholder:"Answer",autofocus:""},domProps:{value:t.responded},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.nextQuetion(e):null},input:function(e){e.target.composing||(t.responded=e.target.value)}}})]),s("div",{staticClass:"control"},[s("button",{staticClass:"button is-medium",on:{click:t.nextQuetion}},[t._v("次へ")])])])])])]),s("div",{staticClass:"level"}),s("b-collapse",{attrs:{open:!1}},[s("button",{staticClass:"button is-fullwidth is-white",attrs:{slot:"trigger"},slot:"trigger"},[t._v("詳細")]),s("b-table",{attrs:{data:t.data,narrowed:!0,"mobile-cards":!1},scopedSlots:t._u([{key:"default",fn:function(e){return[s("b-table-column",{attrs:{filed:"num",label:"乗"}},[t._v("\n          2\n          "),s("sup",[t._v(t._s(e.row.num))])]),s("b-table-column",{attrs:{filed:"sum",label:"値",numeric:""}},[t._v(t._s(e.row.sum))]),s("b-table-column",{attrs:{filed:"countofanswer",label:"正答数",centered:""}},[t._v(t._s(e.row.countofanswer))]),s("b-table-column",{attrs:{filed:"countofquetion",label:"総数",centered:""}},[t._v(t._s(e.row.countofquetion))]),s("b-table-column",{attrs:{filed:"paranswer",label:"正答率",numeric:""}},[t._v(t._s(e.row.paranswer)+"％")])]}}])})],1)],1)},r=[],l=s("e814"),u=s.n(l),c={name:"multi",data:function(){return{quetion:0,respond:"",responded:"",answer:0,doAnswer:"true",success:"false",countofquetion:"1",countofanswer:"0",countoffail:"0",paranswer:"0",data:[]}},methods:{init:function(){for(var t=0;t<11;t++)this.data.push({num:t,sum:Math.pow(2,t),countofanswer:0,countofquetion:0,paranswer:0});this.initMulti()},initMulti:function(){var t=Math.ceil(0),e=Math.floor(11);this.quetion=Math.floor(Math.random()*(e-t))+t,this.answer=Math.pow(2,this.quetion),this.respond=""},checkAnswer:function(){this.responded=this.valdNum(this.respond),this.doAnswer=!1,u()(this.responded)===this.answer?(this.success=!0,this.countofanswer=u()(this.countofanswer)+1,this.data[this.quetion].countofanswer=u()(this.data[this.quetion].countofanswer)+1):(this.success=!1,this.countoffail=u()(this.countoffail)+1),this.data[this.quetion].countofquetion=u()(this.data[this.quetion].countofquetion)+1,this.data[this.quetion].paranswer=this.calcPar(this.data[this.quetion].countofanswer,this.data[this.quetion].countofquetion),this.calcParAnswer()},nextQuetion:function(){this.initMulti(),this.doAnswer=!0,this.countofquetion=u()(this.countofquetion)+1},calcParAnswer:function(){this.paranswer=this.calcPar(this.countofanswer,this.countofquetion)},calcPar:function(t,e){return t=u()(t),e=u()(e),Math.round(t/e*1e3)/10},valdNum:function(t){return isNaN(t)?u()(0):u()(t)>=0?u()(t):u()(-1*t)}},mounted:function(){this.$nextTick(function(){this.init()})}},d=c,v=s("2877"),h=Object(v["a"])(d,o,r,!1,null,null,null);h.options.__file="multi.vue";var p=h.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"multi"},[s("div",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading has-text-grey-light"},[t._v("現在の問題数")]),s("p",{staticClass:"subtitle has-text-grey"},[t._v(t._s(t.countofquetion))])])]),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading has-text-grey-light"},[t._v("正解数")]),s("p",{staticClass:"subtitle has-text-grey"},[t._v(t._s(t.countofanswer))])])]),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading has-text-grey-light"},[t._v("不正解数")]),s("p",{staticClass:"subtitle has-text-grey"},[t._v(t._s(t.countoffail))])])]),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading has-text-grey-light"},[t._v("正答率")]),s("p",{staticClass:"subtitle has-text-grey"},[t._v(t._s(t.paranswer)+"%")])])])]),t.doAnswer?s("div",[s("div",{staticClass:"level"},[t._v("下記の2進数を10進数に表せ")]),s("div",{staticClass:"level"},[s("div",{staticClass:"level-item"},[s("p",{staticClass:"title has-text-grey-darker"},[t._v(t._s(t.quetion))])])]),s("div",{staticClass:"level"},[s("div",{staticClass:"level"},[s("div",{staticClass:"level-item title has-text-grey-darker"},[s("div",{staticClass:"field has-addons is-fullwidth"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.respond,expression:"respond"}],staticClass:"input is-medium",attrs:{type:"number",placeholder:"Answer",autofocus:""},domProps:{value:t.respond},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.checkAnswer(e):null},input:function(e){e.target.composing||(t.respond=e.target.value)}}})]),s("div",{staticClass:"control"},[s("button",{staticClass:"button is-medium",on:{click:t.checkAnswer}},[t._v("return")])])])])])])]):s("div",[s("div",{staticClass:"level"},[t._v("答えは")]),s("div",{staticClass:"level"},[t.success?s("p",{staticClass:"title has-text-success"},[s("b-icon",{attrs:{pack:"far",icon:"circle",type:"is-success",size:"is-small"}}),t._v("\n        "+t._s(t.quetion)+" = "+t._s(t.answer)+"\n      ")],1):s("p",{staticClass:"title has-text-danger"},[s("b-icon",{attrs:{pack:"fas",icon:"times",type:"is-danger",size:"is-small"}}),t._v("\n        "+t._s(t.quetion)+" = "+t._s(t.answer)+"\n      ")],1)]),s("div",{staticClass:"level"},[s("div",{staticClass:"level-item title has-text-grey-darker"},[s("div",{staticClass:"field has-addons is-fullwidth"},[s("div",{staticClass:"control"},[t.success?s("input",{directives:[{name:"model",rawName:"v-model",value:t.responded,expression:"responded"}],staticClass:"input is-medium is-success",attrs:{type:"number",placeholder:"Answer",autofocus:""},domProps:{value:t.responded},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.nextQuetion(e):null},input:function(e){e.target.composing||(t.responded=e.target.value)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.responded,expression:"responded"}],staticClass:"input is-medium is-danger",attrs:{type:"number",placeholder:"Answer",autofocus:""},domProps:{value:t.responded},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.nextQuetion(e):null},input:function(e){e.target.composing||(t.responded=e.target.value)}}})]),s("div",{staticClass:"control"},[s("button",{staticClass:"button is-medium",on:{click:t.nextQuetion}},[t._v("次へ")])])])])])]),s("div",{staticClass:"level"}),s("b-collapse",{attrs:{open:!1}},[s("button",{staticClass:"button is-fullwidth is-white",attrs:{slot:"trigger"},slot:"trigger"},[t._v("詳細")]),s("b-table",{attrs:{data:t.data,narrowed:!0,"mobile-cards":!1},scopedSlots:t._u([{key:"default",fn:function(e){return[s("b-table-column",{attrs:{filed:"bit",label:"ビット",centered:""}},[t._v(t._s(e.row.bit))]),s("b-table-column",{attrs:{filed:"sum",label:"値",numeric:""}},[t._v(t._s(e.row.sum))]),s("b-table-column",{attrs:{filed:"countofanswer",label:"正答数",centered:""}},[t._v(t._s(e.row.countofanswer))]),s("b-table-column",{attrs:{filed:"countofquetion",label:"総数",centered:""}},[t._v(t._s(e.row.countofquetion))]),s("b-table-column",{attrs:{filed:"paranswer",label:"正答率",numeric:""}},[t._v(t._s(e.row.paranswer)+"％")])]}}])})],1)],1)},m=[],b={name:"multi",data:function(){return{num:"",quetion:"3",respond:"",responded:"",answer:0,doAnswer:"true",success:"false",countofquetion:"1",countofanswer:"0",countoffail:"0",paranswer:"0",data:[]}},methods:{init:function(){for(var t=0;t<9;t++)this.data.push({bit:this.createBit(t),sum:this.transBitToNum(this.createBit(t)),countofanswer:0,countofquetion:0,paranswer:0});this.initBinary()},initBinary:function(){var t=Math.ceil(0),e=Math.floor(9);this.num=Math.floor(Math.random()*(e-t))+t,this.quetion=this.createBit(this.num),this.answer=this.transBitToNum(this.quetion),this.respond=""},checkAnswer:function(){this.responded=this.valdNum(this.respond),this.doAnswer=!1,u()(this.responded)==this.answer?(this.success=!0,this.countofanswer=u()(this.countofanswer)+1,this.data[this.num].countofanswer=u()(this.data[this.num].countofanswer)+1):(this.success=!1,this.countoffail=u()(this.countoffail)+1),this.data[this.num].countofquetion=u()(this.data[this.num].countofquetion)+1,this.data[this.num].paranswer=this.calcPar(this.data[this.num].countofanswer,this.data[this.num].countofquetion),this.calcParAnswer()},nextQuetion:function(){this.initBinary(),this.doAnswer=!0,this.countofquetion=u()(this.countofquetion)+1},calcParAnswer:function(){this.paranswer=this.calcPar(this.countofanswer,this.countofquetion)},createBit:function(t){for(var e="",s=0;s<8;s++)e+=s<t?"1":"0";return e},transBitToNum:function(t){return u()(t,2)},calcPar:function(t,e){return t=u()(t),e=u()(e),Math.round(t/e*1e3)/10},valdNum:function(t){return isNaN(t)?u()(0):u()(t)>=0?u()(t):u()(-1*t)}},mounted:function(){this.$nextTick(function(){this.init()})}},w=b,_=Object(v["a"])(w,f,m,!1,null,null,null);_.options.__file="binary.vue";var C=_.exports,g={name:"app",components:{multi:p,binary:C},data:function(){return{title:"計算ドリル",currentTab:"multi",tabs:["multi","binary"]}},computed:{currentTabComponent:function(){return"tab-"+this.currentTab.toLowerCase()}}},y=g,x=(s("034f"),Object(v["a"])(y,i,a,!1,null,null,null));x.options.__file="App.vue";var k=x.exports,q=s("8a03"),A=s.n(q);s("5abe"),s("15f5"),s("b2a2");n["default"].config.productionTip=!1,n["default"].use(A.a,{defaultIconPack:"fas"}),new n["default"]({render:function(t){return t(k)}}).$mount("#app")},"64a9":function(t,e,s){}});
//# sourceMappingURL=app.3e3f9d71.js.map