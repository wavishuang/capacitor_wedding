import { defineStore } from 'pinia'

export const useStoreCustomer = defineStore('storeCustomer', {
  state: () => {
    return {
      guestTitles: [
        { id: 1, text: '新郎親戚' },
        { id: 2, text: '新娘親戚' },
        { id: 3, text: '新郎同學' },
        { id: 4, text: '新娘同學' },
        { id: 5, text: '其他' },
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
