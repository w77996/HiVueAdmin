<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>{{ this.city }}</h1>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Index',
    computed: {
      ...mapState(['city'])
    },
    data () {
      return {
        msg: 'Welcome to MyVue'
      }
    }
  }
</script>

<style scoped>
</style>
