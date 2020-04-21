<template>
	<div id="reviews">
		<v-img height="300px" src="../assets/cross.jpg">
		</v-img>
		<v-col class="center">
			<v-avatar class="mt-n12" size="170" color="gray">
				<img src="../assets/avatar.png" alt="John"/>
			</v-avatar>
		</v-col>
		<v-layout row class="mx-9" width="60vw">
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="title font-weight-bold mb-1 mt-n4">Description</v-list-item-title>
					<v-list-item-subtitle class="body1 font-weight-regular mb-3">
						Hello
					</v-list-item-subtitle>
					<v-list-item-subtitle class="body1 font-weight-regular mb-3">
						Desc
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</v-layout>
		<Navbar />
	</div>
</template>
<script>
import Navbar from '../components/Navbar';

	export default {
		name: 'reviews',
		components: { Navbar }
	};
</script>