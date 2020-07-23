import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_workbox_4b60ccf6 from 'nuxt_plugin_workbox_4b60ccf6' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_nuxticons_a7cae9a4 from 'nuxt_plugin_nuxticons_a7cae9a4' // Source: ./nuxt-icons.js (mode: 'all')
import nuxt_plugin_axios_64cef34c from 'nuxt_plugin_axios_64cef34c' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_compositionapi_f2a0457e from 'nuxt_plugin_compositionapi_f2a0457e' // Source: ../plugins/composition-api (mode: 'all')
import nuxt_plugin_polyfill_14930cc5 from 'nuxt_plugin_polyfill_14930cc5' // Source: ../plugins/polyfill (mode: 'client')
import nuxt_plugin_loadedtask_6904bdd2 from 'nuxt_plugin_loadedtask_6904bdd2' // Source: ../plugins/loaded-task (mode: 'all')
import nuxt_plugin_extend_69be2be0 from 'nuxt_plugin_extend_69be2be0' // Source: ../plugins/extend (mode: 'all')
import nuxt_plugin_marked_50fa81bc from 'nuxt_plugin_marked_50fa81bc' // Source: ../plugins/marked (mode: 'all')
import nuxt_plugin_highlight_4736f5fe from 'nuxt_plugin_highlight_4736f5fe' // Source: ../plugins/highlight (mode: 'all')
import nuxt_plugin_lozad_343857f8 from 'nuxt_plugin_lozad_343857f8' // Source: ../plugins/lozad (mode: 'client')
import nuxt_plugin_favico_68dac6e0 from 'nuxt_plugin_favico_68dac6e0' // Source: ../plugins/favico (mode: 'client')
import nuxt_plugin_swiper_3a1c5924 from 'nuxt_plugin_swiper_3a1c5924' // Source: ../plugins/swiper (mode: 'client')
import nuxt_plugin_analytics_0ae804d0 from 'nuxt_plugin_analytics_0ae804d0' // Source: ../plugins/analytics (mode: 'client')
import nuxt_plugin_emoji233333_611cbc5e from 'nuxt_plugin_emoji233333_611cbc5e' // Source: ../plugins/emoji-233333 (mode: 'client')
import nuxt_plugin_copyright_130619ba from 'nuxt_plugin_copyright_130619ba' // Source: ../plugins/copy-right (mode: 'client')
import nuxt_plugin_popup_33c7e214 from 'nuxt_plugin_popup_33c7e214' // Source: ../plugins/popup (mode: 'client')
import nuxt_plugin_amplitude_88b9f466 from 'nuxt_plugin_amplitude_88b9f466' // Source: ../plugins/amplitude (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp (ssrContext) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  const registerModule = store.registerModule
  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({ preserveState: process.client }, options))

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Hooyim.com - 來苏之望，念狂梦猖","titleTemplate":"%s | Hooyim.com","htmlAttrs":{"xmlns":"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxhtml","lang":"zh"},"meta":[{"charset":"utf-8"},{"http-equiv":"cleartype","content":"on"},{"http-equiv":"x-dns-prefetch-control","content":"on"},{"name":"author","content":"yanhao0130@hotmail.com"},{"name":"MobileOptimized","content":"320"},{"name":"HandheldFriendly","content":"True"},{"name":"apple-mobile-web-app-capable","content":"yes"},{"name":"apple-mobile-web-app-status-bar-style","content":"black"},{"name":"apple-mobile-web-app-title","content":"Hooyim.com"},{"name":"apple-touch-icon","content":"\u002Fstatic\u002Ficon.png"},{"name":"msapplication-TileImage","content":"\u002Fstatic\u002Ficon.png"},{"name":"msapplication-TileColor","content":"#0088f5"},{"name":"format-detection","content":"telephone=no"},{"name":"viewport","content":"width=device-width, initial-scale=1.0, user-scalable=no"},{"hid":"keywords","name":"keywords","content":"Hooyim,严浩,跨平台开发者,前端技术开发,javascript技术"},{"hid":"description","name":"description","content":"凡心所向，素履所往，生如逆旅，一苇以航"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"theme-color","name":"theme-color","content":"#0088f5"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"Hooyim.com"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"Hooyim.com"},{"hid":"og:description","name":"og:description","property":"og:description","content":"來苏之望，念狂梦猖"},{"hid":"og:image","name":"og:image","property":"og:image","content":"https:\u002F\u002Fcdn.hooyim.com\u002F_nuxt\u002Ficons\u002Ficon_512.a26888.png"},{"hid":"og:image:width","name":"og:image:width","property":"og:image:width","content":512},{"hid":"og:image:height","name":"og:image:height","property":"og:image:height","content":512},{"hid":"og:image:type","name":"og:image:type","property":"og:image:type","content":"image\u002Fpng"}],"link":[{"rel":"dns-prefetch","href":"\u002F\u002Fwww.hooyim.com"},{"rel":"dns-prefetch","href":"\u002F\u002Fapi.hooyim.com"},{"rel":"dns-prefetch","href":"\u002F\u002Fcdn.hooyim.com"},{"rel":"dns-prefetch","href":"\u002F\u002Fstatic.hooyim.com"},{"rel":"dns-prefetch","href":"\u002F\u002Fat.alicdn.com"},{"rel":"dns-prefetch","href":"\u002F\u002Ffonts.gstatic.com"},{"rel":"dns-prefetch","href":"\u002F\u002Ffonts.googleapis.com"},{"rel":"dns-prefetch","href":"\u002F\u002Fgoogleads.g.doubleclick.net"},{"rel":"dns-prefetch","href":"\u002F\u002Fwww.google-analytics.com"},{"rel":"dns-prefetch","href":"\u002F\u002Ftpc.googlesyndication.com"},{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"author","type":"text\u002Fplain","href":"\u002Fhumans.txt"},{"rel":"manifest","href":"https:\u002F\u002Fcdn.hooyim.com\u002F_nuxt\u002Fmanifest.1fd9e9e0.json"},{"rel":"shortcut icon","href":"https:\u002F\u002Fcdn.hooyim.com\u002F_nuxt\u002Ficons\u002Ficon_16.a26888.png"},{"rel":"apple-touch-icon","href":"https:\u002F\u002Fcdn.hooyim.com\u002F_nuxt\u002Ficons\u002Ficon_512.a26888.png","sizes":"512x512"}],"noscript":[{"innerHTML":"This website requires JavaScript."}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  const inject = function (key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Plugin execution

  if (process.client && typeof nuxt_plugin_workbox_4b60ccf6 === 'function') {
    await nuxt_plugin_workbox_4b60ccf6(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxticons_a7cae9a4 === 'function') {
    await nuxt_plugin_nuxticons_a7cae9a4(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_64cef34c === 'function') {
    await nuxt_plugin_axios_64cef34c(app.context, inject)
  }

  if (typeof nuxt_plugin_compositionapi_f2a0457e === 'function') {
    await nuxt_plugin_compositionapi_f2a0457e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_polyfill_14930cc5 === 'function') {
    await nuxt_plugin_polyfill_14930cc5(app.context, inject)
  }

  if (typeof nuxt_plugin_loadedtask_6904bdd2 === 'function') {
    await nuxt_plugin_loadedtask_6904bdd2(app.context, inject)
  }

  if (typeof nuxt_plugin_extend_69be2be0 === 'function') {
    await nuxt_plugin_extend_69be2be0(app.context, inject)
  }

  if (typeof nuxt_plugin_marked_50fa81bc === 'function') {
    await nuxt_plugin_marked_50fa81bc(app.context, inject)
  }

  if (typeof nuxt_plugin_highlight_4736f5fe === 'function') {
    await nuxt_plugin_highlight_4736f5fe(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_lozad_343857f8 === 'function') {
    await nuxt_plugin_lozad_343857f8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_favico_68dac6e0 === 'function') {
    await nuxt_plugin_favico_68dac6e0(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_swiper_3a1c5924 === 'function') {
    await nuxt_plugin_swiper_3a1c5924(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_analytics_0ae804d0 === 'function') {
    await nuxt_plugin_analytics_0ae804d0(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_emoji233333_611cbc5e === 'function') {
    await nuxt_plugin_emoji233333_611cbc5e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_copyright_130619ba === 'function') {
    await nuxt_plugin_copyright_130619ba(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_popup_33c7e214 === 'function') {
    await nuxt_plugin_popup_33c7e214(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_amplitude_88b9f466 === 'function') {
    await nuxt_plugin_amplitude_88b9f466(app.context, inject)
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
