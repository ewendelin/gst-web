<template>
	<div class="home">
		<Navbar />
		<!-- <v-img height="150px" src="https://gast-dev.gast.world/Rice.png"></v-img>
		<v-layout row class="mx-auto mt-n10">
			<v-spacer></v-spacer>
			<v-btn icon @click.stop="filter = true">
				<v-icon>mdi-tune</v-icon>
			</v-btn>
		</v-layout> -->
		<!-- <Carousel /> -->
		<!-- 	<v-container>

    <v-row>
      <v-col cols="12">
        <v-row justify="center">
          <v-card
    		class="ma-1"
    		max-width="45%"
    		v-for="promotion in details"
			:key="promotion.id">

		    <v-card-title style="font-size:.8rem;">
		      {{ promotion.title }} 
		    </v-card-title>
		    <v-card-subtitle style="font-size:.6rem;">
		      {{ promotion.time_slot }}
		    </v-card-subtitle>

    		<v-list-item class="mt-n3">
				<v-list-item-avatar size="32" color="grey">
					<v-img :src="promotion.vendor.logo_img" alt="Logo" />
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-title class="body" style="font-size:.8rem;">{{promotion.vendor.name}}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>

		    <v-card-actions class="mt-n3">
		    	<v-btn @click.stop="getCoupon(promotion)" 
				tile 
				small
				depressed 
				dark 
				style="border-radius: 5px;
				background-color: rgb(223, 169, 55) !important; font-size:.6rem;
				color: !important;"
				>
					Claim
				</v-btn>
				<v-dialog v-model="promotion.dialog" max-width="290">
					<v-card>
						<v-layout row class="mx-auto">
							<v-card-title class="headline">Success!</v-card-title>
							<v-spacer></v-spacer>
							<v-btn icon @click="promotion.dialog = false">
								<v-icon>mdi-close</v-icon>
							</v-btn>
						</v-layout>
						<v-card-text>
							You have successfully claimed this promotion! Make sure
							you read the disclaimer and note the time when the
							coupon can be claimed.
						</v-card-text>
						<v-card-actions class="d-flex justify-center pb-3">
							<v-btn
								width="80%"
								dark
								color="#DFA937"
								tile
								class="buttons"
								depressed
								to="/profile"
							>
								see in profile
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>

		    	<v-btn
		    	class="pa-.5 buttonst ml-n1"
		        dark
		        small
				color="#DFA937"
		        text
				style="font-size:.6rem;"
		        @click="deets = true"
		    	>
		        	details
		    	</v-btn>
		    	<v-dialog v-model="promotion.deets">
		    	</v-dialog>

		    	<v-spacer></v-spacer>
		 
		    	
		    </v-card-actions>
		  </v-card>
        </v-row>
      </v-col>
     </v-row>
 </v-container> -->
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
