(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{346:function(t,e,n){},358:function(t,e,n){"use strict";var c=n(346);n.n(c).a},371:function(t,e,n){"use strict";n.r(e);var c=n(7),l=n(2),_={name:"Service",head(){return{title:"".concat(this.isEnLang?"":this.$i18n.nav.service+" | ","Service")}},methods:{submitProject(){this.$ga.event("咨询邮件",l.b.GAEventActions.Click,l.b.GAEventTags.ServicePage);var t=this.isEnLang?"Technical consultant / ".concat(c.a.meta.title):"嗨！Hooyim，久仰大名！",body=this.isEnLang?"Hi Hooyim, My name is ":"我有一个需求：%0D%0A %0D%0A - 需求简述： %0D%0A %0D%0A - 需求文档：%0D%0A %0D%0A - 预算金额：%0D%0A %0D%0A - 预算周期：",e="mailto:yah0130@foxmail.com"+(this.isMobile?"":"?subject=".concat(t,"&body=").concat(body));window.location.href=e}},computed:{isMobile(){return this.$store.state.global.isMobile},isEnLang(){return this.$store.getters["global/isEnLang"]},isDarkTheme(){return this.$store.getters["global/isDarkTheme"]},ruleContent(){return this.isEnLang?'"Any application that can be written in JavaScript, will eventually be written in JavaScript."':"如果你认为自己的能力足以支撑一位出色、省心、优秀、帅气、完美的的全栈工程师的生产力，请 EMail 我；非常优秀，没有之一"}}},o=(n(358),n(3)),component=Object(o.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"service-page",class:{mobile:t.isMobile,dark:t.isDarkTheme}},[n("div",{staticClass:"banner"},[n("div",{staticClass:"content container"},[n("h2",{staticClass:"title"},[t._v(t._s(t.$i18n.text.service.slogan))]),t._v(" "),n("div",{staticClass:"submit"},[n("button",{staticClass:"email-me",attrs:{title:t.$i18n.text.service.emailMe},on:{click:t.submitProject}},[t._v(t._s(t.$i18n.text.service.emailMe))])]),t._v(" "),t.isMobile?t._e():n("a",{staticClass:"upwork",attrs:{target:"_blank",rel:"external nofollow noopenter",href:"https://www.upwork.com/freelancers/~0142e621258ac1770d"}},[n("span",[t._v("("+t._s(t.$i18n.text.service.hireMe))]),t._v(" "),n("i",{staticClass:"iconfont icon-upwork"}),t._v(" "),n("span",[t._v(")")])])])]),t._v(" "),n("div",{staticClass:"module"},[n("div",{staticClass:"module-content container"},[n("ul",{staticClass:"module-list"},[n("li",{staticClass:"item"},[t._m(0),t._v(" "),n("h3",{staticClass:"name"},[t._v("Web "+t._s(t.isEnLang?"Client":"客户端"))]),t._v(" "),n("p",{staticClass:"desc"},[t._v("Vue "+t._s(t.isEnLang?"application":"应用开发"))]),t._v(" "),n("p",{staticClass:"desc"},[t._v("React "+t._s(t.isEnLang?"application":"应用开发"))]),t._v(" "),n("p",{staticClass:"desc"},[t._v("Angular "+t._s(t.isEnLang?"application":"应用开发"))])]),t._v(" "),n("li",{staticClass:"item"},[t._m(1),t._v(" "),n("h3",{staticClass:"name"},[t._v("Nodejs")]),t._v(" "),n("p",{staticClass:"desc"},[t._v("Nodejs "+t._s(t.isEnLang?"application":"整站建设"))]),t._v(" "),n("p",{staticClass:"desc"},[t._v("Nodejs "+t._s(t.isEnLang?"online bussniess":"Web 服务开发"))]),t._v(" "),n("p",{staticClass:"desc"},[t._v("Nodejs "+t._s(t.isEnLang?"CLI application":"命令行工具开发"))])]),t._v(" "),n("li",{staticClass:"item"},[t._m(2),t._v(" "),n("h3",{staticClass:"name"},[t._v("Application")]),t._v(" "),n("p",{staticClass:"desc"},[t._v("Weex "+t._s(t.isEnLang?"application":"应用开发"))]),t._v(" "),n("p",{staticClass:"desc"},[t._v("ReactNative "+t._s(t.isEnLang?"application":"应用开发"))]),t._v(" "),n("p",{staticClass:"desc"},[t._v("Electron "+t._s(t.isEnLang?"application":"应用开发"))])]),t._v(" "),n("li",{staticClass:"item"},[t._m(3),t._v(" "),n("h3",{staticClass:"name"},[t._v("Wechat")]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.isEnLang?"HTML5 page":"H5 开发"))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.isEnLang?"WeChat official account":"公众号开发"))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.isEnLang?"WeChat mini program":"小程序开发"))])]),t._v(" "),n("li",{staticClass:"item"},[t._m(4),t._v(" "),n("h3",{staticClass:"name"},[t._v(t._s(t.isEnLang?"Consultant":"技术咨询"))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.isEnLang?"Everything about WEB":"语言、框架疑难杂症"))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.isEnLang?"Business and technical":"业务与技术方案设计"))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.isEnLang?"Technical consultant":"长期技术顾问指导"))])])])])]),t._v(" "),n("div",{staticClass:"step"},[n("div",{staticClass:"step-content container"},[n("ul",{staticClass:"step-list"},[n("li",{staticClass:"item"},[n("h3",{staticClass:"name"},[t._v("1. "+t._s(t.isEnLang?"Consult":"提交需求"))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.isEnLang?"Product requirements document":"提供构思成熟的需求文档"))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.isEnLang?"Prototype design document":"及清晰可用的设计图或原型"))])]),t._v(" "),n("li",{staticClass:"item"},[n("h3",{staticClass:"name"},[t._v("2. "+t._s(t.isEnLang?"Confirm":"确认需求"))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.isEnLang?"Price and schedule":"确认报价及开发周期"))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.isEnLang?"Development cycle":"协商开发周期和要点"))])]),t._v(" "),n("li",{staticClass:"item"},[n("h3",{staticClass:"name"},[t._v("3. "+t._s(t.isEnLang?"Develop":"预付开发"))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.isEnLang?"Payment the trust and deposit":"预付部分或全部"))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.isEnLang?"Develop project":"进入开发流程"))])]),t._v(" "),n("li",{staticClass:"item"},[n("h3",{staticClass:"name"},[t._v("4. "+t._s(t.isEnLang?"Review":"预收修正"))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.isEnLang?"Review and experience":"提供预览演示"))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.isEnLang?"Fixbug and optimize":"细节修正及调优"))])]),t._v(" "),n("li",{staticClass:"item"},[n("h3",{staticClass:"name"},[t._v("5. "+t._s(t.isEnLang?"Delivery":"交付维护"))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.isEnLang?"Pay balance":"付清尾款，交付项目"))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.isEnLang?"Maintenance cycle":"一定周期内持续维护"))])])])])]),t._v(" "),n("div",{staticClass:"rule"},[n("div",{staticClass:"rule-content container"},[t._v(t._s(t.ruleContent))])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"icon web"},[e("i",{staticClass:"iconfont icon-html5"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"icon nodejs"},[e("i",{staticClass:"iconfont icon-nodejs"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"icon app"},[e("i",{staticClass:"iconfont icon-app"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"icon wechat"},[e("i",{staticClass:"iconfont icon-wechat"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"icon consult"},[e("i",{staticClass:"iconfont icon-tool"})])}],!1,null,"e5ff980c",null);e.default=component.exports}}]);