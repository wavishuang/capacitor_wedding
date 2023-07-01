<template>
  <header class="is-full">
    <div class="img-cover logo">
      <img src="@/assets/logo_b.png" />
    </div>

    <div class="tel-text">
      02-77099959
    </div>
  </header>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

header {
  color: #fff;
  margin: 0 0 2.60416vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header .img-cover.logo {
  line-height: 1;
  // width: 16.77083vw;
  max-width: 322px;

  img {
    vertical-align: top;
  }
}

header .tel-text {
  text-align: left;
  font-family: Libre Baskerville;
  font-size: 2.1354vw;
  line-height: 2.60416vw;
  font-weight: 600;
  letter-spacing: 2.05px;
  color: #EDE5DF;
  opacity: 1;
}
</style>