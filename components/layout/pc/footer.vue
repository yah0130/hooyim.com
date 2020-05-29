<template>
  <footer id="footer" class="footer">
    <div class="container">
      <a
        target="_blank"
        rel="external nofollow noopener"
        href="http://www.beian.miit.gov.cn"
      >浙ICP备19018429号</a>
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <a
        class="sitemap-btn"
        href="/sitemap.xml"
        v-text="$i18n.nav.map"
      />
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <!-- english -->
      <span v-if="isEnLang">
        <span>Powered By</span>
        <a
          class="item"
          rel="external nofollow noopener"
          href="javascript:void(0);"
        >NodePress</a>
        <span>、</span>
        <a
          class="item"
          rel="external nofollow noopener"
          href="javascript:void(0);"
        >Nuxt.js</a>
        <span>and solitarily.&nbsp; Designed By</span>
        <nuxt-link to="/about">Me</nuxt-link>
      </span>
      <!-- chinese -->
      <span v-else>
        <span>由&nbsp;</span>
        <a
          class="item"
          rel="external nofollow noopener"
          href="javascript:void(0);"
        >NodePress</a>
        <span>、</span>
        <a
          class="item"
          rel="external nofollow noopener"
          href="javascript:void(0);"
        >Nuxt.js</a>
        <span>&nbsp;和&nbsp;日月星辰&nbsp;强力驱动&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <nuxt-link to="/about">吾之臂躯</nuxt-link>
        <span>&nbsp;行针步线</span>
      </span>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'PcFooter',
    computed: {
      isEnLang() {
        return this.$store.getters['global/isEnLang']
      }
    }
  }
</script>

<style lang="scss" scoped>
  .footer {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: $footer-height;
    margin-top: $lg-gap;
    user-select: none;
    @include module-blur-bg();

    .container {
      font-size: $font-size-h6;
      text-align: center;
      text-transform: uppercase;
    }
  }
</style>
