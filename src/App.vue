<template>
  <v-app>
    <v-content>
    	<v-col>
    		<v-row style="height: 1rem;">
    			<v-spacer></v-spacer>
    			<v-btn small text v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">{{entry.title}}
    			</v-btn>
    		</v-row>
    	</v-col>
      <router-view></router-view>
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Footer from './components/Footer';
import i18n from '@/plugins/i18n';

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
  data() {
            return {
                languages: [
                    { language: 'en', title: 'EN' },
                    { language: 'zh_CN', title: '中文' }
                ]
            };
        },
        methods: {
            changeLocale(locale) {
                i18n.locale = locale;
            }
        }

}
</script>
<style>
.v-content {
  padding:0!important;
  background-color: #fff;
}
</style>
