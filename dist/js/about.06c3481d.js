(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"2bee":function(e,t,n){"use strict";n("b31d")},"525f":function(e,t,n){},b31d:function(e,t,n){},b5a1:function(e,t,n){"use strict";n("525f")},f820:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c={class:"container"};function l(e,t,n,l,u,b){var a=Object(r["A"])("CreateAnime");return Object(r["t"])(),Object(r["e"])("div",c,[Object(r["i"])(a)])}n("b0c0"),n("a4d3"),n("e01a");var u=Object(r["h"])(" /*eventi submit prevent nuk e bon reload faqen mas submiti */ "),b=Object(r["f"])("label",null,"Emri i Animes",-1),a=Object(r["f"])("br",null,null,-1),o=Object(r["f"])("label",null,"Year",-1),i=Object(r["f"])("br",null,null,-1),f=Object(r["f"])("label",null,"Description",-1),j=["onUpdate:modelValue","value"],O=["onUpdate:modelValue","value"],m=Object(r["f"])("label",null,"Vlersimi",-1),s=Object(r["f"])("br",null,null,-1),d=Object(r["f"])("label",null,"Image hala su ndreq",-1),p=Object(r["f"])("br",null,null,-1),v=Object(r["f"])("br",null,null,-1),y=Object(r["f"])("button",{type:"submit"},"Create Anime",-1),g=Object(r["f"])("br",null,null,-1),A=Object(r["f"])("br",null,null,-1),h=Object(r["f"])("br",null,null,-1),k=Object(r["f"])("br",null,null,-1),w=Object(r["f"])("br",null,null,-1);function C(e,t,n,c,l,C){var S=Object(r["A"])("AnimeList");return Object(r["t"])(),Object(r["e"])("div",null,[u,Object(r["f"])("form",{onSubmit:t[5]||(t[5]=Object(r["L"])((function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),["prevent"]))},[b,Object(r["J"])(Object(r["f"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.form.name=e}),required:""},null,512),[[r["G"],c.form.name]]),a,o,Object(r["J"])(Object(r["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.form.year=e})},null,512),[[r["G"],c.form.year]]),i,f,Object(r["J"])(Object(r["f"])("textarea",{class:"form-control","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.form.description=e}),required:"",rows:"3"},"\r\n      ",512),[[r["G"],c.form.description]]),(Object(r["t"])(!0),Object(r["e"])(r["a"],null,Object(r["z"])(c.genres,(function(e){return Object(r["t"])(),Object(r["e"])("div",{key:e},[Object(r["J"])(Object(r["f"])("input",{type:"checkbox","onUpdate:modelValue":function(e){return c.form.genre=e},value:e},null,8,j),[[r["E"],c.form.genre]]),Object(r["f"])("label",null,Object(r["C"])(e),1)])})),128)),(Object(r["t"])(!0),Object(r["e"])(r["a"],null,Object(r["z"])(c.types,(function(e){return Object(r["t"])(),Object(r["e"])("div",{key:e},[Object(r["J"])(Object(r["f"])("input",{type:"radio","onUpdate:modelValue":function(e){return c.form.type=e},value:e},null,8,O),[[r["F"],c.form.type]]),Object(r["f"])("label",null,Object(r["C"])(e),1)])})),128)),m,Object(r["J"])(Object(r["f"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.form.rating=e}),required:""},null,512),[[r["G"],c.form.rating]]),s,d,Object(r["f"])("input",{type:"file",onChange:t[4]||(t[4]=function(){return c.fileSelected&&c.fileSelected.apply(c,arguments)})},null,32),p,v,y],32),g,A,h,k,w,Object(r["i"])(S)])}var S=n("5530"),V=n("1da1"),J=(n("96cf"),n("4e82"),Object(r["f"])("button",null,"Profile",-1)),U=["onClick"],q=Object(r["f"])("i",{class:"bi bi-pencil-square"},"Delete",-1),x=[q];function G(e,t,n,c,l,u){var b=Object(r["A"])("router-link");return Object(r["t"])(),Object(r["e"])("div",null,[(Object(r["t"])(!0),Object(r["e"])(r["a"],null,Object(r["z"])(c.animes.sort((function(e,t){return t.name-e.name})),(function(e){var t=e.id,n=e.name,l=e.year;return Object(r["t"])(),Object(r["e"])("div",{key:t},[Object(r["h"])(Object(r["C"])(n)+" ",1),Object(r["f"])("strong",null,Object(r["C"])(l),1),Object(r["i"])(b,{to:"/anime/".concat(t)},{default:Object(r["I"])((function(){return[J]})),_:2},1032,["to"]),Object(r["f"])("button",{onClick:function(e){return c.deleteAnime(t)}},x,8,U)])})),128))])}var z=n("655f"),D={setup:function(){var e=Object(z["c"])();return{animes:e,deleteAnime:z["b"]}}},I=(n("2bee"),n("6b0d")),L=n.n(I);const R=L()(D,[["render",G]]);var _=R,E={setup:function(){var e=Object(r["x"])({name:"",year:"",description:"",genre:[],characters:[]}),t="",n=function(){var t=Object(V["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(z["a"])(Object(S["a"])({},e));case 2:e.name="",e.year="",e.description="",e.genre=[];case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(e){t=e.target.files[0],console.log(t)},l=["Adventure","Romance","Action","Drama","Fantasy","Comedy","Mystery","Supernatural"],u=["Movie","Tv Show"];return{form:e,onSubmit:n,numbers:[3,4],fileSelected:c,genres:l,types:u}},components:{AnimeList:_}};const F=L()(E,[["render",C]]);var M=F,P={components:{CreateAnime:M}};n("b5a1");const T=L()(P,[["render",l],["__scopeId","data-v-b69466b2"]]);t["default"]=T}}]);
//# sourceMappingURL=about.06c3481d.js.map