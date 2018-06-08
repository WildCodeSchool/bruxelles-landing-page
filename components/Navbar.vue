<template lang="pug">
  nav.navbar.is-transparent(role="navigation" arian-label="main navigation")
    .navbar-brand
      a.navbar-item
        img(
          src="~/assets/wcs_logo.png",
          alt="Wild Code School: formation développeur web à Bruxelles",
          width="50px",
          heigth="50px"
        )
    .navbar-menu.is-active
      .navbar-end
        .navbar-item
          a.button.is-primary(href="https://odyssey.wildcodeschool.fr/") {{ $t('actions.apply') }}
</template>

<style lang="scss" scoped>
@import '~assets/bulma-custom-variables';

nav.navbar.is-transparent {
  background-color: transparent;
  height: $custom-navbar-heigth;
}
</style>
