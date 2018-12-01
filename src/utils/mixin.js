// import Vue from 'vue'
import { mapState } from "vuex";

// const mixinsComputed = Vue.config.optionMergeStrategies.computed
// const mixinsMethods = Vue.config.optionMergeStrategies.methods

const mixin = {
  computed: {
    ...mapState({
      layoutMode: state => state.app.layout,
      navTheme: state => state.app.theme,
      primaryColor: state => state.app.color,
      colorWeak: state => state.app.weak,
      fixedHeader: state => state.app.fixedHeader,
      fixSiderbar: state => state.app.fixSiderbar,
      contentWidth: state => state.app.contentWidth,
      autoHideHeader: state => state.app.autoHideHeader,
      sidebarOpened: state => state.app.sidebarOpened
    })
  }
}

const mixinDevice = {
  computed: {
    ...mapState({
      device: state => state.app.device,
    })
  },
  methods: {
    isMobile () {
      return this.device === 'mobile'
    },
    isDesktop () {
      return this.device === 'desktop'
    }
  }
}

export { mixin, mixinDevice }