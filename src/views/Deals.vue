<template>
	<div class="home">
		<Navbar />
		<Carousel />
		<DealDetails />
	</div>
</template>

<script>
	import DealDetails from '../components/DealDetails';
	import Carousel from '../components/Carousel';
	import Navbar from '../components/Navbar';
  this.$api.defaults.headers.common['X-Auth-Token'] = sessionStorage.setItem('token', res.data.user.token);



	export default {
		name: 'Deals',
		components: { DealDetails, Carousel, Navbar }
	};
</script>
