(function(e){function t(t){for(var s,r,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},n={app:0},o=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"01ff":function(e,t,a){"use strict";a("8c74")},"034f":function(e,t,a){"use strict";a("85ec")},"079a":function(e,t,a){"use strict";a("5960")},"2b10":function(e,t,a){"use strict";a("4710")},"30f2":function(e,t,a){},4089:function(e,t,a){"use strict";a("30f2")},4710:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"overflow-hidden"},[a("v-app-bar",{attrs:{color:"grey",dark:"","shrink-on-scroll":"",src:"https://picsum.photos/1920/1080?random","scroll-target":"#scrolling-techniques-2"}},[a("v-app-bar-nav-icon"),a("v-toolbar-title",[a("v-text-field",{directives:[{name:"show",rawName:"v-show",value:!e.showOnHotel,expression:"!showOnHotel"}],attrs:{dark:"","prepend-icon":"mdi-map-search",type:"text",placeholder:"Search"},on:{change:e.filterHotel},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),""!=e.search?a("span",[e._v(" "+e._s(e.filterHotel.length)+" resultats ")]):e._e()],1),a("v-spacer"),a("v-btn",{on:{click:function(t){e.showOnHotel=!1}}},[e._v("Liste Hotels")]),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.user.id,expression:"!user.id"}],on:{click:function(t){e.showCompte=!e.showCompte}}},[e._v("Compte ")]),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.user.id,expression:"user.id"}],on:{click:function(t){return e.deconnect()}}},[e._v("deconnecter ")]),a("v-btn",{attrs:{icon:""}},[a("v-icon",[e._v("mdi-magnify")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[e._v("mdi-heart")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[e._v("mdi-dots-vertical")])],1)],1),a("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"scrolling-techniques-2","max-height":"600"}},[a("v-container",{staticStyle:{height:"1000px"}},[a("v-main",[e.user.id?e._e():a("div",{staticStyle:{"text-align":"center"}},[e.showCompte?a("div",[a("Compte"),a("v-btn",{staticClass:"text-align:center",on:{click:function(t){e.showCompte=!1}}},[e._v("reduire")])],1):e._e()]),"hotel"==e.user.role?a("div",[a("NewHotel")],1):e._e(),a("v-spacer"),a("v-sparkline"),e._l(e.filterHotel,(function(t,s){return a("div",{key:s,staticClass:"list_hotel"},[a("div",{staticStyle:{display:"inline-flex",margin:"4px"}},[e.showOnHotel?e._e():a("div",[a("Hotel",{attrs:{hotel:t}}),a("div",{staticStyle:{"background-color":"grey","text-align":"right","padding-right":"4px"}},[a("v-btn",{on:{click:function(a){(e.showOnHotel=!0)&&(e.temHotel=t)}}},[e._v("Show")])],1)],1)])])})),e.showOnHotel?a("div",[a("ShowOnHotel",{attrs:{hotel:e.temHotel}}),a("div",[a("v-btn",{on:{click:function(t){e.showOnHotel=!1}}},[e._v("Liste Hotels")])],1)],1):e._e()],2)],1)],1)],1)},o=[],r=(a("4de4"),a("caad"),a("b0c0"),a("ac1f"),a("2532"),a("841c"),a("5530")),i=a("2f62"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login",attrs:{id:"apps"}},[a("p",{staticClass:"error"},[e._v(e._s(e.datas.data?e.datas.data.error:""))]),a("v-card",{staticClass:"mx-auto mt-5",attrs:{width:"400"}},[a("v-card-title",[a("h3",[e._v(" "+e._s(e.isLogin?"Segning":"Segnup")+" ")])]),a("v-card-text",[e.isLogin?e._e():a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("v-subheader",[e._v(" Type de Compte ")])],1),a("v-col",{attrs:{cols:"6"}},[a("v-radio-group",{attrs:{column:""},model:{value:e.role,callback:function(t){e.role=t},expression:"role"}},e._l(e.items,(function(e,t){return a("v-radio",{key:t,attrs:{label:e.name,color:"red darken-3",value:e.value}})})),1)],1)],1),a("v-text-field",{attrs:{label:"Email","prepend-icon":"mdi-account-circle"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{type:"password",label:"Password","prepend-icon":"mdi-lock"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-card-actions",[a("v-spacer"),e.isLogin?a("v-btn",{on:{click:function(t){e.isLogin=!1}}},[e._v("Cree un Compte")]):e._e(),e.isLogin?e._e():a("v-btn",{on:{click:function(t){e.isLogin=!0}}},[e._v("Se Connecter")]),a("v-spacer"),e.isLogin?a("v-btn",{on:{click:function(t){return e.connect()}}},[e._v("Connecter")]):e._e(),e.isLogin?e._e():a("v-btn",{on:{click:function(t){return e.send()}}},[e._v(" Enregistrer ")])],1)],1)],1)],1)},l=[],u=(a("96cf"),a("1da1")),d=a("bc3a"),p=a.n(d),v={data:function(){return{isLogin:!0,email:"",role:"",password:"",items:[{name:"Client",value:"cleint"},{name:"Hotel",value:"hotel"}],data:[]}},computed:{datas:function(){return this.data}},methods:Object(r["a"])(Object(r["a"])({},Object(i["b"])({setUser:"setUser"})),{},{signup:function(){this.isLogin=!1},connect:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e.email,e.password),!e.password||!e.email){t.next=11;break}return a={email:e.email,password:e.password},t.next=5,p.a.post(e.$store.state.url+"v1/users/login",a,{headers:{"Content-Type":"application/json"}});case 5:s=t.sent,console.log("res",s),e.data=s,e.data.data.id&&(e.setUser(e.data.data),e.$cookies.set("user",JSON.stringify(e.data.data))),t.next=12;break;case 11:console("not send");case 12:case"end":return t.stop()}}),t)})))()},send:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e.email,e.password,e.role),console.log("Role",e.role),!e.password||!e.email){t.next=12;break}return a={email:e.email,role:e.role,password:e.password},t.next=6,p.a.post(e.$store.state.url+"v1/users",a,{headers:{"Content-Type":"application/json"}});case 6:s=t.sent,console.log("res",s),e.data=s,e.data.data.id&&(e.setUser(e.data.data),e.$cookies.set("user",JSON.stringify(e.data.data))),t.next=13;break;case 12:console("not send");case 13:case"end":return t.stop()}}),t)})))()},setStore:function(){}})},m=v,h=(a("f6cc"),a("2877")),f=a("6544"),g=a.n(f),b=a("8336"),x=a("b0af"),_=a("99d9"),w=a("62ad"),C=a("67b6"),k=a("43a6"),y=a("0fd9"),V=a("2fa4"),O=a("e0c7"),S=a("8654"),j=Object(h["a"])(m,c,l,!1,null,null,null),H=j.exports;g()(j,{VBtn:b["a"],VCard:x["a"],VCardActions:_["a"],VCardText:_["c"],VCardTitle:_["d"],VCol:w["a"],VRadio:C["a"],VRadioGroup:k["a"],VRow:y["a"],VSpacer:V["a"],VSubheader:O["a"],VTextField:S["a"]});var T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"container_hotel"},[a("div",{staticClass:"hotel"},[a("div",{staticClass:"name_hotel"},[a("v-card-title",[e._v(e._s(e.hotel.name))])],1),a("v-card-text",[a("v-card-subtitle",[a("span",{staticClass:"options"},[e._v(e._s(e.hotel.adress))]),a("v-spacer"),a("span",{staticClass:"options"},[e._v(e._s(e.hotel.specialty))])],1),a("v-img",{staticClass:"image_hotel",attrs:{src:e.hotel.photo,alt:"image100x100 "+e.hotel.photo}}),a("span",{staticClass:"options"},[e._v(e._s(e.hotel.prix)+" $")])],1)],1)])},$=[],E={props:["hotel"],components:{}},L=E,R=(a("d9c9"),a("adda")),N=Object(h["a"])(L,T,$,!1,null,null,null),U=N.exports;g()(N,{VCard:x["a"],VCardSubtitle:_["b"],VCardText:_["c"],VCardTitle:_["d"],VImg:R["a"],VSpacer:V["a"]});var M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",[a("v-card-title",[a("v-spacer"),a("v-btn",{on:{click:function(t){e.showFormulaire=!e.showFormulaire}}},[e._v("Cree un Hotel ")]),a("v-spacer")],1),a("v-card-text",[e.showFormulaire?a("div",[a("v-text-field",{attrs:{type:"text",placeholder:"Nom de l'Hotel"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-text-field",{attrs:{type:"text",placeholder:"Specialite"},model:{value:e.specialty,callback:function(t){e.specialty=t},expression:"specialty"}}),a("v-text-field",{attrs:{type:"text",placeholder:"Address"},model:{value:e.adress,callback:function(t){e.adress=t},expression:"adress"}}),a("v-text-field",{attrs:{type:"text",placeholder:"Prix"},model:{value:e.prix,callback:function(t){e.prix=t},expression:"prix"}}),a("v-text-field",{attrs:{type:"text",placeholder:"Url de l'Image de l'Hotel"},model:{value:e.photo,callback:function(t){e.photo=t},expression:"photo"}}),a("v-btn",{attrs:{color:"success"},on:{click:function(t){return e.save()}}},[e._v("Save")])],1):e._e()])],1)],1)},P=[],F={data:function(){return{showFormulaire:!1,name:"",specialty:"",prix:"",photo:"",adress:"",data:""}},computed:{},methods:{save:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.name&&e.specialty&&e.prix&&e.photo&&e.adress)){t.next=10;break}return a={name:e.name,specialty:e.specialty,prix:e.prix,photo:e.photo,adress:e.adress,user:e.$store.state.user.id},t.next=4,p.a.post(e.$store.state.url+"v1/hotels",a,{headers:{"Content-Type":"application/json"}});case 4:s=t.sent,console.log("res",s),e.data=s,e.data.data.id&&(e.$store.state.hotels.push(e.data.data),e.name="",e.specialty="",e.prix="",e.photo="",e.adress="",e.showFormulaire=!e.showFormulaire),t.next=11;break;case 10:console("not send");case 11:case"end":return t.stop()}}),t)})))()}}},I=F,A=(a("01ff"),a("a523")),B=Object(h["a"])(I,M,P,!1,null,null,null),q=B.exports;g()(B,{VBtn:b["a"],VCard:x["a"],VCardText:_["c"],VCardTitle:_["d"],VContainer:A["a"],VSpacer:V["a"],VTextField:S["a"]});var J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"text-align":"center",margin:"20px"}},[a("div",{staticClass:"container_h"},[a("v-card",{staticClass:"h"},[a("div",{staticClass:"name_h"},[a("v-card-title",[e._v(e._s(e.hotel.name))])],1),a("v-card-text",[a("v-card-subtitle",[a("span",{staticClass:"options"},[e._v(e._s(e.hotel.adress))]),a("v-spacer"),a("span",{staticClass:"options"},[e._v(e._s(e.hotel.specialty))])],1),a("v-img",{attrs:{src:e.hotel.photo,alt:"image100x100 "+e.hotel.photo}}),a("span",{staticClass:"prix"},[e._v(e._s(e.hotel.prix)+" $")]),e.user.id?a("SendMail",{attrs:{hotel:e.hotel}}):e._e(),a("ShowCommentsHotel",{attrs:{hotel:e.hotel}}),e.user.id?a("Comments",{attrs:{hotel:e.hotel}}):e._e()],1)],1),a("div")],1)])},D=[],G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-card",[a("v-card-text",[a("v-text-field",{attrs:{type:"text",placeholder:"Commentaire"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),a("v-spacer"),a("v-btn",{attrs:{color:"success"},on:{click:function(t){return e.send()}}},[e._v("Commenter")])],1)],1)],1)},W=[],z={props:["hotel"],data:function(){return{message:""}},methods:{send:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.message){t.next=10;break}return a={message:e.message,hotel:e.hotel.id,user:e.$store.state.user.id},t.next=4,p.a.post(e.$store.state.url+"v1/user_comment",a,{headers:{"Content-Type":"application/json"}});case 4:s=t.sent,console.log("res",s),e.data=s,e.data.data.id&&(e.$store.state.comments.push(e.data.data),e.message=""),t.next=11;break;case 10:console("not send");case 11:case"end":return t.stop()}}),t)})))()}}},K=z,Q=Object(h["a"])(K,G,W,!1,null,null,null),X=Q.exports;g()(Q,{VBtn:b["a"],VCard:x["a"],VCardText:_["c"],VSpacer:V["a"],VTextField:S["a"]});var Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"coms"},[a("label",{attrs:{for:"com"}},[e._v("Commentaires :")]),e._l(e.comments,(function(t,s){return a("v-list-item",{key:s,attrs:{id:"com"}},[a("v-list-item-content",[a("p",{staticClass:"text"},[e._v(" "+e._s(t.message)+" ")])])],1)})),a("p")],2)},Z=[],ee={props:["hotel"],computed:{comments:function(){var e=this,t=this.$store.state.comments,a=t.filter((function(t){return t.hotel_id===e.hotel.id}));return a}}},te=ee,ae=(a("2b10"),a("da13")),se=a("5d23"),ne=Object(h["a"])(te,Y,Z,!1,null,null,null),oe=ne.exports;g()(ne,{VCard:x["a"],VListItem:ae["a"],VListItemContent:se["a"]});var re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"reserve"},[a("label",{attrs:{for:"start"}},[e._v("date de la reservation:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],attrs:{type:"date",id:"start",value:"2021-07-22",min:"2020-01-01",required:""},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}}),a("label",{attrs:{for:"appt"}},[e._v("Heure :")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.heure,expression:"heure"}],attrs:{type:"time",id:"appt",required:""},domProps:{value:e.heure},on:{input:function(t){t.target.composing||(e.heure=t.target.value)}}}),a("v-btn",{attrs:{color:"info"},on:{click:function(t){return e.send()}}},[e._v("Envoyer")])],1),e._v(" "+e._s(e.message)+" ")])},ie=[],ce={props:["hotel"],data:function(){return{date:"",heure:"",message:""}},methods:{send:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.date||!e.heure){t.next=10;break}return a={date:e.date,heure:e.heure,user:e.$store.state.user,hotel:e.hotel},console.log(a),t.next=5,p.a.post(e.$store.state.url+"site/mail",a,{headers:{"Content-Type":"application/json"}});case 5:s=t.sent,e.message="Envoyer avec success",console.log("res",s),t.next=12;break;case 10:e.message="erreur",console("not send");case 12:case"end":return t.stop()}}),t)})))()}}},le=ce,ue=(a("079a"),Object(h["a"])(le,re,ie,!1,null,null,null)),de=ue.exports;g()(ue,{VBtn:b["a"]});var pe={props:["hotel"],computed:Object(r["a"])({},Object(i["c"])({user:"user"})),components:{Comments:X,ShowCommentsHotel:oe,SendMail:de}},ve=pe,me=(a("4089"),Object(h["a"])(ve,J,D,!1,null,null,null)),he=me.exports;g()(me,{VCard:x["a"],VCardSubtitle:_["b"],VCardText:_["c"],VCardTitle:_["d"],VImg:R["a"],VSpacer:V["a"]});var fe={name:"App",data:function(){return{message:"Hello World",showCompte:!1,showOnHotel:!1,temHotel:[],search:""}},components:{Hotel:U,Compte:H,NewHotel:q,ShowOnHotel:he},computed:Object(r["a"])(Object(r["a"])({},Object(i["c"])({hotels:"hotels",user:"user",comments:"comments"})),{},{filterHotel:function(){var e=this;if(""!=this.search){var t=this.hotels.filter((function(t){return t.name.toLowerCase().includes(e.search.toLowerCase())}));return console.log("recherche",t),t}return this.hotels}}),methods:Object(r["a"])(Object(r["a"])({},Object(i["b"])({setHotels:"setHotels",setComments:"setComments",setUser:"setUser"})),{},{getAllData:function(){this.setHotels(),this.setComments(),this.getUserInCookie()},test:function(){console.log("hotels =>",this.hotels),console.log("user => ",this.user),console.log("comments =>",this.comments)},getUserInCookie:function(){var e=this.$cookies.get("user");e&&this.setUser(e),console.log("cookies",e)},deconnect:function(){this.$store.state.user=[],this.$cookies.remove("user")}}),mounted:function(){this.getAllData(),this.test()}},ge=fe,be=(a("034f"),a("40dc")),xe=a("5bc1"),_e=a("132d"),we=a("f6c4"),Ce=a("8dd9"),ke=a("7f2e"),ye=a("2a7f"),Ve=Object(h["a"])(ge,n,o,!1,null,null,null),Oe=Ve.exports;g()(Ve,{VAppBar:be["a"],VAppBarNavIcon:xe["a"],VBtn:b["a"],VCard:x["a"],VContainer:A["a"],VIcon:_e["a"],VMain:we["a"],VSheet:Ce["a"],VSpacer:V["a"],VSparkline:ke["a"],VTextField:S["a"],VToolbarTitle:ye["a"]});var Se=a("ce5b"),je=a.n(Se);s["default"].use(je.a);var He=new je.a({});s["default"].use(i["a"],p.a);var Te=new i["a"].Store({state:{user:[],hotels:[],comments:[],url1:"http://127.0.0.1:3000/",url:"https://afternoon-coast-58196.herokuapp.com/"},actions:{setHotels:function(e){var t=this,a=e.commit;p.a.get(this.state.url+"v1/hotels").then((function(e){a("SET_HOTELS",e.data)})).catch((function(e){console.log(e),t.errored=!0}))},setComments:function(e){var t=this,a=e.commit;p.a.get(this.state.url+"v1/user_comment").then((function(e){a("SET_COMMENTS",e.data)})).catch((function(e){console.log(e),t.errored=!0}))},setUser:function(e,t){var a=e.commit;a("SET_USER",t)}},mutations:{SET_HOTELS:function(e,t){e.hotels=t},SET_USER:function(e,t){e.user=t},SET_COMMENTS:function(e,t){e.comments=t}}}),$e=a("2b27"),Ee=a.n($e);s["default"].use(Ee.a,Ee.a),s["default"].config.productionTip=!1,new s["default"]({vuetify:He,store:Te,render:function(e){return e(Oe)}}).$mount("#app")},5960:function(e,t,a){},"85ec":function(e,t,a){},"8c74":function(e,t,a){},c11f:function(e,t,a){},d9c9:function(e,t,a){"use strict";a("c11f")},f6cc:function(e,t,a){"use strict";a("f8ba")},f8ba:function(e,t,a){}});
//# sourceMappingURL=app.07875108.js.map