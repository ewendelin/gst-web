<template>
	<div class="home">
		<Navbar />
		<v-img height="150px" src="https://gast-dev.gast.world/Rice.png"></v-img>
		<!-- <Carousel /> -->
		<DealDetails />
	</div>
</template>

<script>
	import DealDetails from '../components/DealDetails';
	// import Carousel from '../components/Carousel';
	import Navbar from '../components/Navbar';




	export default {
		name: 'Deals',
		components: { DealDetails, Navbar },
    created () {
      let storedToken = sessionStorage.getItem('token');
      if (storedToken != undefined || storedToken != null) {
        this.$api.defaults.headers.common['X-Auth-Token'] = storedToken
      }
    }
	};
</script>

