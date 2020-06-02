import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _80420c02 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _2002b513 = () => interopDefault(import('../pages/app.vue' /* webpackChunkName: "pages/app" */))
const _71231c33 = () => interopDefault(import('../pages/guestbook.vue' /* webpackChunkName: "pages/guestbook" */))
const _26f9b897 = () => interopDefault(import('../pages/music.vue' /* webpackChunkName: "pages/music" */))
const _5db6cab2 = () => interopDefault(import('../pages/service.vue' /* webpackChunkName: "pages/service" */))
const _94acfeb2 = () => interopDefault(import('../pages/sitemap.vue' /* webpackChunkName: "pages/sitemap" */))
const _d8fd45e8 = () => interopDefault(import('../pages/vlog.vue' /* webpackChunkName: "pages/vlog" */))
const _42853d08 = () => interopDefault(import('../pages/article/_article_id.vue' /* webpackChunkName: "pages/article/_article_id" */))
const _5cd663f0 = () => interopDefault(import('../pages/category/_category_slug.vue' /* webpackChunkName: "pages/category/_category_slug" */))
const _4693152c = () => interopDefault(import('../pages/date/_date.vue' /* webpackChunkName: "pages/date/_date" */))
const _59c94dba = () => interopDefault(import('../pages/search/_keyword.vue' /* webpackChunkName: "pages/search/_keyword" */))
const _11ad3f4c = () => interopDefault(import('../pages/tag/_tag_slug.vue' /* webpackChunkName: "pages/tag/_tag_slug" */))
const _40d25678 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _80420c02,
    name: "about"
  }, {
    path: "/app",
    component: _2002b513,
    name: "app"
  }, {
    path: "/guestbook",
    component: _71231c33,
    name: "guestbook"
  }, {
    path: "/music",
    component: _26f9b897,
    name: "music"
  }, {
    path: "/service",
    component: _5db6cab2,
    name: "service"
  }, {
    path: "/sitemap",
    component: _94acfeb2,
    name: "sitemap"
  }, {
    path: "/vlog",
    component: _d8fd45e8,
    name: "vlog"
  }, {
    path: "/article/:article_id?",
    component: _42853d08,
    name: "article-article_id"
  }, {
    path: "/category/:category_slug?",
    component: _5cd663f0,
    name: "category-category_slug"
  }, {
    path: "/date/:date?",
    component: _4693152c,
    name: "date-date"
  }, {
    path: "/search/:keyword?",
    component: _59c94dba,
    name: "search-keyword"
  }, {
    path: "/tag/:tag_slug?",
    component: _11ad3f4c,
    name: "tag-tag_slug"
  }, {
    path: "/",
    component: _40d25678,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
