<template>
  <div 
    class="home max-width-1024 has-background-white"
    ref="homeRef"
  >
    <Header />

    <div class="columns is-centered has-background-white mx-0">
      <LeftSide class="column is-5 pt-6 px-0" />
      <RightSide 
        class="column is-7 pt-6 px-4" 
      />
    </div>

    <div class="fixed-go-top">
      <i @click="backToTop">Top</i>
      <!-- 退出 App -->
      <i v-if="platForm === 'android'" class="hidden-desktop" @click.prevent="showModal = true">
        <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
      </i>
      <!-- 下載 apk -->
      <a v-if="platForm === 'web' && isAndroid" href="/app-myresume.apk">
        <font-awesome-icon icon="fa-solid fa-download" />
      </a>
    </div>
  </div>
  <ModalLogout 
    v-if="showModal"
    v-model="showModal"
  />
</template>

<script setup>
  /**
  * imports
  */
    import Header from '@/components/Header.vue'
    import LeftSide from '@/components/LeftSide.vue'
    import RightSide from '@/components/RightSide.vue'
    import { ref } from 'vue'

    import { Capacitor } from '@capacitor/core'
    import { App } from '@capacitor/app'
    import { useDetectBrowser, useExitApp } from '@/compositions/app.js'

    import ModalLogout from '@/components/ModalLogout.vue'
  

  /**
  * home ref
  */
    const homeRef = ref(null)

  /**
  * Capacitor platform
  */
    const { isQuit, addCountdown } = useExitApp()
    const { isIOS, isAndroid, isMobile } = useDetectBrowser() 

    const platForm = Capacitor.getPlatform()

    import { Toast } from '@capacitor/toast';

    const showToast = async (showText) => {
      await Toast.show({
        text: showText,
      })
    }

    const exitMyApp = () => {
      if(isQuit.value) {
        App.exitApp()
      } else {
        showToast('再按一次退出程序aaa')
        isQuit.value = true
        addCountdown()
      }
    }
  
    /** 安卓"返回鍵"按兩次"退出" */
    if(platForm === 'android') {
      App.addListener('backButton', exitMyApp)
    }

  /**
  * go to top
  */
    const backToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }

  /**
  * modals
  */
    const showModal = ref(false)
</script>

<style>
.max-width-1024 {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
}

.fixed-go-top {
  position: fixed;
  bottom: 15%;
  right: 25px;
}

.fixed-go-top i,
.fixed-go-top a {
  width: 60px;
  height: 60px;
  font-size: 25px;
  border-radius: 50%;
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #c8a063;
  color: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.5);
  margin-top: 1rem;
}

@media (min-width: 768px) {
  .hidden-desktop {
    display: none !important;
  }
}

@media (max-width: 767px) {
  .fixed-go-top i,
  .fixed-go-top a {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
}
</style>


