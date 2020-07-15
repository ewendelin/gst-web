<template>
	<div class="home">
		<Navbar />
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
		data() {
			return {
				filter: false
			};
		},
    created () {
      let storedToken = sessionStorage.getItem('token');
      if (storedToken != undefined || storedToken != null) {
        this.$api.defaults.headers.common['X-Auth-Token'] = storedToken
      }
    }
	};
</script>
<style scoped>
	* {
		background-color: white;
	}
</style>
