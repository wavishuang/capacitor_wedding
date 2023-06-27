import { ref, computed } from 'vue'
// import { useStore } from 'vuex'
import { Capacitor } from '@capacitor/core'
// import { ANDROID_VERSION, IOS_VERSION, versionFormat } from '@/utils'

// 再按一次退出程序
export function useExitApp() {
  const isQuit = ref(false)

  const quitSecond = 2 // 退出秒數
  let countdown = quitSecond
  const addCountdown = () => {
    setTimeout(() => {
      if(countdown > 0) {
        countdown--
        addCountdown()
      } else {
        isQuit.value = false
        countdown = quitSecond
      }
    }, 1000)
  }

  return {
    isQuit,
    addCountdown
  }
}

export function usePlatform() {
  // 當前運行的平台
  const platForm = Capacitor.getPlatform()

  // 
  const isIOS = ref('')
  // const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)

  if(platForm === 'ios' || /iPhone/i.test(navigator.userAgent)) { // ios app 包含iphone(safari)
    isIOS.value = 'ios'
  } else if(/Android/i.test(navigator.userAgent)) {
    isIOS.value = 'android'
  } else {
    isIOS.value = 'web'
  }

  return {
    platForm,
    isIOS
  }
}

// 檢查是否是 iOS 系統(包含iphone safari)
// export function useCheckIOSSystem() {
//   const platForm = Capacitor.getPlatform()
//   const isIOS = ref('')
//   // const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)

//   if(platForm === 'ios' || /iPhone/i.test(navigator.userAgent)) { // ios app 包含iphone(safari)
//     isIOS.value = 'ios'
//   } else if(/Android/i.test(navigator.userAgent)) {
//     isIOS.value = 'android'
//   } else {
//     isIOS.value = 'web'
//   }

//   return { 
//     isIOS
//   }
// }

export function useDetectBrowser() {
  const isAndroid = navigator.userAgent.match(/Android/i)
  const isBlackBerry = navigator.userAgent.match(/BlackBerry/i)
  const isIOS = navigator.userAgent.match(/iPhone|iPad|iPod/i)
  const isOpera = navigator.userAgent.match(/Opera Mini/i)
  const isWindow = navigator.userAgent.match(/IEMobile/i)

  const isMobile = computed(() => isAndroid || isBlackBerry || isIOS || isOpera || isWindow)

  const iOSversion = () => {
    let d, v
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
      v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/)
      d = {
        status: true,
        version: parseInt(v[1], 10) , 
        info: parseInt(v[1], 10)+'.'+parseInt(v[2], 10)+'.'+parseInt(v[3] || 0, 10)
      }
    } else {
      d = {
        status:false, 
        version: false, 
        info:''
      }
    }

    return d
  }

  return {
    isAndroid, isBlackBerry, isIOS, isOpera, isWindow,
    isMobile, iOSversion
  }
}

export function useBrowser() {
  const browserIs = ref('')
  const userAgent = navigator.userAgent; //取得瀏覽器的userAgent字串

  if (userAgent.indexOf("Opera") > -1) {
    browserIs.value = "Opera"
  } //判斷是否Opera瀏覽器
  if (userAgent.indexOf("Firefox") > -1) {
    browserIs.value = "FF" //判斷是否Firefox瀏覽器
  }
  if (userAgent.indexOf("Chrome") > -1) {
    browserIs.value = "Chrome"
  }
  if (userAgent.indexOf("Safari") > -1 && browserIs.value !== "Chrome") {
    browserIs.value = "Safari" //判斷是否Safari瀏覽器
  }
  if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && browserIs.value !== "Opera") browserIs.value = "IE" //判斷是否IE瀏覽器

  return { browserIs }
}

// IOS & Android 檢查新版本
// export function useCheckAppVer() {
//   const store = useStore()
//   const updateFlag = ref(false)
//   const downloadFile = ref('')
//   const platForm = Capacitor.getPlatform()

//   if(platForm === 'ios' || platForm === 'android') {
//     store.dispatch('about/appLatestVersion').then(res => {
//       if(res && res.android && res.ios) {
//         const resAndroidVersion = Number(versionFormat(res.android))
//         const resIosVersion = Number(versionFormat(res.ios))

//         // Apple超級簽
//         if(platForm === 'ios' && IOS_VERSION < resIosVersion) {
//           store.dispatch('promotions/getSuperUrl').then(res => {
//             if(res.success) {
//               downloadFile.value = res.data
//               updateFlag.value = true
//             }
//           })
//         }
        
//         // 安卓APK
//         if(platForm === 'android' && ANDROID_VERSION < resAndroidVersion) {
//           downloadFile.value = res.android
//           updateFlag.value = true
//         }
//       }
//     })
//   }

//   return {
//     updateFlag,
//     downloadFile,
//     IOS_VERSION,
//     ANDROID_VERSION
//   }
// }

// export function useAppInfo() {
//   const store = useStore()

//   store.dispatch('promotions/getAppUrl')
//   store.dispatch('promotions/getSuperUrl')
//   store.dispatch('about/webLatestVersion')

//   const appUrl = computed(() => store.state.promotions.appUpload)
//   const superUrl = computed(() => store.state.promotions.superUrl)
//   const webVersion =computed(() => store.state.about.webVersion || '0.0.0')
//   const appVersion = computed(() => store.state.about.appVersion || '0.0.0')

//   const version = versionStr => {
//     if(versionStr.length) {
//       const strStart = versionStr.indexOf('App_v') + 5
//       let strEnd = 0
      
//       if(versionStr.indexOf('ipa') !== -1) {
//         strEnd = versionStr.indexOf('.ipa')
//       }

//       if(versionStr.indexOf('apk') !== -1) {
//         strEnd = versionStr.indexOf('.apk')
//       }

//       const str = versionStr.substring(strStart, strEnd).split('').join('.')

//       return 'v'+ str
//     }

//     return ''
//   }

//   const androidVersion = computed(() => {
//     if(appUrl.value.android.length) return version(appUrl.value.android)
//     return ''
//   })

//   const iosVersion = computed(() => {
//     if(appUrl.value.ios.length) return version(appUrl.value.ios)
//     return ''
//   })

//   return {
//     appUrl, superUrl,
//     androidVersion, iosVersion, webVersion, appVersion
//   }
// }

// 結合 useCheckAppVer & useAppInfo
// export function useAppInformation() {
//   const store = useStore()
//   const updateFlag = ref(false)
//   const downloadFile = ref('')
//   const platForm = Capacitor.getPlatform()

//   // 取得 Android | IOS 版本
//   const version = versionStr => {
//     if(versionStr.length) {
//       const strStart = versionStr.indexOf('App_v') + 5
//       let strEnd = 0
      
//       if(versionStr.indexOf('ipa') !== -1) {
//         strEnd = versionStr.indexOf('.ipa')
//       }

//       if(versionStr.indexOf('apk') !== -1) {
//         strEnd = versionStr.indexOf('.apk')
//       }

//       const str = versionStr.substring(strStart, strEnd).split('').join('.')

//       return 'v'+ str
//     }

//     return ''
//   }

//   store.dispatch('about/homeIntegrate').then(res => {
//     if(platForm === 'ios' || platForm === 'android') {
//       if(res && res.upload && res.upload.android && res.upload.ios) {
//         const resAndroidVersion = Number(versionFormat(res.upload.android))
//         const resIosVersion = Number(versionFormat(res.upload.ios))
  
//         // Apple超級簽 下載網址
//         if(platForm === 'ios' && IOS_VERSION < resIosVersion) {
//           downloadFile.value = res.superUrl
//           updateFlag.value = true
//         }

//         // 安卓APK
//         if(platForm === 'android' && ANDROID_VERSION < resAndroidVersion) {
//           downloadFile.value = res.upload.android
//           updateFlag.value = true
//         }
//       }
//     }
//   })

//   const appUrl = computed(() => store.state.about.appUpload)
//   const superUrl = computed(() => store.state.about.superUrl)
//   const webVersion =computed(() => store.state.about.webVersion || '0.0.0')
//   const appVersion = computed(() => store.state.about.appVersion || '0.0.0')
//   const androidVersion = computed(() => {
//     if(appUrl.value.android.length) return version(appUrl.value.android)
//     return ''
//   })

//   const iosVersion = computed(() => {
//     if(appUrl.value.ios.length) return version(appUrl.value.ios)
//     return ''
//   })

//   return {
//     updateFlag, downloadFile, IOS_VERSION, ANDROID_VERSION, appVersion,
//     androidVersion, iosVersion, webVersion, 
//     appUrl, superUrl, 
//   }
// }