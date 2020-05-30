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

// import axios from 'axios';

// const ENV = 'production'
// // const ENV = 'development'
// const apiURLProd =  'https://api.gast.world/api/v1';
// const apiURLDev =  'http://localhost:3000/api/v1';

// const apiURL = ENV == 'production' ? apiURLProd : apiURLDev ;
// // const loginURL =  'https://www.gast.world';
// // login logic,
// var api = axios.create({
//   baseURL: apiURL
// });
// // api.defaults.headers.common['X-Auth-Token'] = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxLCJleHAiOjE1OTI4MDI3NTR9.uv2T1ndNoq9OE-NPDXiRG00EovBFESXxPVoBbE843qc";
// api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// api.defaults.headers.common['API-key'] = 'gastbyellenapikey';
// // axios.defaults.withCredentials = false;


export default {
  name: 'App',
  components: { Footer },

}
</script>
<style>
.v-content {
  padding:0!important;
}
</style>
