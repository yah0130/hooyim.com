(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{399:function(t,e,r){},411:function(t,e,r){"use strict";var c=r(399);r.n(c).a},424:function(t,e,r){"use strict";r.r(e);r(5);var c=r(52),n={name:"Music",head:function(){return{title:"".concat(this.isEnLang?"":this.$i18n.nav.music+" | ","Music")}},computed:{isEnLang:function(){return this.$store.getters["global/isEnLang"]},musicPlayer:function(){return c.a},currentSong:function(){return c.a.currentSong},relativeStrokeWidth:function(){return(15/450*100).toFixed(1)},trackPath:function(){var t=parseInt(50-parseFloat(this.relativeStrokeWidth)/2,10);return"M 50 50 m 0 -".concat(t," a ").concat(t," ").concat(t," 0 1 1 0 ").concat(2*t," a ").concat(t," ").concat(t," 0 1 1 0 -").concat(2*t)},perimeter:function(){var t=50-parseFloat(this.relativeStrokeWidth)/2;return 2*Math.PI*t},circlePathStyle:function(){var t=this.perimeter;return{strokeDasharray:"".concat(t,"px, ").concat(t,"px"),strokeDashoffset:(1-this.musicPlayer.progress/100)*t+"px"}}},created:function(){this.$store.state.global.isMobile&&this.$router.back()}},o=(r(411),r(3)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"music-page"},[r("div",{staticClass:"player"},[r("button",{staticClass:"prev-song",attrs:{disabled:!t.musicPlayer.ready||0===t.musicPlayer.index},on:{click:t.musicPlayer.prevSong}},[r("i",{staticClass:"iconfont icon-music-prev"})]),t._v(" "),r("div",{staticClass:"album-box"},[r("div",{staticClass:"circle-progress"},[r("svg",{attrs:{viewBox:"0 0 100 100"}},[r("path",{staticClass:"circle-progress-circle-track",attrs:{fill:"none",d:t.trackPath,"stroke-width":t.relativeStrokeWidth}}),t._v(" "),r("path",{staticClass:"circle-progress-circle-path",style:t.circlePathStyle,attrs:{"stroke-linecap":"bevel",fill:"none",d:t.trackPath,"stroke-width":t.relativeStrokeWidth}})])]),t._v(" "),r("div",{staticClass:"song-bg-box",class:{playing:t.musicPlayer.playing}},[r("img",{attrs:{src:t.musicPlayer.currentSongPicUrl,draggable:"false"}})]),t._v(" "),r("div",{staticClass:"toggle-box"},[r("transition",{attrs:{name:"module",mode:"out-in"}},[r("button",{key:t.musicPlayer.playing?"pause":"play",staticClass:"toggle-btn",attrs:{disabled:!t.musicPlayer.ready},on:{click:t.musicPlayer.togglePlay}},[t.musicPlayer.playing?r("i",{staticClass:"iconfont icon-music-pause"}):r("i",{staticClass:"iconfont icon-music-play"})])])],1),t._v(" "),r("div",{staticClass:"toggle-muted"},[r("button",{staticClass:"muted-btn",attrs:{disabled:!t.musicPlayer.ready},on:{click:t.musicPlayer.toggleMuted}},[r("i",{staticClass:"iconfont",class:t.musicPlayer.muted?"icon-music-muted":"icon-music-volume"})])])]),t._v(" "),r("button",{staticClass:"next-song",attrs:{disabled:!t.musicPlayer.ready},on:{click:t.musicPlayer.nextSong}},[r("i",{staticClass:"iconfont icon-music-next"})])]),t._v(" "),r("div",{staticClass:"song-info"},[r("h3",{staticClass:"name"},[t.currentSong?r("span",[t._v(t._s(t.currentSong.name)+" By "+t._s(t.currentSong.artist)+" / "+t._s(t.currentSong.album||"unknow"))]):r("span",[t._v("Kind words are the music of the world.")])]),t._v(" "),r("transition",{attrs:{name:"fade"}},[t.musicPlayer.currentSongLrcData&&t.musicPlayer.currentSongLrcData.version>=3?r("p",{staticClass:"lrc"},[r("transition",{attrs:{name:"module",mode:"out-in"}},[r("span",{key:t.musicPlayer.currentSongRealTimeLrc,staticClass:"lrc-text"},[t._v(t._s(t.musicPlayer.currentSongRealTimeLrc))])])],1):t._e()])],1)])}),[],!1,null,"26a1a522",null);e.default=component.exports}}]);