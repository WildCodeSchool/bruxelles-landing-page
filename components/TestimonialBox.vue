<template lang="pug">
.testimonial.card
  .card-image
    img(:src="src.img")
  .card-content
    .media
      .media-left
        span.icon.is-large
          i.fas.fa-quote-left.fa-3x
      .media-content
        slot(name="content") 
        a.author.media(:href="src.link") {{ $t('section_4.show_src', { author: src.author }) }}
</template>

<script>
export default {
  props: ['src']
}
</script>

<style lang="scss" scoped>
@import '~assets/bulma-custom-variables';

.testimonial.card {
  border: 1px solid $grey-lighter;
  .icon {
    color: #58c4b8;
    opacity: .4;
  }
  .author {
    display: flex;
    justify-content: flex-end; 
  }
}
</style>
