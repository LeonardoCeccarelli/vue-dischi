(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",[n("Header"),n("CardContainer")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row row-cols-1 row-cols-md-5 gx-4 gy-3 my-5"},t._l(t.songList,(function(t,e){return n("SingleCard",{key:e,attrs:{url:t.poster,title:t.title,year:t.year,genre:t.genre,author:t.author}})})),1)])},s=[],l=n("bc3a"),c=n.n(l),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col"},[n("div",{staticClass:"card single_card"},[n("img",{staticClass:"card-img-top",attrs:{src:t.url,alt:"song image"}}),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title mb-3"},[t._v(t._s(t.title))]),n("p",{staticClass:"card-text m-0"},[t._v(t._s(t.author))]),n("p",{staticClass:"card-text m-0"},[t._v(t._s(t.year))])])])])},p=[],d={name:"SingleCard",props:{url:String,title:String,year:String,genre:String,author:String}},f=d,g=n("2877"),h=Object(g["a"])(f,u,p,!1,null,null,null),m=h.exports,v={name:"CardContainer",components:{SingleCard:m},data:function(){return{songList:[]}},mounted:function(){var t=this;c.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(e){t.songList=e.data.response,console.log(t.songList)}))}},_=v,b=Object(g["a"])(_,i,s,!1,null,null,null),y=b.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"logo_container"},[n("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/768px-Spotify_logo_without_text.svg.png",alt:"Spotify logo"}})])])}],x={name:"Header"},S=x,O=Object(g["a"])(S,C,w,!1,null,null,null),j=O.exports,P={name:"App",components:{Header:j,CardContainer:y}},k=P,$=(n("5c0b"),Object(g["a"])(k,o,a,!1,null,null,null)),E=$.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.5519d154.js.map