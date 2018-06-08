<template lang="pug">
.testimonial.box.media
  .media-left
    span.icon.is-large
      i.fas.fa-quote-left.fa-3x
  .media-content
    slot(name="content") 
    .author.media
      .name 
        p
          strong {{ author }}
      img.image.is-32x32(src="https://bulma.io/images/placeholders/128x128.png")
</template>

<script>
export default {
  props: ['author', 'avatar']
}
</script>

<style lang="scss" scoped>
@import '~assets/bulma-custom-variables';

.testimonial.box.media {
  height: 100%;
  border: 1px solid $grey-lighter;
  .icon {
    color: #58c4b8;
    opacity: .4;
  }
  .media-content {
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .author {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .name {
      padding-right: 10px;
    }
    .image {
      border-radius: 16px;
    }
  }
}
</style>
