(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("body",[r("Header"),r("CardContainer")],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"container"},[r("div",{staticClass:"row row-cols-1 row-cols-md-5 gx-4 gy-3 my-5"},t._l(t.songList,(function(t,e){return r("SingleCard",{key:e,attrs:{url:t.poster,title:t.title,year:t.year,genre:t.genre,author:t.author}})})),1)]),t.checkLoader?r("Loader",{attrs:{text:"Caricamento. . ."}}):t._e()],1)},s=[],c=r("bc3a"),l=r.n(c),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col"},[r("div",{staticClass:"card single_card"},[r("img",{staticClass:"card-img-top",attrs:{src:t.url,alt:"song image"}}),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title mb-3"},[t._v(t._s(t.title))]),r("p",{staticClass:"card-text m-0"},[t._v(t._s(t.author))]),r("p",{staticClass:"card-text m-0"},[t._v(t._s(t.year))])])])])},d=[],p={name:"SingleCard",props:{url:String,title:String,year:String,genre:String,author:String}},f=p,g=r("2877"),_=Object(g["a"])(f,u,d,!1,null,null,null),v=_.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"loader_container"},[t._m(0),r("span",{staticClass:"text_loader text-secondary"},[t._v(t._s(t.text))])])])},m=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"icon_loader spinner-border text-secondary",attrs:{role:"status"}},[r("span",{staticClass:"visually-hidden"},[t._v("Loading...")])])}],y={name:"Loader",props:{text:String}},b=y,x=Object(g["a"])(b,h,m,!1,null,null,null),C=x.exports,w={name:"CardContainer",components:{SingleCard:v,Loader:C},data:function(){return{songList:[],checkLoader:!0}},mounted:function(){var t=this;l.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(e){t.songList=e.data.response,setTimeout((function(){t.checkLoader=!1}),250)}))}},S=w,O=Object(g["a"])(S,i,s,!1,null,null,null),j=O.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{staticClass:"logo_container"},[r("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/768px-Spotify_logo_without_text.svg.png",alt:"Spotify logo"}})])])}],$={name:"Header"},E=$,P=Object(g["a"])(E,L,k,!1,null,null,null),M=P.exports,T={name:"App",components:{Header:M,CardContainer:j}},H=T,J=(r("5c0b"),Object(g["a"])(H,a,o,!1,null,null,null)),A=J.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(A)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"9c0c":function(t,e,r){}});
//# sourceMappingURL=app.175e72d4.js.map