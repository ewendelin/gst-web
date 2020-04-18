<template>
  <v-app>
    <v-content>
      <router-view></router-view>
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Footer from './components/Footer';
import axios from 'axios';
axios.defaults.headers.common['X-Auth-Token'] = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxLCJleHAiOjE1ODkxODUyMTl9.yCeUHSSHkqET1Rbr9wznhKmE_nw62Iztu4RW3H3IBi4";
axios.defaults.headers.common['API-key'] = 'gastbyellenapikey';

export default {
  name: 'App',
  components: { Footer },
  axios: axios

}
</script>
<style>
.v-content {
  padding:0!important;
}
</style>
