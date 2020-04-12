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
