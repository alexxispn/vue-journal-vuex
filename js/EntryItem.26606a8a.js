"use strict";(self["webpackChunkvue_journal_vuex"]=self["webpackChunkvue_journal_vuex"]||[]).push([[675],{1950:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var r=n(6252),s=n(3577);const a={class:"entry-title d-flex"},o={class:"text-success fs-5 fw-bold"},d={class:"mx-1 fs-5"},u={class:"mx-2 fw-light"},c={class:"entry-description"},i={class:"text-muted"};function y(t,e,n,y,h,l){return(0,r.wg)(),(0,r.iD)("div",{class:"entry-container mb-3 pointer p-2",onClick:e[0]||(e[0]=(...t)=>l.goToEntry&&l.goToEntry(...t))},[(0,r._)("div",a,[(0,r._)("span",o,(0,s.zw)(l.day),1),(0,r._)("span",d,(0,s.zw)(l.month),1),(0,r._)("span",u,(0,s.zw)(l.year)+", "+(0,s.zw)(l.weekday),1)]),(0,r._)("div",c,[(0,r._)("p",i,(0,s.zw)(l.shortText),1)])])}n(7658);var h=n(2350),l={name:"EntryItem",props:{entry:{type:Object,required:!0}},computed:{shortText(){return this.entry.text.length>130?this.entry.text.substr(0,130)+"...":this.entry.text},day(){const{day:t}=(0,h.Z)(this.entry.date);return t},month(){const{month:t}=(0,h.Z)(this.entry.date);return t},year(){const{year:t}=(0,h.Z)(this.entry.date);return t},weekday(){const{weekday:t}=(0,h.Z)(this.entry.date);return t}},methods:{goToEntry(){this.$router.push({name:"entry",params:{id:this.entry.id}})}}},p=n(3744);const m=(0,p.Z)(l,[["render",y],["__scopeId","data-v-31763d06"]]);var w=m}}]);
//# sourceMappingURL=EntryItem.26606a8a.js.map