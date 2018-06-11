<template lang="pug">
  div
    sub-header
    navbar
    nuxt
    footer.footer.has-text-white
      .container
        .content.has-text-centered 
          | Made with
          span.icon.has-text-primary
            i.fas.fa-heart
          | by Wild Code School
  
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
