<template>
  <div class="layout">
    <RouterView />
  </div>
  

  <!-- <footer class="footer">
    <div class="content has-text-centered">
      <font-awesome-icon icon="fa-solid fa-caret-left" />
      <font-awesome-icon icon="fa-solid fa-home" />
      <font-awesome-icon icon="fa-solid fa-coffee" />
      <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
    </div>
  </footer> -->
</template>

<script setup>
  /**
   * imports
  */
    import { Capacitor } from '@capacitor/core'
    import { App } from '@capacitor/app'
    import { useDetectBrowser, useExitApp, useToast } from '@/compositions/app.js'
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
</script>

<style lang="scss">
* {
  boxing-size: border-box;
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
}
</style>
