<template lang="pug">
.team.columns.is-1.is-variable.is-centered
  .column.is-one-third(v-for='(user, index) in team', :key='index')
    .card
      .card-image
        img(:src="user.img")
      .card-content
        .has-text-centered
          h3.title {{ user.name }}
          h4.subtitle.has-text-grey {{ user.role }}
        p
          a.has-text-dark(v-if="user.phone", :href="'tel:+' + user.phone")
            span.icon.is-small
              i.fa.fa-phone
            | {{ user.phone }}
        p
          a.has-text-dark(v-if="user.mail", :href="'mailto:' + user.mail")
            span.icon.is-small
              i.fa.fa-envelope
            | {{ user.mail }}
        .has-text-centered
          a(@click="show(index)") {{ $t('actions.know_more') }}

  .modal(:class="{ 'is-active': isActive }")
    .modal-background(@click="isActive = false")
    .modal-content
      .box
        h3.title {{ team[current].name }}
        h4.subtitle.has-text-grey {{ team[current].role }}
        p {{ team[current].bio }}

        h3 {{ $t('team.wild_side') }}
        p {{ team[current].wild_side }}
    button.modal-close.is-large(@click="isActive = false")
</template>

<script>
export default {
  props: ['team'],

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
    }
  }
}
</script>

<style lang="scss" scoped>
.team.columns {
  flex-wrap: wrap;
  .column {
    align-items: center;
    justify-content: center;
    display: flex;
    .card {
      max-width: 350px;
      span.icon {
        margin-right: 10px;
      }
    }
  }
}  
</style>
