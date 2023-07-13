<template>
  <nav 
    class="navbar" 
    role="navigation" 
    aria-label="main navigation"
  >
    <div 
      class="navbar-brand"
      :class="{'is-center' : route.path === '/'}"
    >
      <!-- <a 
        role="button" 
        class="navbar-burgur burgur-mobile"
        :class="{'isHide' : route.path === '/'}"
        aria-label="menu" 
        aria-expanded="false" 
        data-target="navbarBasicExample"
      >
        <font-awesome-icon icon="fa-solid fa-bars" />
      </a> -->

      <RouterLink to="/" class="navbar-item">
        <img src="@/assets/logo.png" />
      </RouterLink>

      <!-- <a
        @click.prevent="showMobileNav = !showMobileNav"
        role="button" 
        class="navbar-burgur"
        :class="{'is-active' : showMobileNav, 'is-hide' : route.path === '/'}"
        aria-label="menu" 
        aria-expanded="false" 
        data-target="navbarBasicExample"
        ref="navbarBurgerRef"
      >
        <font-awesome-icon icon="fa-solid fa-bars" />
      </a> -->
    </div>

    <!-- <div 
      id="navbarBasicExample" 
      class="navbar-menu"
      :class="{'is-active' : showMobileNav}"
      ref="navbarMenuRef"
    >
      <div class="navbar-end">
        <div class="navbar-item">
          <a 
            class="btn btn-link" 
            href="tel:+886-2-77099959"
          >
            <strong>02-77099959</strong>
          </a>
        </div>
      </div>
    </div> -->
  </nav>
</template>

<script setup>
  /**
    * imports
  */
    import { ref } from 'vue'
    import { onClickOutside } from '@vueuse/core'
    import { useRoute } from 'vue-router'
  
  /**
   * route
   */
    const route = useRoute()

  /**
    * mobile nav
  */
    const showMobileNav = ref(false)

  /**
    * click outside to close
  */
    const navbarMenuRef = ref(null)
    const navbarBurgerRef = ref(null)

    onClickOutside(navbarMenuRef, () => showMobileNav.value = false, {
      ignore: [navbarBurgerRef]
    })
</script>

<style lang="scss" scoped>
.navbar {
  background-color: transparent;
  height: 6.35416vw;
  margin-bottom: 0;
}

.navbar-brand {
  .navbar-item {
    padding: 0;
    img {
      width: 255px;
      height: 46px;
    }
  }
}

// .navbar-end {
//   align-items: flex-end;
//   .navbar-item:has(.btn) {
//     padding: 0;
//   }
//   .btn {
//     &.btn-link {
//       text-align: left;
//       font-family: Libre Baskerville;
//       font-size: 41px; //2.1354vw;
//       line-height: 50px; // 2.60416vw;
//       font-weight: 600;
//       letter-spacing: 2.05px;
//       color: #EDE5DF;
//       opacity: 1;
//     }
//   }
// }

// .logo-mobile,
// .burgur-mobile {
//   display: none;
// }

// .navbar-burgur {
//   &.is-hide {
//     display: none;
//   }
// }

@media screen and (max-width: 1023px) {
  .logo-desktop {
    display: none;
  }
  .logo-mobile,
  .burgur-mobile {
    display: block;
  }
  .burgur-mobile {
    visibility: hidden;
  }

  .navbar {
    height: 65px;
    margin-bottom: 0;
    background-color: #fff;
    padding: 0 5px;
  }

  .navbar-brand {
    height: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    .navbar-item {
      max-width: 205px;
    }

    &.is-center {
      justify-content: center;
    }
  }

  .navbar-burgur {
    margin-left: initial;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: #4C4053;
  }
}
</style>