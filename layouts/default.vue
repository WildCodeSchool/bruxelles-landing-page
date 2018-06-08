<template lang="pug">
  div
    sub-header
    navbar
    nuxt
  
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import SubHeader from '~/components/SubHeader.vue'

export default {
  components: {
    Navbar,
    SubHeader
  }
}
</script>
