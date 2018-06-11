<template lang="pug">
  nav.navbar(:class="navClass" role="navigation")
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

<script>
export default {
  data () {
    return {
      scrollY: 0,
      limit: 52
    }
  },

  computed: {
    navClass () {
      return {
        'is-fixed-top': this.scrollY >= this.limit,
        'is-transparent': this.scrollY < this.limit
      }
    }
  },

  methods: {
    setScrollY () {
      this.scrollY = window.pageYOffset
    }
  },

  mounted () {
    window.addEventListener('scroll', this.setScrollY)
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/bulma-custom-variables';

nav.navbar {
  transition: background-color .5s;
  box-shadow: 0 4px 5px -2px rgba(0,0,0,.22), 0 2px 1px -1px rgba(0,0,0,.05);

  &.is-transparent {
    background-color: transparent;
    height: $custom-navbar-heigth;
    box-shadow: none;
  }
}
</style>
