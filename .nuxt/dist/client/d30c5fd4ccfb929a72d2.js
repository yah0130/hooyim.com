(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{389:function(t,e,r){},390:function(t,e,r){},391:function(t,e,r){},392:function(t,e,r){"use strict";var n=r(389);r.n(n).a},393:function(t,e,r){"use strict";var n=r(390);r.n(n).a},394:function(t,e,r){"use strict";var n=r(391);r.n(n).a},395:function(t,e,r){"use strict";r(12),r(31),r(17),r(16),r(6),r(20),r(21),r(24);var n=r(8),c=r(25),o=r(7),l=r(162),d=r(65),m=r(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=Object(d.a)(m.b.StorageField.UserLikeHistory),v={name:"ArticleListItem",props:{article:Object},data:function(){return{isLiked:!1}},computed:h(h({},Object(c.b)("global",["constants","language","isMobile"])),{},{isEnLang:function(){return this.$store.getters["global/isEnLang"]},originText:function(){return this.article.origin?this.article.origin===this.constants.OriginState.Reprint?this.$i18n.text.origin.reprint:this.article.origin===this.constants.OriginState.Hybrid?this.$i18n.text.origin.hybrid:"-":this.$i18n.text.origin.original}}),methods:{getThumb:function(t){return Object(l.a)(t,this.$store.getters["global/isWebPImage"])}},mounted:function(){this.isLiked=_.get().pages.includes(this.article.id)}},y=(r(392),r(3)),C=Object(y.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-list-item",class:{mobile:t.isMobile}},[r("div",{staticClass:"item-content"},[t.isMobile?t._e():r("div",{staticClass:"item-thumb"},[r("nuxt-link",{attrs:{to:"/article/"+t.article.id}},[r("span",{staticClass:"item-oirigin",class:{self:!t.article.origin,other:t.article.origin===t.constants.OriginState.Reprint,hybrid:t.article.origin===t.constants.OriginState.Hybrid}},[t._v(t._s(t.originText))]),t._v(" "),r("img",{staticClass:"item-thumb-img",attrs:{src:t.getThumb(t.article.thumb),alt:t.article.title,title:t.article.title}})])],1),t._v(" "),r("div",{staticClass:"item-body"},[r("h5",{staticClass:"item-title"},[r("nuxt-link",{attrs:{to:"/article/"+t.article.id,title:t.article.title},domProps:{textContent:t._s(t.article.title)}})],1),t._v(" "),r("p",{staticClass:"item-description",staticStyle:{"-webkit-box-orient":"vertical"},domProps:{innerHTML:t._s(t.article.description)}}),t._v(" "),r("div",{staticClass:"item-meta"},[r("span",{staticClass:"date"},[r("i",{staticClass:"iconfont icon-clock"}),t._v(" "),r("span",[t._v(t._s(t._f("toYMD")(t.article.create_at,t.language)))])]),t._v(" "),r("span",{staticClass:"views"},[r("i",{staticClass:"iconfont icon-eye"}),t._v(" "),r("span",[t._v(t._s(t.article.meta.views||0))])]),t._v(" "),r("span",{staticClass:"comments"},[r("i",{staticClass:"iconfont icon-comment"}),t._v(" "),r("span",[t._v(t._s(t.article.meta.comments||0))])]),t._v(" "),r("span",{staticClass:"likes"},[r("i",{staticClass:"iconfont icon-like",class:{liked:t.isLiked}}),t._v(" "),r("span",[t._v(t._s(t.article.meta.likes||0))])]),t._v(" "),t.isMobile?t._e():r("span",{staticClass:"categories"},[r("i",{staticClass:"iconfont icon-list"}),t._v(" "),t.article.category.length?t._l(t.article.category,(function(e,n){return r("nuxt-link",{key:n,attrs:{to:"/category/"+e.slug},domProps:{textContent:t._s(t.isEnLang?e.slug:e.name)}})})):r("span",{domProps:{textContent:t._s(t.$i18n.text.category.empty)}})],2),t._v(" "),t._e()])])])])}),[],!1,null,"761b75bc",null).exports,O=(r(64),{name:"ArticleListHeader",computed:{isEnLang:function(){return this.$store.getters["global/isEnLang"]},isDarkTheme:function(){return this.$store.getters["global/isDarkTheme"]},currentTag:function(){var t=this;return this.$store.state.tag.data.find((function(e){return e.slug===t.$route.params.tag_slug}))},currentTagIconClass:function(){return this.getExtendsValue(this.currentTag,"icon")||"icon-tag"},currentCategory:function(){var t=this;return this.$store.state.category.data.find((function(e){return e.slug===t.$route.params.category_slug}))},currentCategoryIconClass:function(){return this.getExtendsValue(this.currentCategory,"icon")||"icon-category"},currentBackgroundImage:function(){var t=this.getExtendsValue(this.currentTag,"background"),e=this.getExtendsValue(this.currentCategory,"background");return t||e||Object(o.b)("/images/service.jpg")},currentBackgroundColor:function(){var t=this.getExtendsValue(this.currentTag,"bgcolor"),e=this.getExtendsValue(this.currentCategory,"bgcolor");return t||e||null},currentDate:function(){return this.$route.params.date},currentKeyword:function(){return this.$route.params.keyword},isMobile:function(){return this.$store.state.global.isMobile}},methods:{getExtendsValue:function(t,e){if(!t||!t.extends.length)return null;var r=t.extends.find((function(t){return t.name===e}));return r?r.value:null}}}),header=(r(393),Object(y.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header-box",class:{mobile:t.isMobile,dark:t.isDarkTheme},style:{"background-color":t.currentBackgroundColor,"background-image":"url("+t.currentBackgroundImage+")"}},[r("div",{staticClass:"logo-box"},[r("p",{staticClass:"logo"},[r("transition",{attrs:{name:"module",mode:"out-in"}},[t.currentDate?r("i",{key:"date",staticClass:"iconfont icon-clock"}):t.currentTag?r("i",{key:"tag",staticClass:"iconfont",class:t.currentTagIconClass}):t.currentCategory?r("i",{key:"category",staticClass:"iconfont",class:t.currentCategoryIconClass}):t.currentKeyword?r("i",{key:"search",staticClass:"iconfont icon-search"}):t._e()])],1)]),t._v(" "),r("div",{staticClass:"title-box"},[r("transition",{attrs:{name:"module",mode:"out-in"}},[t.currentCategory?r("h5",{key:"category-"+t.currentCategory.description,staticClass:"title"},[r("span",[t._v(t._s(t.currentCategory.description||"..."))])]):t.currentTag?r("h5",{key:"tag-"+t.currentTag.name,staticClass:"title"},[r("span",[t._v(t._s(t.currentTag.name))]),t._v(" "),r("span",[t._v(" - ")]),t._v(" "),r("span",[t._v(t._s(t.currentTag.description||"..."))])]):t.currentDate?r("h5",{key:"date-"+t.currentDate,staticClass:"title"},[t.isEnLang?r("span",[r("span",[t._v(t._s(t.currentDate)+" ")]),t._v(" "),r("span",[t._v("articles")])]):r("span",[r("span",[t._v("发布于")]),t._v(" "),r("span",[t._v(" "+t._s(t.currentDate)+" ")]),t._v(" "),r("span",[t._v("的所有文章")])])]):t.currentKeyword?r("h5",{key:"search-"+t.currentKeyword,staticClass:"title"},[t.isEnLang?r("span",[r("span",[t._v('"'+t._s(t.currentKeyword)+'"')]),t._v(" "),r("span",[t._v("related articles")])]):r("span",[r("span",[t._v("和")]),t._v(" "),r("span",[t._v(' "')]),t._v(" "),r("span",[t._v(t._s(t.currentKeyword))]),t._v(" "),r("span",[t._v('" ')]),t._v(" "),r("span",[t._v("有关的所有文章")])])]):t._e()])],1)])}),[],!1,null,"a13aa12e",null).exports),k=r(32),x=r(163),j={name:"ArticleList",components:{ListItem:C,ListHeader:header},props:{article:{type:Object}},computed:{isMobile:function(){return this.$store.state.global.isMobile},isCanLoadMore:function(){var t=this.article.data.pagination,e=t.current_page,r=t.total_page;return!!this.article.data.pagination&&e<r},isIndexRoute:function(){return Object(k.c)(this.$route.name)},btnColorBlockLeft:function(){return this.isMobile?60:75}},methods:{toDetail:function(article){this.isMobile&&this.$router.push(Object(x.a)(article.id))}}},$=(r(394),Object(y.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"articles",class:{mobile:t.isMobile}},[t.isIndexRoute?t._e():r("div",{staticClass:"article-list-header"},[r("list-header")],1),t._v(" "),r("div",{staticClass:"article-list"},[r("transition",{attrs:{name:"module",mode:"out-in"}},[t.article.data.data&&t.article.data.data.length?r("transition-group",{key:"list",attrs:{name:"fade",tag:"div"}},t._l(t.article.data.data,(function(e){return r("list-item",{key:e.id,attrs:{article:e},nativeOn:{click:function(r){return t.toDetail(e)}}})})),1):r("empty-box",{key:"empty",staticClass:"article-empty-box"},[t._t("default",[t._v(t._s(t.$i18n.text.article.empty))])],2)],1)],1),t._v(" "),r("div",{staticClass:"article-load"},[r("button",{staticClass:"loadmore-button",attrs:{disabled:t.article.fetching||!t.isCanLoadMore},on:{click:function(e){return t.$emit("loadmore")}}},[t._m(0),t._v(" "),r("div",{staticClass:"text"},[!t.article.fetching&&t.isCanLoadMore?r("span",[t._v(t._s(t.$i18n.text.article.loadmore))]):t.article.fetching&&t.isCanLoadMore?r("span",[t._v(t._s(t.$i18n.text.article.loading))]):t.isCanLoadMore?t._e():r("span",[t._v(t._s(t.$i18n.text.article.nomore))])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"iconfont icon-peachblossom"})])}],!1,null,"48e1ee0a",null));e.a=$.exports},432:function(t,e,r){"use strict";r.r(e);r(31),r(17),r(16),r(6),r(20);var n=r(8);r(64),r(28);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var o={name:"TagArticleList",components:{ArticleList:r(395).a},validate:function(t){var e=t.params,r=t.store;return e.tag_slug&&r.state.tag.data.some((function(t){return t.slug===e.tag_slug}))},fetch:function(t){var e=t.store,r=t.params;return e.dispatch("article/fetchList",r)},head:function(){var title=(this.defaultParams.tag_slug||"").toLowerCase().replace(/( |^)[a-z]/g,(function(t){return t.toUpperCase()}));return{title:"".concat(title," | Tag")}},created:function(){this.currentTag||this.$router.back()},computed:{article:function(){return this.$store.state.article.list},currentTag:function(){var t=this;return this.$store.state.tag.data.find((function(e){return e.slug===t.$route.params.tag_slug}))},defaultParams:function(){return{tag_slug:this.$route.params.tag_slug}},nextPageParams:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({page:this.article.data.pagination.current_page+1},this.defaultParams)}},methods:{loadmoreArticle:function(){this.$store.dispatch("article/fetchList",this.nextPageParams)}}},l=r(3),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tag-archive-page"},[e("article-list",{attrs:{article:this.article},on:{loadmore:this.loadmoreArticle}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);