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
        .colums
          .column.is-half.is-offset-one-quarter
            nav.level.is-mobile
              a.level-item.has-text-centered.has-text-white(href="https://www.facebook.com/wildcodeschool/", target="_blank")
                span.icon
                  i.fab.fa-facebook-f
                  
              a.level-item.has-text-centered.has-text-white(href="https://twitter.com/wildcodeschool", target="_blank")
                span.icon
                  i.fab.fa-twitter

              a.level-item.has-text-centered.has-text-white(href="https://www.linkedin.com/school/10387519?pathWildcard=10387519", target="_blank")
                span.icon
                  i.fab.fa-linkedin-in

              a.level-item.has-text-centered.has-text-white(href="https://www.youtube.com/channel/UCi99G_0QPx5sYsK8zdvQzfw", target="_blank")
                span.icon
                  i.fab.fa-youtube
                  
              a.level-item.has-text-centered.has-text-white(href="https://www.instagram.com/wildcodeschool/", target="_blank")
                span.icon
                  i.fab.fa-instagram

              a.level-item.has-text-centered.has-text-white(href="https://github.com/WildCodeSchool", target="_blank")
                span.icon
                  i.fab.fa-github
  
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
