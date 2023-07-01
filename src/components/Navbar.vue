<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a role="button" class="navbar-burger burgur-mobile" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </a>

      <router-link to="/" class="navbar-item">
        <img src="@/assets/logo_b.png" class="logo-desktop" />
        <img src="@/assets/logo.png" class="logo-mobile" />
      </router-link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <a class="btn btn-link" href="tel:+886-2-77099959">
            <strong>02-77099959</strong>
          </a>
          <!-- <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

.navbar {
  background-color: transparent;
  margin-bottom: 2.60416vw;
}

.navbar-brand {
  .navbar-item {
    line-height: 1;
    max-width: 322px;
    padding: 0;
    img {
      width: 100%;
      vertical-align: top;
      max-height: initial;
    }
  }
}

.navbar-end {
  align-items: flex-end;
  .navbar-item:has(.btn) {
    padding: 0;
  }
  .btn {
    &.btn-link {
      text-align: left;
      font-family: Libre Baskerville;
      font-size: 41px; //2.1354vw;
      line-height: 50px; // 2.60416vw;
      font-weight: 600;
      letter-spacing: 2.05px;
      color: #EDE5DF;
      opacity: 1;
    }
  }
}

.logo-mobile,
.burgur-mobile {
  display: none;
}

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
  }

  .navbar-burger {
    margin-left: initial;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: #4C4053;
  }
}
</style>