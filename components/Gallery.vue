<template lang="pug">
.gallery.columns.is-mobile.is-1.is-variable.is-multiline.is-centered
  .column(
    v-for='(image, imageIndex) in imgs', :key='imageIndex',
    :class="columnSize(imageIndex)"
  )
    figure(
      @click="show(imageIndex)",
      :style="{ backgroundImage: 'url(' + image.url + ')' }"
    ) 
  .modal(:class="{ 'is-active': isActive }")
    .modal-background(@click="isActive = false")
    .modal-content
      p.image
        img(:src="imgs[current].url", :alt="imgs[current].alt")
      p.has-text-white {{ imgs[current].alt }}
    button.modal-close.is-large(@click="isActive = false")
</template>

<script>
export default {
  props: ['imgs'],

  data () {
    return {
      isActive: false,
      current: 0
    }
  },

  methods: {
    show (index) {
      this.current = index
      this.isActive = true
    },
    columnSize (index) {
      let length = this.imgs.length
      return length % 2 !== 0 && (length - 1) === index ? '' : 'is-half-mobile'
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery.columns.is-mobile {
    figure {
      background-size: cover;
      background-position: 50% 50%;
      width: 100%;
      height: 240px;
      margin: 0;
      transition: opacity .3s ease;
    }

    figure:hover {
      cursor: pointer;
      opacity: .7;
    }
  }  
</style>
