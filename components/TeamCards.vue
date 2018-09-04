<template lang="pug">
.team.columns.is-1.is-variable.is-centered
  .column.is-one-third(v-for='(user, index) in team', :key='index')
    .card
      .card-image
        img(:src="user.img || 'staff-man-default.png'", :alt="user.name + ' - ' + user.role")
      .card-content
        .has-text-centered
          p.title.is-4 {{ user.name }}
          p.subtitle.is-5.has-text-grey {{ user.role }}
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
        p.title.is-4 {{ team[current].name }}
        p.subtitle.is-5.has-text-grey {{ team[current].role }}
        p {{ team[current].bio }}

        p.has-text-weight-bold {{ $t('team.wild_side') }}
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
      .card-content .subtitle.is-5.has-text-grey {
        margin-bottom: 25px;
      }
    }
  }
}  
</style>
