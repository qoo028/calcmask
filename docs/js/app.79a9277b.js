(function(t){function e(e){for(var i,o,r=e[0],l=e[1],u=e[2],d=0,h=[];d<r.length;d++)o=r[d],n[o]&&h.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(e);while(h.length)h.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,r=1;r<s.length;r++){var l=s[r];0!==n[l]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},n={app:0},a=[];function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/calcmask/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var i=s("64a9"),n=s.n(i);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var i=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"level"},[s("div",{staticClass:"level-item title has-text-grey-darker"},[t._v(t._s(t.title))])]),s("b-tabs",{staticClass:"block",attrs:{position:"is-centered"}},[s("b-tab-item",{attrs:{label:"乗数"}},[s("multi")],1),s("b-tab-item",{attrs:{label:"ビット"}},[s("binary")],1)],1)],1)},a=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"multi"},[s("div",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading has-text-grey-light"},[t._v("現在の問題数")]),s("p",{staticClass:"subtitle has-text-grey"},[t._v(t._s(t.countofquetion))])])]),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading has-text-grey-light"},[t._v("正解数")]),s("p",{staticClass:"subtitle has-text-grey"},[t._v(t._s(t.countofanswer))])])]),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading has-text-grey-light"},[t._v("不正解数")]),s("p",{staticClass:"subtitle has-text-grey"},[t._v(t._s(t.countoffail))])])]),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading has-text-grey-light"},[t._v("正答率")]),s("p",{staticClass:"subtitle has-text-grey"},[t._v(t._s(t.paranswer)+"%")])])])]),t.doAnswer?s("div",[s("div",{staticClass:"level"},[s("div",{staticClass:"level-item"},[s("p",{staticClass:"title has-text-grey-darker"},[t._v("\n            2\n            "),s("sup",[t._v(t._s(t.quetion))]),t._v(" = ？\n          ")])])]),s("div",{staticClass:"level"},[s("div",{staticClass:"level"},[s("div",{staticClass:"level-item title has-text-grey-darker"},[s("div",{staticClass:"field has-addons is-fullwidth"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.respond,expression:"respond"}],staticClass:"input is-medium",attrs:{type:"number",placeholder:"Answer",autofocus:""},domProps:{value:t.respond},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.checkAnswer(e):null},input:function(e){e.target.composing||(t.respond=e.target.value)}}})]),s("div",{staticClass:"control"},[s("button",{staticClass:"button is-medium",on:{click:t.checkAnswer}},[t._v("return")])])])])])])]):s("div",[s("div",{staticClass:"level"},[t.success?s("p",{staticClass:"title has-text-success"},[s("b-icon",{attrs:{pack:"far",icon:"circle",type:"is-success",size:"is-small"}}),t._v("  2"),s("sup",[t._v(t._s(t.quetion))]),t._v(" = "+t._s(t.respond))],1):s("p",{staticClass:"title has-text-danger"},[s("b-icon",{attrs:{pack:"fas",icon:"times",type:"is-danger",size:"is-small"}}),t._v(" 2"),s("sup",[t._v(t._s(t.quetion))]),t._v(" ≠ "+t._s(t.respond))],1)]),s("button",{staticClass:"button is-medium is is-fullwidth",on:{click:t.nextQuetion}},[t._v("Next")])]),s("div",{staticClass:"level"}),s("b-collapse",{attrs:{open:!1}},[s("button",{staticClass:"button is-fullwidth is-white",attrs:{slot:"trigger"},slot:"trigger"},[t._v("詳細")]),s("b-table",{attrs:{data:t.data,narrowed:!0,"mobile-cards":!1},scopedSlots:t._u([{key:"default",fn:function(e){return[s("b-table-column",{attrs:{filed:"num",label:"乗"}},[t._v("\n              2\n              "),s("sup",[t._v(t._s(e.row.num))])]),s("b-table-column",{attrs:{filed:"sum",label:"値",numeric:"true"}},[t._v(t._s(e.row.sum))]),s("b-table-column",{attrs:{filed:"countofanswer",label:"正答数",centered:"true"}},[t._v(t._s(e.row.countofanswer))]),s("b-table-column",{attrs:{filed:"countofquetion",label:"総数",centered:"true"}},[t._v(t._s(e.row.countofquetion))]),s("b-table-column",{attrs:{filed:"paranswer",label:"正答率",numeric:"true"}},[t._v(t._s(e.row.paranswer)+"％")])]}}])})],1)],1)},r=[],l=s("e814"),u=s.n(l),c={name:"multi",data:function(){return{quetion:0,respond:"",answer:0,doAnswer:"true",success:"false",countofquetion:"1",countofanswer:"0",countoffail:"0",paranswer:"0",data:[]}},methods:{init:function(){for(var t=0;t<11;t++)this.data.push({num:t,sum:Math.pow(2,t),countofanswer:0,countofquetion:0,paranswer:0});this.initMulti()},initMulti:function(){var t=Math.ceil(0),e=Math.floor(11);this.quetion=Math.floor(Math.random()*(e-t))+t,this.answer=Math.pow(2,this.quetion),this.respond=""},checkAnswer:function(){this.doAnswer=!1,u()(this.respond)===this.answer?(this.success=!0,this.countofanswer=u()(this.countofanswer)+1,this.data[this.quetion].countofanswer=u()(this.data[this.quetion].countofanswer)+1):(this.success=!1,this.countoffail=u()(this.countoffail)+1),this.data[this.quetion].countofquetion=u()(this.data[this.quetion].countofquetion)+1,this.data[this.quetion].paranswer=this.calcPar(this.data[this.quetion].countofanswer,this.data[this.quetion].countofquetion),this.calcParAnswer()},nextQuetion:function(){this.initMulti(),this.doAnswer=!0,this.countofquetion=u()(this.countofquetion)+1},calcParAnswer:function(){this.paranswer=this.calcPar(this.countofanswer,this.countofquetion)},calcPar:function(t,e){return t=u()(t),e=u()(e),Math.round(t/e*1e3)/10}},mounted:function(){this.$nextTick(function(){this.init()})}},d=c,h=s("2877"),f=Object(h["a"])(d,o,r,!1,null,null,null);f.options.__file="multi.vue";var v=f.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"multi"},[s("div",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading has-text-grey-light"},[t._v("現在の問題数")]),s("p",{staticClass:"subtitle has-text-grey"},[t._v(t._s(t.countofquetion))])])]),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading has-text-grey-light"},[t._v("正解数")]),s("p",{staticClass:"subtitle has-text-grey"},[t._v(t._s(t.countofanswer))])])]),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading has-text-grey-light"},[t._v("不正解数")]),s("p",{staticClass:"subtitle has-text-grey"},[t._v(t._s(t.countoffail))])])]),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading has-text-grey-light"},[t._v("正答率")]),s("p",{staticClass:"subtitle has-text-grey"},[t._v(t._s(t.paranswer)+"%")])])])]),t.doAnswer?s("div",[s("div",{staticClass:"level"},[s("div",{staticClass:"level-item"},[s("p",{staticClass:"title has-text-grey-darker"},[t._v("\n            2\n            "),s("sup",[t._v(t._s(t.quetion))]),t._v(" = ？\n          ")])])]),s("div",{staticClass:"level"},[s("div",{staticClass:"level"},[s("div",{staticClass:"level-item title has-text-grey-darker"},[s("div",{staticClass:"field has-addons is-fullwidth"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.respond,expression:"respond"}],staticClass:"input is-medium",attrs:{type:"number",placeholder:"Answer",autofocus:""},domProps:{value:t.respond},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.checkAnswer(e):null},input:function(e){e.target.composing||(t.respond=e.target.value)}}})]),s("div",{staticClass:"control"},[s("button",{staticClass:"button is-medium",on:{click:t.checkAnswer}},[t._v("return")])])])])])])]):s("div",[s("div",{staticClass:"level"},[t.success?s("p",{staticClass:"title has-text-success"},[s("b-icon",{attrs:{pack:"far",icon:"circle",type:"is-success",size:"is-small"}}),t._v("  2"),s("sup",[t._v(t._s(t.quetion))]),t._v(" = "+t._s(t.respond))],1):s("p",{staticClass:"title has-text-danger"},[s("b-icon",{attrs:{pack:"fas",icon:"times",type:"is-danger",size:"is-small"}}),t._v(" 2"),s("sup",[t._v(t._s(t.quetion))]),t._v(" ≠ "+t._s(t.respond))],1)]),s("button",{staticClass:"button is-medium is is-fullwidth",on:{click:t.nextQuetion}},[t._v("Next")])]),s("div",{staticClass:"level"}),s("b-collapse",{attrs:{open:!1}},[s("button",{staticClass:"button is-fullwidth is-white",attrs:{slot:"trigger"},slot:"trigger"},[t._v("詳細")]),s("b-table",{attrs:{data:t.data,narrowed:!0,"mobile-cards":!1},scopedSlots:t._u([{key:"default",fn:function(e){return[s("b-table-column",{attrs:{filed:"num",label:"乗"}},[t._v("\n              2\n              "),s("sup",[t._v(t._s(e.row.num))])]),s("b-table-column",{attrs:{filed:"sum",label:"値",numeric:"true"}},[t._v(t._s(e.row.sum))]),s("b-table-column",{attrs:{filed:"countofanswer",label:"正答数",centered:"true"}},[t._v(t._s(e.row.countofanswer))]),s("b-table-column",{attrs:{filed:"countofquetion",label:"総数",centered:"true"}},[t._v(t._s(e.row.countofquetion))]),s("b-table-column",{attrs:{filed:"paranswer",label:"正答率",numeric:"true"}},[t._v(t._s(e.row.paranswer)+"％")])]}}])})],1)],1)},b=[],m={name:"multi",data:function(){return{quetion:0,respond:"",answer:0,doAnswer:"true",success:"false",countofquetion:"1",countofanswer:"0",countoffail:"0",paranswer:"0",data:[]}},methods:{init:function(){for(var t=0;t<11;t++)this.data.push({num:t,sum:Math.pow(2,t),countofanswer:0,countofquetion:0,paranswer:0});this.initMulti()},initMulti:function(){var t=Math.ceil(0),e=Math.floor(11);this.quetion=Math.floor(Math.random()*(e-t))+t,this.answer=Math.pow(2,this.quetion),this.respond=""},checkAnswer:function(){this.doAnswer=!1,u()(this.respond)===this.answer?(this.success=!0,this.countofanswer=u()(this.countofanswer)+1,this.data[this.quetion].countofanswer=u()(this.data[this.quetion].countofanswer)+1):(this.success=!1,this.countoffail=u()(this.countoffail)+1),this.data[this.quetion].countofquetion=u()(this.data[this.quetion].countofquetion)+1,this.data[this.quetion].paranswer=this.calcPar(this.data[this.quetion].countofanswer,this.data[this.quetion].countofquetion),this.calcParAnswer()},nextQuetion:function(){this.initMulti(),this.doAnswer=!0,this.countofquetion=u()(this.countofquetion)+1},calcParAnswer:function(){this.paranswer=this.calcPar(this.countofanswer,this.countofquetion)},calcPar:function(t,e){return t=u()(t),e=u()(e),Math.round(t/e*1e3)/10}},mounted:function(){this.$nextTick(function(){this.init()})}},_=m,w=Object(h["a"])(_,p,b,!1,null,null,null);w.options.__file="binary.vue";var C=w.exports,g={name:"app",components:{multi:v,binary:C},data:function(){return{title:"計算ドリル",currentTab:"multi",tabs:["multi","binary"]}},computed:{currentTabComponent:function(){return"tab-"+this.currentTab.toLowerCase()}}},y=g,x=(s("034f"),Object(h["a"])(y,n,a,!1,null,null,null));x.options.__file="App.vue";var q=x.exports,k=s("8a03"),M=s.n(k);s("5abe"),s("15f5"),s("b2a2");i["default"].config.productionTip=!1,i["default"].use(M.a,{defaultIconPack:"fas"}),new i["default"]({render:function(t){return t(q)}}).$mount("#app")},"64a9":function(t,e,s){}});
//# sourceMappingURL=app.79a9277b.js.map