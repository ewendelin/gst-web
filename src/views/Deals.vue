<template>
	<div class="home">
		<Navbar />
		<v-img height="150px" src="https://gast-dev.gast.world/Rice.png"></v-img>
		<v-layout>
		<v-spacer></v-spacer>
		<v-btn class="my-n5 py-0" fab text color="grey">
			<v-icon>mdi-tune</v-icon>
		</v-btn>
		</v-layout>
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
