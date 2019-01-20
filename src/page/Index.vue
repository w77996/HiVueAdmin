<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>{{ this.res }}</h1>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Index',
    computed: {
      ...mapState(['res'])
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
