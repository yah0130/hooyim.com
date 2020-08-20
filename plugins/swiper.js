/**
 * @file vue-awesome-swiper / ES module
 * @module plugins/swiper
 * @author Hooyim <https://github.com/yah0130>
 */

import Vue from 'vue'
import { Swiper, Pagination, Mousewheel, Autoplay } from 'swiper/js/swiper.esm'
import exporter from 'vue-awesome-swiper/dist/exporter'

Swiper.use([Pagination, Mousewheel, Autoplay])
Vue.use(exporter(Swiper))
