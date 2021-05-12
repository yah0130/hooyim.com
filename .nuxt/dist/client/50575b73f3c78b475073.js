(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{349:function(t,e,n){},350:function(t,e,n){},361:function(t,e,n){"use strict";var r=n(349);n.n(r).a},362:function(t,e,n){"use strict";var r=n(350);n.n(r).a},374:function(t,e,n){"use strict";n.r(e);n(19),n(47);var r=n(8),l=(n(10),n(15)),o=n(5),c=n(126),d=n(30),_=n(6),v=n(132);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C={name:"ArticleDetail",components:{ShareBox:n(167).a},validate(t){var{params:e,store:n}=t;return e.article_id&&!isNaN(Number(e.article_id))},fetch(t){var{store:e,params:n,error:r}=t;return Promise.all([e.dispatch("article/fetchDetail",n).catch(t=>r({statusCode:404})),e.dispatch("comment/fetchList",{post_id:n.article_id})])},head(){return{title:this.article.title||"...",meta:[{hid:"keywords",name:"keywords",content:this.article.keywords.join(",")||this.article.title||""},{hid:"description",name:"description",content:this.article.description}]}},data:()=>({swiperOption:{setWrapperSize:!0,simulateTouch:!1,mousewheel:{sensitivity:1},autoplay:{delay:3500,disableOnInteraction:!1},observeParents:!0,grabCursor:!0,slidesPerView:"auto"},isReadMoreLoading:!1,contentElementIds:{content:"article-content",moreContent:"more-article-content"}}),mounted(){o.b&&this.observeLozad(this.contentElementIds.content)},computed:h(h({},Object(l.b)({constants:t=>t.global.constants,language:t=>t.global.language,tags:t=>t.tag.data,article:t=>t.article.detail.data,isFetching:t=>t.article.detail.fetching,isMobile:t=>t.global.isMobile})),{},{isEnLang(){return this.$store.getters["global/isEnLang"]},routeArticleId(){return Number(this.$route.params.article_id)},articleUrl(){return Object(_.a)(this.article.id)},isContentTooMore(){var{content:content}=this.article;return content&&content.length>13688},isCanReadMore(){return this.isContentTooMore&&!this.article.isRenderedFullContent},moreContentIndex(){if(!this.isContentTooMore)return null;var t=this.article.content.substring(0,11688),e=t.lastIndexOf("\n####"),n=t.lastIndexOf("\n###"),r=t.lastIndexOf("\n\n```"),l=t.lastIndexOf("\n\n**");return Math.max(e,n,r,l)},articleContent(){var{content:content}=this.article;return content?Object(d.a)(this.isContentTooMore?content.substring(0,this.moreContentIndex):content,this.tags,!0):""},articleMoreContent(){var{content:content}=this.article;return content&&this.isContentTooMore?Object(d.a)(content.substring(this.moreContentIndex,content.length),this.tags,!0):""},relatedArticles(){return[...this.article.related].slice(0,10)}}),methods:{readMore(){this.isReadMoreLoading=!0,this.$nextTick(()=>{setTimeout(()=>{this.$store.commit("article/updateDetailRenderedState",!0),this.isReadMoreLoading=!1},0)})},contentAnimateDone(){this.observeLozad(this.contentElementIds.content)},readMoreAnimateDone(){this.observeLozad(this.contentElementIds.moreContent)},observeLozad(t){var e=this.$refs.detail.querySelector("#".concat(t)),n=e&&e.querySelectorAll(".lozad");if(!n||!n.length)return!1;Object(c.a)(n,{loaded:element=>element.classList.add("loaded")}).observe()},copyArticleUrl(){this.article.title&&this.$root.$copyToClipboard(this.articleUrl)},getRelatedArticleThumb(t){return Object(v.a)(t,this.$store.getters["global/isWebPImage"])},getDateTitle(t){if(!t)return t;t=new Date(t);var e=this.isEnLang?"AM":"上午",n=this.isEnLang?"PM":"下午",r=t.getFullYear(),l=t.getMonth()+1,o=t.getDate(),c=t.getHours()>11?n:e;return"".concat(r,"/").concat(l,"/").concat(o," ").concat(c)},getDateLink(t){if(!t)return t;var e=(t=new Date(t)).getFullYear(),n=(t.getMonth()+1).toString(),r=t.getDate().toString();return n=1===n.length?"0".concat(n):n,r=1===r.length?"0".concat(r):r,"/date/".concat(e,"-").concat(n,"-").concat(r)}}},y=(n(361),n(362),n(3)),component=Object(y.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"article-page",class:{mobile:t.isMobile}},[n("div",{ref:"detail",staticClass:"detail"},[n("transition",{attrs:{name:"module"}},[t.isFetching?t._e():n("div",{staticClass:"oirigin",class:{self:!t.article.origin,other:t.article.origin===t.constants.OriginState.Reprint,hybrid:t.article.origin===t.constants.OriginState.Hybrid}},[t.article.origin?t.article.origin===t.constants.OriginState.Reprint?n("span",[t._v(t._s(t.$i18n.text.origin.reprint))]):t.article.origin===t.constants.OriginState.Hybrid?n("span",[t._v(t._s(t.$i18n.text.origin.hybrid))]):t._e():n("span",[t._v(t._s(t.$i18n.text.origin.original))])])]),t._v(" "),n("transition",{attrs:{name:"module",mode:"out-in"},on:{"after-enter":t.contentAnimateDone}},[t.isFetching?n("div",{key:"skeleton",staticClass:"skeleton"},[n("client-only",[n("skeleton-line",{staticClass:"title"}),t._v(" "),n("skeleton-paragraph",{staticClass:"content",attrs:{lines:9,"line-height":"1.2em"}})],1)],1):n("div",{key:"knowledge",staticClass:"knowledge"},[n("h2",{staticClass:"title"},[t._v(t._s(t.article.title))]),t._v(" "),n("div",{staticClass:"content",attrs:{id:t.contentElementIds.content},domProps:{innerHTML:t._s(t.articleContent)}}),t._v(" "),n("transition",{attrs:{name:"module",mode:"out-in"},on:{"after-enter":t.readMoreAnimateDone}},[t.isCanReadMore?n("div",{key:"readmore-btn",staticClass:"readmore"},[n("button",{staticClass:"readmore-btn",attrs:{disabled:t.isReadMoreLoading},on:{click:function(e){return t.readMore()}}},[n("span",[t._v(t._s(t.isReadMoreLoading?t.$i18n.text.article.rendering:t.$i18n.text.article.readAll))]),t._v(" "),n("i",{staticClass:"iconfont icon-next-bottom"})])]):t.article.isRenderedFullContent?n("div",{key:"more-content",staticClass:"content",attrs:{id:t.contentElementIds.moreContent},domProps:{innerHTML:t._s(t.articleMoreContent)}}):t._e()])],1)])],1),t._v(" "),n("div",{staticClass:"share"},[n("transition",{attrs:{name:"module",mode:"out-in"}},[t.isFetching?n("div",{key:"skeleton",staticClass:"skeleton"},t._l(t.isMobile?3:10,(function(e){return n("skeleton-base",{key:e,style:{width:"calc((100% - (1em * "+(t.isMobile?2:9)+")) / "+(t.isMobile?3:10)+")"},attrs:{radius:0}})})),1):n("share-box",{key:"share",class:{mobile:t.isMobile}})],1)],1),t._v(" "),n("transition",{attrs:{name:"module",mode:"out-in"}},[t.isFetching?n("div",{key:"skeleton",staticClass:"metas"},[n("skeleton-paragraph",{attrs:{align:!0,lines:4,"line-height":"1.2em"}})],1):n("div",{key:"metas",staticClass:"metas"},[t.isEnLang?n("p",{staticClass:"item"},[n("span",[t._v("Article created at")]),t._v(" "),n("span",[t._v(" ")]),t._v(" "),n("nuxt-link",{attrs:{title:t.getDateTitle(t.article.create_at),to:t.getDateLink(t.article.create_at)}},[n("span",[t._v(t._s(t.getDateTitle(t.article.create_at)))])]),t._v(" "),n("span",[t._v(" in category ")]),t._v(" "),t._l(t.article.category,(function(e,r){return n("nuxt-link",{key:r,attrs:{to:"/category/"+e.slug,title:e.description||e.name}},[n("span",[t._v(t._s(e.slug))]),t._v(" "),t.article.category.length&&t.article.category[r+1]?n("span",[t._v("、")]):t._e()])})),t._v(" "),t.article.category.length?t._e():n("span",[t._v("no catgory")]),t._v(" "),n("span",[t._v(",  ")]),t._v(" "),n("span",[t._v(t._s(t.article.meta.views||0))]),t._v(" "),n("span",[t._v(" Views")])],2):n("p",{staticClass:"item"},[n("span",[t._v("本文于")]),t._v(" "),n("span",[t._v(" ")]),t._v(" "),n("nuxt-link",{attrs:{title:t.getDateTitle(t.article.create_at),to:t.getDateLink(t.article.create_at)}},[n("span",[t._v(t._s(t.getDateTitle(t.article.create_at)))])]),t._v(" "),n("span",[t._v(" 发布在 ")]),t._v(" "),t._l(t.article.category,(function(e,r){return n("span",{key:r},[n("nuxt-link",{attrs:{to:"/category/"+e.slug,title:e.description||e.name}},[n("span",[t._v(t._s(e.name))])]),t._v(" "),t.article.category.length&&t.article.category[r+1]?n("span",[t._v("、")]):t._e()],1)})),t._v(" "),t.article.category.length?t._e():n("span",[t._v("未知")]),t._v(" "),n("span",[t._v(" 分类下，当前已被围观 ")]),t._v(" "),n("span",[t._v(t._s(t.article.meta.views||0))]),t._v(" "),n("span",[t._v(" 次")])],2),t._v(" "),n("p",{staticClass:"item"},[n("span",{staticClass:"title",class:t.language},[t._v(t._s(t.isEnLang?"Related tags:":"相关标签："))]),t._v(" "),t.article.tag.length?t._e():n("span",{domProps:{textContent:t._s(t.$i18n.text.tag.empty)}}),t._v(" "),t._l(t.article.tag,(function(e,r){return n("span",{key:r},[n("nuxt-link",{attrs:{to:"/tag/"+e.slug,title:e.description||e.name}},[n("span",[t._v(t._s(t.isEnLang?e.slug:e.name))])]),t._v(" "),t.article.tag.length&&t.article.tag[r+1]?n("span",[t._v("、")]):t._e()],1)}))],2),t._v(" "),n("p",{staticClass:"item"},[n("span",{staticClass:"title",class:t.language},[t._v(t._s(t.isEnLang?"Article Address:":"永久地址："))]),t._v(" "),n("span",{staticClass:"site-url",on:{click:t.copyArticleUrl}},[t._v(t._s(t.articleUrl))])]),t._v(" "),n("div",{staticClass:"item"},[n("span",{staticClass:"title",class:t.language},[t._v(t._s(t.isEnLang?"Copyright Clarify:":"版权声明："))]),t._v(" "),t.isEnLang?t._e():n("span",[n("span",[t._v("自由转载-署名-非商业性使用")]),t._v(" "),n("span",[t._v("  |  ")])]),t._v(" "),n("a",{attrs:{target:"_blank",rel:"external nofollow noopenter",href:"https://creativecommons.org/licenses/by-nc/3.0/cn/deed.zh"}},[t._v("Creative Commons BY-NC 3.0 CN")])])])]),t._v(" "),n("transition",{attrs:{name:"module",mode:"out-in"}},[t.isFetching?n("div",{key:"skeleton",staticClass:"related"},[t.isMobile?n("skeleton-paragraph",{staticClass:"skeleton",attrs:{lines:4,"line-height":"1em"}}):n("ul",{staticClass:"skeleton-list"},t._l(4,(function(t){return n("skeleton-base",{key:t,staticClass:"article"})})),1)],1):t.article.related&&t.article.related.length?n("div",{key:"related",staticClass:"related"},[t.isMobile?n("ul",{staticClass:"article-list"},t._l(t.relatedArticles,(function(article,e){return n("li",{key:e,staticClass:"item"},[n("nuxt-link",{staticClass:"item-link",attrs:{to:"/article/"+article.id,title:"「 "+article.title+" 」- 继续阅读"}},[n("span",{staticClass:"sign"},[t._v("《")]),t._v(" "),n("span",{staticClass:"title"},[t._v(t._s(article.title))]),t._v(" "),n("span",{staticClass:"sign"},[t._v("》")]),t._v(" "),n("small",{staticClass:"tip"},[t._v("- 继续阅读")])])],1)})),0):n("div",{directives:[{name:"swiper",rawName:"v-swiper:releted",value:t.swiperOption,expression:"swiperOption",arg:"releted"}],staticClass:"article-list swiper"},[n("div",{staticClass:"swiper-wrapper"},t._l(t.relatedArticles,(function(article,e){return n("div",{key:e,staticClass:"swiper-slide item"},[n("nuxt-link",{staticClass:"item-box filter",attrs:{to:"/article/"+article.id,title:article.title}},[n("img",{staticClass:"thumb",attrs:{src:t.getRelatedArticleThumb(article.thumb),alt:article.title}}),t._v(" "),n("span",{staticClass:"title"},[n("span",{staticClass:"text"},[t._v(t._s(article.title))])])])],1)})),0)])]):t._e()]),t._v(" "),n("div",{staticClass:"comment"},[n("comment-box",{attrs:{fetching:t.isFetching,"post-id":t.routeArticleId,likes:t.article.meta&&t.article.meta.likes}})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);