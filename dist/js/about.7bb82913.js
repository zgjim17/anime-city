(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"2bee":function(e,t,n){"use strict";n("b31d")},"525f":function(e,t,n){},b31d:function(e,t,n){},b5a1:function(e,t,n){"use strict";n("525f")},f820:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c={class:"container"};function l(e,t,n,l,u,b){var a=Object(r["z"])("CreateAnime");return Object(r["s"])(),Object(r["e"])("div",c,[Object(r["i"])(a)])}n("b0c0"),n("a4d3"),n("e01a");var u=Object(r["h"])(" /*eventi submit prevent nuk e bon reload faqen mas submiti */ "),b=Object(r["f"])("label",null,"Emri i Animes",-1),a=Object(r["f"])("br",null,null,-1),o=Object(r["f"])("label",null,"Year",-1),i=Object(r["f"])("br",null,null,-1),f=Object(r["f"])("label",null,"Description",-1),j=["onUpdate:modelValue","value"],O=["onUpdate:modelValue","value"],s=Object(r["f"])("label",null,"Vlersimi",-1),m=Object(r["f"])("br",null,null,-1),d=Object(r["f"])("label",null,"Image hala su ndreq",-1),p=Object(r["f"])("br",null,null,-1),v=Object(r["f"])("br",null,null,-1),y=Object(r["f"])("button",{type:"submit"},"Create Anime",-1),g=Object(r["f"])("br",null,null,-1),w=Object(r["f"])("br",null,null,-1),h=Object(r["f"])("br",null,null,-1),k=Object(r["f"])("br",null,null,-1),A=Object(r["f"])("br",null,null,-1);function S(e,t,n,c,l,S){var V=Object(r["z"])("AnimeList");return Object(r["s"])(),Object(r["e"])("div",null,[u,Object(r["f"])("form",{onSubmit:t[5]||(t[5]=Object(r["K"])((function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),["prevent"]))},[b,Object(r["I"])(Object(r["f"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.form.name=e}),required:""},null,512),[[r["F"],c.form.name]]),a,o,Object(r["I"])(Object(r["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.form.year=e})},null,512),[[r["F"],c.form.year]]),i,f,Object(r["I"])(Object(r["f"])("textarea",{class:"form-control","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.form.description=e}),required:"",rows:"3"},"\r\n      ",512),[[r["F"],c.form.description]]),(Object(r["s"])(!0),Object(r["e"])(r["a"],null,Object(r["y"])(c.genres,(function(e){return Object(r["s"])(),Object(r["e"])("div",{key:e},[Object(r["I"])(Object(r["f"])("input",{type:"checkbox","onUpdate:modelValue":function(e){return c.form.genre=e},value:e},null,8,j),[[r["D"],c.form.genre]]),Object(r["f"])("label",null,Object(r["B"])(e),1)])})),128)),(Object(r["s"])(!0),Object(r["e"])(r["a"],null,Object(r["y"])(c.types,(function(e){return Object(r["s"])(),Object(r["e"])("div",{key:e},[Object(r["I"])(Object(r["f"])("input",{type:"radio","onUpdate:modelValue":function(e){return c.form.type=e},value:e},null,8,O),[[r["E"],c.form.type]]),Object(r["f"])("label",null,Object(r["B"])(e),1)])})),128)),s,Object(r["I"])(Object(r["f"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.form.rating=e}),required:""},null,512),[[r["F"],c.form.rating]]),m,d,Object(r["f"])("input",{type:"file",onChange:t[4]||(t[4]=function(){return c.fileSelected&&c.fileSelected.apply(c,arguments)})},null,32),p,v,y],32),g,w,h,k,A,Object(r["i"])(V)])}var V=n("5530"),I=n("1da1"),U=(n("96cf"),n("4e82"),Object(r["f"])("button",null,"Profile",-1)),C=["onClick"],q=Object(r["f"])("i",{class:"bi bi-pencil-square"},"Delete",-1),F=[q];function x(e,t,n,c,l,u){var b=Object(r["z"])("router-link");return Object(r["s"])(),Object(r["e"])("div",null,[(Object(r["s"])(!0),Object(r["e"])(r["a"],null,Object(r["y"])(c.animes.sort((function(e,t){return t.name-e.name})),(function(e){var t=e.id,n=e.name,l=e.year;return Object(r["s"])(),Object(r["e"])("div",{key:t},[Object(r["h"])(Object(r["B"])(n)+" ",1),Object(r["f"])("strong",null,Object(r["B"])(l),1),Object(r["i"])(b,{to:"/anime/".concat(t)},{default:Object(r["H"])((function(){return[U]})),_:2},1032,["to"]),Object(r["f"])("button",{onClick:function(e){return c.deleteAnime(t)}},F,8,C)])})),128))])}var B=n("655f"),D={setup:function(){var e=Object(B["c"])();return{animes:e,deleteAnime:B["b"]}}},z=(n("2bee"),n("6b0d")),R=n.n(z);const _=R()(D,[["render",x]]);var E=_,J={setup:function(){var e=Object(r["w"])({name:"",year:"",description:"",genre:[],characters:[]}),t="",n=function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(B["a"])(Object(V["a"])({},e));case 2:e.name="",e.year="",e.description="",e.genre=[];case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(e){t=e.target.files[0],console.log(t)},l=["Adventure","Romance","Action","Drama","Fantasy","Comedy","Mystery","Supernatural"],u=["Movie","Tv Show"];return{form:e,onSubmit:n,numbers:[3,4],fileSelected:c,genres:l,types:u}},components:{AnimeList:E}};const L=R()(J,[["render",S]]);var M=L,H={components:{CreateAnime:M}};n("b5a1");const K=R()(H,[["render",l],["__scopeId","data-v-b69466b2"]]);t["default"]=K}}]);
//# sourceMappingURL=about.7bb82913.js.map