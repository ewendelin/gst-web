<template>
	<div class="home">
		<Navbar />
		<v-img height="150px" src="https://gast-dev.gast.world/Rice.png"></v-img>
		<v-layout col>
		<v-spacer></v-spacer>
		<v-btn class="my-n5 py-0" fab text color="grey" @click="show = !show">
			<v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-tune' }}</v-icon>
		</v-btn>
		</v-layout>
		<v-expand-transition>
      		<div v-show="show" class="px-4">
        		<v-row justify="space-around">
    				<v-col cols="12" sm="6" md="4" lg="3" class="pa-4">
      					<v-list>
  							<v-list-item-subtitle>Currently ongoing</v-list-item-subtitle>
      							<v-chip-group
		          				column
		        				>
  									<v-chip filter v-for="active in active" :key="active">{{ active }}
  									</v-chip>
  								</v-chip-group>
  							<v-list-item-subtitle>Filter by area</v-list-item-subtitle>
	        				<v-chip-group
	          				column
	        				>
	          					<v-chip filter v-for="area in area" :key="area">
	            					{{ area }}
	          					</v-chip>
							</v-chip-group>
							<v-list-item-subtitle>Filter by venue</v-list-item-subtitle>
	        				<v-chip-group
	        				
	          				column
	        				>
	          					<v-chip filter v-for="venue in vendor_type" :key="venue">
	            					{{ venue }}
	          					</v-chip>
							</v-chip-group>
        				</v-list>
    				</v-col>
  				</v-row>
      		</div>
    	</v-expand-transition>
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
				active: ['Ongoing deals'],
				area: ['Xuhui', 'Jingan', 'Huangpu', 'Changning', 'Hongkou', 'Yangpu', 'Putuo', 'Pudong', 'Other'],
			    vendor_type: ['Restaurant', 'Bar', 'Cafe', 'Store'],
				show: false
			};
		},
		// methods: {
		// 	filterBy() {
		// 		this.$api
		// 	.get(`/promotions?vendor_type=${this.vendor_type}&area=${this.area}&date=${this.active}`)

		// 	}
		// },
    created () {
      let storedToken = sessionStorage.getItem('token');
      if (storedToken != undefined || storedToken != null) {
        this.$api.defaults.headers.common['X-Auth-Token'] = storedToken
        .get(`/promotions?vendor_type=${this.vendor_type}&area=${this.area}&date=${this.active}`)
      }
    }
	};
</script>
<style scoped>
	* {
		background-color: white;
	}
</style>
