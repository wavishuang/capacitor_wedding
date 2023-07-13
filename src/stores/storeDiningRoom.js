import { defineStore } from 'pinia'

export const useStoreDiningRoom = defineStore('storeDiningRoom', {
  state: () => {
    return {
      diningRooms: [
        {id: 1, imgs: [], title: '台北寒舍艾美酒店宴會廳', address: '110台北市信義區松仁路38號3樓', map:'https://www.google.com/maps/place/%E5%8F%B0%E5%8C%97%E5%AF%92%E8%88%8D%E8%89%BE%E7%BE%8E%E9%85%92%E5%BA%97%E5%AE%B4%E6%9C%83%E5%BB%B3/@25.0381216,121.5657641,17z/data=!3m1!5s0x3442abba4f6042b1:0xf72c194d34669026!4m6!3m5!1s0x3442abba50d70b7b:0x2c7209c4da98fd7!8m2!3d25.0381168!4d121.5679528!16s%2Fg%2F1261y_q38'},
        {id: 2, imgs: [], title: '鉅星匯國際宴會廳', address: '10491台北市中山區新生北路二段28號2樓', map:'https://www.google.com/maps/place/%E9%89%85%E6%98%9F%E5%8C%AF%E5%9C%8B%E9%9A%9B%E5%AE%B4%E6%9C%83%E5%BB%B3/@25.0540516,121.5249247,17z/data=!3m2!4b1!5s0x3442a967b5c6543f:0x6ed6d5aaf6b609a4!4m6!3m5!1s0x3442a9f52196d72b:0x1293e9949ec95597!8m2!3d25.0540468!4d121.5271134!16s%2Fg%2F11fjz36k5p?authuser=0'},
        {id: 3, imgs: [], title: '長榮桂冠酒店宴會廳', address: '10491台北市中山區松江路63號1樓', map:'https://www.google.com/maps/place/%E5%AE%B4%E6%9C%83%E5%BB%B3+-+%E9%95%B7%E6%A6%AE%E6%A1%82%E5%86%A0%E9%85%92%E5%BA%97+%E5%8F%B0%E5%8C%97/@25.0488834,121.5288023,17z/data=!3m1!5s0x3442a963c4fd3449:0x3727ba762818d17a!4m10!1m2!2m1!1z6ZW35qau5qGC5Yag6YWS5bqX!3m6!1s0x3442a963c51f0a1d:0x88b17613c407dbe0!8m2!3d25.0488472!4d121.533265!15sChLplbfmpq7moYLlhqDphZLlupdaFiIU6ZW35qauIOahguWGoCDphZLlupeSAQxiYW5xdWV0X2hhbGzgAQA!16s%2Fg%2F11f386h551?authuser=0'},
        {id: 4, imgs: [], title: 'Grand Ballroom 凱悅廳', address: '110台北市信義區松壽路2號3樓', map:'https://www.google.com/maps/place/Grand+Ballroom+%E5%87%B1%E6%82%85%E5%BB%B3/@25.0352803,121.5604139,17z/data=!3m1!5s0x3442abb7a7f759e9:0x6898d79a439e0180!4m10!1m2!2m1!1sGrand+Ballroom!3m6!1s0x3442abb7a75a2dc9:0xbdca5b97b88bc66f!8m2!3d25.0352658!4d121.5626026!15sCg5HcmFuZCBCYWxscm9vbVoQIg5ncmFuZCBiYWxscm9vbZIBDGJhbnF1ZXRfaGFsbOABAA!16s%2Fg%2F11b63c15sr?authuser=0'},
        {id: 5, imgs: [], title: '彭園台北館', address: '110台北市信義區忠孝東路五段297號5樓、6樓', map:'https://www.google.com/maps/place/%E5%BD%AD%E5%9C%92%E5%8F%B0%E5%8C%97%E9%A4%A8/@25.0411684,121.5690293,17z/data=!4m10!1m2!2m1!1z5ama5a605pyD6aSo!3m6!1s0x3442aba36939324f:0x71260f1793fa7d04!8m2!3d25.0411684!4d121.5734067!15sCgzlqZrlrrTmnIPppKhaDyIN5ama5a60IOacg-mkqJIBDXdlZGRpbmdfdmVudWWaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTnhiVXAxV1VSM0VBReABAA!16s%2Fg%2F1tgdqv3b?authuser=0'},
        {id: 6, imgs: [], title: '徐州路2號庭園會館', address: '100台北市中正區徐州路2號', map:'https://www.google.com/maps/place/%E5%BE%90%E5%B7%9E%E8%B7%AF2%E8%99%9F%E5%BA%AD%E5%9C%92%E6%9C%83%E9%A4%A8/@25.0408528,121.48587,14z/data=!4m10!1m2!2m1!1z5ama5a605pyD6aSo5Lit5q2j5Y2A!3m6!1s0x3442a976b82a6343:0xebdefa61d17726a4!8m2!3d25.0408528!4d121.5208889!15sChXlqZrlrrTmnIPppKjkuK3mraPljYBaGiIY5ama5a60IOacg-mkqCDkuK3mraMg5Y2AkgENd2VkZGluZ192ZW51ZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSQ2RFNTVVVVJuRUFF4AEA!16s%2Fg%2F1tf21smd?authuser=0'},
        {id: 7, imgs: [], title: '水源婚宴會館', address: '100台北市中正區思源街16號', map:'https://www.google.com/maps/place/%E6%B0%B4%E6%BA%90%E5%A9%9A%E5%AE%B4%E6%9C%83%E9%A4%A8+%E5%85%AC%E9%A4%A8%E5%BA%97/@25.0408528,121.48587,14z/data=!4m10!1m2!2m1!1z5ama5a605pyD6aSo5Lit5q2j5Y2A!3m6!1s0x3442a98c9f01e7af:0xa0f269377fe2fc46!8m2!3d25.0138243!4d121.5303176!15sChXlqZrlrrTmnIPppKjkuK3mraPljYBaGiIY5ama5a60IOacg-mkqCDkuK3mraMg5Y2AkgEKcmVzdGF1cmFudJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOemVrMVBUbFYzRUFF4AEA!16s%2Fg%2F11b7wc5zd7?authuser=0'},
        {id: 8, imgs: [], title: '君品酒店5樓國際宴會廳', address: '103台北市大同區承德路一段3號', map:'https://www.google.com/maps/place/%E5%90%9B%E5%93%81%E9%85%92%E5%BA%975%E6%A8%93%E5%9C%8B%E9%9A%9B%E5%AE%B4%E6%9C%83%E5%BB%B3/@25.0410042,121.48587,14z/data=!3m1!5s0x3442a96dbd7b615f:0xfbdf3f86c4db5661!4m10!1m2!2m1!1z5Y-w5YyX5biC5aSn5ZCM5Y2A5ama5a605pyD6aSo!3m6!1s0x3442a96c56791241:0x540e1ed5ea53fe6e!8m2!3d25.0494198!4d121.5171207!15sCh7lj7DljJfluILlpKflkIzljYDlqZrlrrTmnIPppKhaJSIj5Y-w5YyXIOW4giDlpKflkIwg5Y2AIOWpmuWutCDmnIPppKiSAQxiYW5xdWV0X2hhbGyaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUlROR1ZJY25WblJSQULgAQA!16s%2Fg%2F11f3n1zpn5?authuser=0'},
        {id: 9, imgs: [], title: '晶宴會館', address: '10491台北市中山區民權東路三段2號B1', map:'https://www.google.com/maps/place/%E6%99%B6%E5%AE%B4%E6%9C%83%E9%A4%A8-%E6%B0%91%E6%AC%8A%E9%A4%A8+%7C+%E5%A9%9A%E5%AE%B4%E6%9C%83%E9%A4%A8+%7C+%E5%A9%9A%E5%AE%B4%E5%A0%B4%E5%9C%B0/@25.0410042,121.48587,14z/data=!4m11!1m3!2m2!1z5Y-w5YyX5biC5aSn5ZCM5Y2A5ama5a605pyD6aSo!6e5!3m6!1s0x3442abe1bfd64e9f:0x7c9163ad3901204!8m2!3d25.0620876!4d121.5377774!15sCh7lj7DljJfluILlpKflkIzljYDlqZrlrrTmnIPppKhaJSIj5Y-w5YyXIOW4giDlpKflkIwg5Y2AIOWpmuWutCDmnIPppKiSAQ13ZWRkaW5nX3ZlbnVlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJDZDB3MmFFMTNFQUXgAQA!16s%2Fg%2F1tffx5vd?authuser=0'},
        {id: 10, imgs: [], title: '翡麗詩莊園', address: '105台北市松山區敦化北路232號', map:'https://www.google.com/maps/place/%E7%BF%A1%E9%BA%97%E8%A9%A9%E8%8E%8A%E5%9C%92/@25.0410799,121.48587,14z/data=!3m1!5s0x3442abef9cb570f1:0xfb4f3d41ae50d519!4m10!1m2!2m1!1z5Y-w5YyX5biC5p2-5bGx5Y2A5ama5a605pyD6aSo!3m6!1s0x3442abef8328758b:0xc1084ecde0b886db!8m2!3d25.0593069!4d121.549087!15sCh7lj7DljJfluILmnb7lsbHljYDlqZrlrrTmnIPppKhaJSIj5Y-w5YyXIOW4giDmnb7lsbEg5Y2AIOWpmuWutCDmnIPppKiSAQ13ZWRkaW5nX3ZlbnVl4AEA!16s%2Fg%2F11c1pgwgl4?authuser=0'},
      ]
    }
  },
  // actions: {
    // init() {
    //   onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       this.user.id = user.uid
    //       this.user.email = user.email
    //       this.router.push('/')
    //     } else {
    //       this.user = {}
    //       this.router.replace('/auth')
    //     }
    //   })
    // },
    // registerUser(credentials) {
    //   createUserWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
    //     const user = userCredential.user
    //   }).catch((error) => {
    //     console.log('error.message:', error.message)
    //   })
    // },
    // loginUser(credentials) {
    //   console.log('User logged in', credentials)
    //   signInWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
    //     const user = userCredential.user
    //     console.log('user:', user)
    //   }).catch((error) => {
    //     console.log('error.message:', error.message)
    //   })
    // },
    // logoutUser() {
    //   console.log('logout User')
    //   signOut(auth).then(() => {
    //     console.log('User signed out')
    //   }).catch((error) => {
    //     console.log('error.message:', error.message)
    //   })
    // }
  // },
})
