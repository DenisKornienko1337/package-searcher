(function(e){function t(t){for(var r,o,u=t[0],c=t[1],i=t[2],p=0,d=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,i||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,u=1;u<a.length;u++){var c=a[u];0!==n[c]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},s=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"14f3":function(e,t,a){},"1abc":function(e,t,a){"use strict";a("14f3")},"316d":function(e,t,a){},5013:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=a("5f5b"),s=a("bc3a"),o=a.n(s),u=a("8c4f");r["default"].use(u["a"]);var c=new u["a"]({mode:"history"}),i=c,l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("layout"),a("custom-footer")],1)},p=[],d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.isPopup?"layout o-hidden":"layout"},[e.isPopup?a("detailed-popup",{attrs:{curPackage:e.curPackage}}):e._e(),a("top-title"),a("search"),a("main-table"),a("pagination")],1)},f=[],v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("h1",[e._v("Search for package")])])}],g={name:"Title"},_=g,m=a("2877"),b=Object(m["a"])(_,v,h,!1,null,null,null),y=b.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Type here..."},domProps:{value:e.query},on:{input:[function(t){t.target.composing||(e.query=t.target.value)},e.search]}})])},k=[],w=a("1da1"),x=(a("96cf"),a("498a"),{name:"Search",data:function(){return{query:""}},computed:{page:function(){return this.$store.page}},methods:{search:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.query.trim()){t.next=4;break}return e.$store.commit("CLEAR"),"{}"!==JSON.stringify(e.$route.query)&&e.$router.push("/"),t.abrupt("return");case 4:return t.next=6,e.$store.dispatch("search",{query:e.query.trim(),page:1});case 6:e.$router.push("/?query=".concat(e.query,"&page=1"));case 7:case"end":return t.stop()}}),t)})))()}}}),$=x,C=(a("c1a7"),Object(m["a"])($,P,k,!1,null,"f04de24a",null)),O=C.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.results.length?a("table",{staticClass:"table table-bordered"},[e._m(0),a("tbody",e._l(e.results,(function(t,r){return a("tr",{key:t.name,on:{click:function(t){return e.openPopup(r)}}},[a("th",{attrs:{scope:"row"}},[e._v(e._s(t.package.name))]),a("td",[e._v(e._s(t.package.version))]),a("td",[e._v(e._s(t.package.description))])])})),0)]):e._e()},E=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[e._v("Name")]),a("th",{attrs:{scope:"col"}},[e._v("Version")]),a("th",{attrs:{scope:"col"}},[e._v("Description")])])])}],j={name:"Table",computed:{results:function(){return this.$store.state.results}},methods:{openPopup:function(e){de.$emit("setPopup",this.results[e].package)}}},S=j,T=(a("e622"),Object(m["a"])(S,q,E,!1,null,"563bf94b",null)),R=T.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.results.length?a("div",{staticClass:"pagination d-flex"},[a("div",{staticClass:"pagination-goto"},[a("div",[e._v(" Page: "+e._s(e.curPage)+"/"+e._s(e.total)+" ")]),a("div",[e._v(" Go to "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.page,expression:"page"}],attrs:{type:"number"},domProps:{value:e.page},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.paginate(t)},input:function(t){t.target.composing||(e.page=t.target.value)}}}),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.paginate}},[e._v(" Go ")])])]),a("div",{staticClass:"pagination-classic"},[a("div",{staticClass:"pagination-classic-prev"},[a("button",{class:1==e.curPage?"btn btn-secondary":"btn btn-primary",attrs:{type:"button",disabled:1==e.curPage},on:{click:function(t){return e.leaf(-1)}}},[e._v(" Prev ")])]),a("div",{staticClass:"pagination-classic-next"},[a("button",{class:e.curPage==e.total?"btn btn-secondary":"btn btn-primary",attrs:{type:"button",disabled:e.curPage==e.total},on:{click:function(t){return e.leaf(1)}}},[e._v(" Next ")])])])]):e._e()},M=[],N=(a("99af"),a("a9e3"),{name:"Pagination",data:function(){return{page:1}},computed:{results:function(){return this.$store.state.results},total:function(){return this.$store.state.total},curPage:function(){return this.$store.state.page},query:function(){return this.$store.state.query}},methods:{paginate:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.page<1&&(e.page=1),e.page>e.total&&(e.page=e.total),t.next=4,e.$store.dispatch("search",{page:e.page});case 4:e.$router.push("/?query=".concat(e.query,"&page=").concat(e.page));case 5:case"end":return t.stop()}}),t)})))()},leaf:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.page=Number(t.page)+Number(e),a.next=3,t.$store.dispatch("search",{page:t.page});case 3:t.$router.push("/?query=".concat(t.query,"&page=").concat(t.page));case 4:case"end":return a.stop()}}),a)})))()}}}),A=N,L=(a("1abc"),Object(m["a"])(A,D,M,!1,null,"73f332e6",null)),J=L.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"detailed",on:{click:function(t){return t.target!==t.currentTarget?null:e.closePopup(t)}}},[a("div",{staticClass:"detailed-popup"},[a("div",{staticClass:"detailed-popup--header"},[a("div",{staticClass:"detailed-popup--header__title"},[e._v(" "+e._s(e.curPackage.name)+" "),a("div",{staticClass:"bg-danger",on:{click:e.closePopup}},[e._v(" × ")])])]),a("div",{staticClass:"detailed-popup--body"},[a("div",{staticClass:"detailed-popup--body__version"},[a("span",[e._v("Version:")]),e._v(" "+e._s(e.curPackage.version)+" ")]),a("div",{staticClass:"detailed-popup--body__description"},[e._v(" "+e._s(e.curPackage.description)+" ")]),a("div",{staticClass:"detailed-popup--body__keywords"},[a("span",[e._v("Keywords:")]),e._v(" "+e._s(e.keywords)+" ")]),a("div",{staticClass:"detailed-popup--body__last"},[a("span",[e._v("Last publish:")]),e._v(" "+e._s(e._f("parseDate")(e.curPackage.date))+" ")]),a("div",{staticClass:"detailed-popup--body__links"},[a("h3",{staticClass:"text-center"},[e._v("Links")]),a("div",{staticClass:"row"},e._l(Object.keys(e.curPackage.links),(function(t,r){return a("div",{key:r,staticClass:"col-md-3 text-center"},[a("a",{attrs:{href:e.curPackage.links[t]}},[e._v(e._s(t))])])})),0)]),e.curPackage.author?a("div",{staticClass:"detailed-popup--body__author"},[a("h3",{staticClass:"text-center"},[e._v("Author")]),e.curPackage.author.name?a("div",[e._v(e._s(e.curPackage.author.name))]):e._e(),e.curPackage.author.email?a("a",{attrs:{href:e.curPackage.author.email}},[e._v(" "+e._s(e.curPackage.author.email)+" ")]):e._e()]):e._e(),e.curPackage.publisher?a("div",{staticClass:"detailed-popup--body__publisher"},[a("h3",{staticClass:"text-center"},[e._v("Publisher")]),e.curPackage.publisher.name?a("div",[e._v(e._s(e.curPackage.publisher.name))]):e._e(),e.curPackage.publisher.email?a("a",{attrs:{href:e.curPackage.publisher.email}},[e._v(" "+e._s(e.curPackage.publisher.email)+" ")]):e._e()]):e._e(),a("div",{staticClass:"detailed-popup--body__maintainers"},[a("h3",{staticClass:"text-center"},[e._v("Maintainers")]),e._l(e.curPackage.maintainers,(function(t,r){return a("div",{key:r},[t.username?a("div",[e._v(e._s(t.username))]):e._e(),t.email?a("a",{attrs:{href:t.email}},[e._v(" "+e._s(t.email)+" ")]):e._e()])}))],2)])])])},F=[],G=(a("a15b"),["January","February","March","April","May","June","July","August","September","October","November","December"]),K={name:"DetailedPopup",filters:{parseDate:function(e){var t=new Date(e),a=t.getFullYear(),r=t.getMonth(),n=t.getDate();return"".concat(G[r]," ").concat(n,", ").concat(a)}},computed:{keywords:function(){return this.curPackage.keywords?this.curPackage.keywords.join(", "):[]}},props:["curPackage"],methods:{closePopup:function(){de.$emit("closePopup")}},mounted:function(){window.scrollTo(0,0)}},Y=K,Q=(a("75a5"),Object(m["a"])(Y,U,F,!1,null,"67bd9d18",null)),V=Q.exports,z={name:"BaseLayout",data:function(){return{isPopup:!1,curPackage:{}}},components:{TopTitle:y,Search:O,MainTable:R,Pagination:J,DetailedPopup:V},methods:{setPopup:function(e){this.curPackage=e,this.isPopup=!0},closePopup:function(){this.isPopup=!1}},mounted:function(){de.$on("setPopup",this.setPopup),de.$on("closePopup",this.closePopup)}},B=z,H=(a("d93f"),Object(m["a"])(B,d,f,!1,null,"505add5e",null)),I=H.exports,W=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},X=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer"},[a("p",[a("span",[e._v("Developed by ")]),a("a",{attrs:{href:"https://github.com/DenisKornienko1337/"}},[e._v("Denis Kornienko")])])])}],Z={name:"Footer"},ee=Z,te=(a("eed6"),Object(m["a"])(ee,W,X,!1,null,"552a7a2e",null)),ae=te.exports,re={name:"App",components:{layout:I,CustomFooter:ae},mounted:function(){"{}"!==JSON.stringify(this.$route.query)&&this.$router.push("/")}},ne=re,se=(a("5c0b"),Object(m["a"])(ne,l,p,!1,null,null,null)),oe=se.exports,ue=a("5530"),ce=a("2f62");r["default"].use(ce["a"]);var ie={query:"",results:[],total:0,page:1},le=new ce["a"].Store({state:Object(ue["a"])({},ie),mutations:{SET_RESULTS:function(e,t){if(!t)return e.results=[],void(e.total=0);e.results=t.results,e.total=Math.ceil(t.total/10)},SET_PAGE:function(e,t){e.page=t},SET_QUERY:function(e,t){e.query=t},CLEAR:function(e){e.query=ie.query,e.results=ie.results,e.total=ie.total,e.page=ie.page}},actions:{search:function(e,t){var a=this;return Object(w["a"])(regeneratorRuntime.mark((function r(){var n,s,o,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,s=e.state,t.query&&n("SET_QUERY",t.query),t.page&&n("SET_PAGE",t.page),r.prev=3,o=(s.page-1)*a._vm.$perPage,r.next=7,a._vm.$axios.get("/search?q=".concat(s.query,"&size=").concat(a._vm.$perPage,"&from=").concat(o));case 7:u=r.sent,n("SET_RESULTS",u.data),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](3),console.log(r.t0);case 14:case"end":return r.stop()}}),r,null,[[3,11]])})))()}},modules:{}}),pe=(a("f9e3"),a("2dd8"),o.a.create({baseURL:"https://api.npms.io/v2"}));r["default"].prototype.$axios=pe,r["default"].prototype.$perPage=10,r["default"].use(n["a"]),r["default"].config.productionTip=!1;var de=t["default"]=new r["default"];new r["default"]({store:le,router:i,render:function(e){return e(oe)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"75a5":function(e,t,a){"use strict";a("e131")},"7a42":function(e,t,a){},"9c0c":function(e,t,a){},"9f25":function(e,t,a){},c1a7:function(e,t,a){"use strict";a("9f25")},d93f:function(e,t,a){"use strict";a("5013")},e131:function(e,t,a){},e622:function(e,t,a){"use strict";a("7a42")},eed6:function(e,t,a){"use strict";a("316d")}});
//# sourceMappingURL=app.14fd1c71.js.map