webpackJsonp([2],{22:function(t,e){},44:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(48),l=i.n(n),s=i(25),a=i.n(s),o=null,r=l()({},Quasar.components);e.default={name:"YoutubePlaylist",components:r,props:{playlistApi:{type:String,required:!0},playlistId:{type:String,required:!0},width:{type:String},height:{type:String}},data:function(){return{msg:"Welcome to Your Vue.js App",currentVideoId:null,currentVideoIndex:0,videos:[]}},computed:{currentVideoEmbed:function(){return"https://www.youtube.com/embed/"+this.currentVideoId},totalVideo:function(){return this.videos.length}},created:function(){var t=this;if(!t.playlistApi||0===t.playlistApi.length)return void console.log("Pleaqse config playlist api");o=a.a.create({baseURL:t.playlistApi}),t.getVideosOfPlayList(t.playlistId,function(e,i){t.videos=i,t.videos.length>0&&(t.currentVideoId=t.videos[0].contentDetails.videoId)})},methods:{videoClicked:function(t){this.currentVideoIndex=this.videos.indexOf(t),this.currentVideoId=t.contentDetails.videoId},getCurrentPlaylist:function(t){o.get("playlists").then(function(e){var i=e.data;if("OK"!=i.status)return console.log(i.message),void t(i.message,null);t(null,i.data)}).catch(function(e){t(e.message,null)})},getVideosOfPlayList:function(t,e){o.get("playlists/"+t).then(function(t){return t.data}).then(function(t){e(t.message,t.data)}).catch(function(t){e(t.message,null)})}}}},47:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(8),l=i.n(n),s=i(22);i.n(s);e.default=l.a},76:function(t,e){},8:function(t,e,i){function n(t){i(76)}var l=i(6)(i(44),i(83),n,"data-v-000eaba1",null);t.exports=l.exports},83:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.currentVideoId?i("div",{staticClass:"pll-main"},[i("div",{attrs:{id:"pll-video-player"}},[i("iframe",{attrs:{src:t.currentVideoEmbed,width:t.width,height:t.height,frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}})]),t._v(" "),i("div",{style:{height:t.height},attrs:{id:"pll-video-list"}},[i("div",{attrs:{id:"pll-info"}},[i("span",{attrs:{id:"pll-title"}},[t._v("Crypto Famyly")]),t._v(" "),i("span",{attrs:{id:"pll-subtitle"}},[t._v("Freedom - "+t._s(t.currentVideoIndex+1)+" / "+t._s(t.totalVideo))])]),t._v(" "),i("q-list",{attrs:{highlight:"","no-border":""}},t._l(t.videos,function(e){return i("q-item",{key:e.contentDetails.videoId,staticClass:"pll-video-item",nativeOn:{click:function(i){t.videoClicked(e)}}},[i("q-item-side",{attrs:{image:e.snippet.thumbnails.default.url}}),t._v(" "),i("q-item-main",[i("q-item-tile",{staticClass:"pll-video-item-title",attrs:{label:""}},[t._v(t._s(e.snippet.title))]),t._v(" "),i("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(e.snippet.channelTitle))])],1)],1)}))],1)]):t._e()},staticRenderFns:[]}}},[47]);
//# sourceMappingURL=vue-ytb-pll.f4079a678d278f2eb860.js.map