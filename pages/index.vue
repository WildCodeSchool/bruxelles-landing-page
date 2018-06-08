<template lang="pug">
  #index.content
    section.header.is-medium.hero.is-primary.is-bold
      .hero-body
        .container
          h1.title.is-1.is-size-3-mobile {{ $t('main_title') }}
          h2.subtitle.is-3.is-size-5-mobile
            | by 
            strong.wild Wild Code School 

    section.section.is-medium
      .container
        h2.title.has-text-centered {{ $t('section_1.title') }}
        p {{ $t('section_1.content') }}
        .field.is-vertical.has-text-centered
          h3 {{ $t('section_1.download_program')}}
          a.button.is-large(:href="PROGRAMM_URL", target="_blank")
            span.icon
              i.fas.fa-arrow-down
            span {{ $t('actions.download')}}

    section.section.is-medium.has-background-white-ter.has-text-centered
      .container
        h2.title {{ $t('section_2.title') }}
        h3.subtitle {{ $t('section_2.subtitle') }}
        p {{ $t('section_2.content') }}
        a.button.is-primary.is-large(href="https://odyssey.wildcodeschool.fr/")
          span.icon
            i.fas.fa-arrow-right
          span.strong {{ $t('actions.apply') }}

    section.image__divider

    section.section.is-medium
      .container
        h2.title.has-text-centered {{ $t('section_3.title') }}
        p {{ $t('section_3.main_content') }}
      .columns
        .column(v-for='(image, imageIndex) in images', :key='imageIndex', @click='galleryIndex = imageIndex')
          img(:src="image")

      .container
        .columns
          .column
            googlemaps-map(:center="COORD", :zoom="12", :options="GG_MAP_OPT")
              googlemaps-marker(:position="COORD")
          .column.content
            h3 {{ $t('section_3.access.title') }}
            ul
              li(v-for="(access, index) in $t('section_3.access.list')") {{ access }}

    section.section.is-medium.has-background-white-ter
      .container
        h2.title.has-text-centered {{ $t('section_4.title') }}
        .columns
          .column(v-for="(testimonial, index) in $t('section_4.testimonials')")
            testimonial-box(:author="testimonial.author", avatar="https://bulma.io/images/placeholders/128x128.png")
              p(slot="content") {{ testimonial.content }}

    section.section.is-medium
      .container
        h2.title.has-text-centered {{ $t('team.title') }}

    section.section.is-medium.has-background-white-ter
      .container
        h2.title.has-text-centered {{ $t('section_6.title') }}
        p(v-for="(content, index) in $t('section_6.content')") {{ content }}
        p 
          | {{ $t('section_6.know_more') }}
          a(href="https://wildcodeschool.fr/", target="_blank") wildcodeschool.fr
</template>

<script>
import { PROGRAMM_URL, COORD, GG_MAP_OPT } from '~/const.js'
import TestimonialBox from '~/components/TestimonialBox'

export default {
  components: {
    TestimonialBox
  },

  data () {
    return {
      images: [
        'kathedraal.jpg',
        'bruxelles_central.jpg',
        'costationBXL_visu.jpg',
        'costation_logo.jpg'
      ],
      galleryIndex: null
    }
  },

  computed: {
    PROGRAMM_URL: () => PROGRAMM_URL,
    COORD: () => COORD,
    GG_MAP_OPT: () => GG_MAP_OPT
  }
}
</script>

<style scoped lang="scss">
@import '~assets/bulma-custom-variables';

#index.content {
  margin-top: -$custom-navbar-heigth;
  section.header.hero .hero-body {
    background-image: url(~/assets/header_background.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 45%;
  }

  .section.is-medium {
    padding: 6rem 1.5rem;
  }

  section.image__divider {
    background-image: url(~/assets/Sunset_from_Cathedrale_des_Saint_Michel_et_Gudule.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 90%;
    padding: 16rem 0;
  }

  @media screen and (max-width: 768px) {
    .hero.is-medium .hero-body {
      padding-top: 5rem;
    }
    .section.is-medium {
      padding: 3rem 1.5rem;
    }
    section.image__divider {
      padding: 9rem 0;
    }
  }

  strong.wild {
    box-shadow: inset 0px -11px $primary;
    padding: 0px 2px;
  }

  .vue-google-map {
    min-height: 300px;
    height: 100%;
  }

  
}
</style>