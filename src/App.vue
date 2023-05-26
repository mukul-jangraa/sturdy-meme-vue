<template>
  <v-app id="inspire">
    <router-view></router-view>
  </v-app>
</template>

<script>
import Signup from './components/Signup.vue'

export default {
  name: 'App',

  components: {
    Signup,
  },

  data: () => ({
    drawer: null 
  }),
}
</script>
