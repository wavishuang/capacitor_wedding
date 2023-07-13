<template>
  <div 
    class="layout"
    :class="'layout-' + page"
  >
    <RouterView />
  </div>
</template>

<script setup>
  /**
   * imports
  */
    import { Capacitor } from '@capacitor/core'
    import { App } from '@capacitor/app'
    import { useDetectBrowser, useExitApp, useToast } from '@/compositions/app.js'
    import { computed } from 'vue'
    import { useRoute } from 'vue-router'

  /**
  * Capacitor platform
  */
    const { isQuit, addCountdown } = useExitApp()
    const { isIOS, isAndroid, isMobile } = useDetectBrowser()
    const { showToast } = useToast()

    const platForm = Capacitor.getPlatform()

    const exitMyApp = () => {
      if(isQuit.value) {
        App.exitApp()
      } else {
        showToast('再按一次退出程序')
        isQuit.value = true
        addCountdown()
      }
    }
  
    /** 安卓"返回鍵"按兩次"退出" */
    if(platForm === 'android') {
      App.addListener('backButton', exitMyApp)
    }

  /**
   * route
  */
    const route = useRoute()

    const page = computed(() => route.path !== '/' ? route.path.split('/')[1] : '')
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');

@font-face {
	font-family: 'Source Han Serif TW Black';
	src: local("Source Han Serif TW"), url('./assets/fonts/NotoSerifCJKtc-Bold.otf') format('opentype');
}

* {
  box-sizing: border-box;
}

.layout {
  width: 100vw;
  height: 100vh;
  background-image: url(@/assets/main_bg3.png);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
  overflow-y: auto;

  &.layout-design {
    background-image: none;
    background-color: #F2F3F0;
    min-height: 52.08vw;
  }
}
</style>
