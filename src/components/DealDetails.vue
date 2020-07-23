<template>
	<v-container>
	<v-layout row class="mx-auto" align-center justify-center>
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
		        @click.stop="promotion.deets = true"
		    	>
		        	details
		    	</v-btn>
		    	<v-dialog v-model="promotion.deets" width="290">
		    		<v-layout>
					<v-card>
					<v-img :src="promotion.image" height="250px">
					</v-img>
						<v-layout row class="mx-3 px-1 mb-0 pb-0">
							<v-card-title class="mb-0 pb-0">
								{{ promotion.title }}
							</v-card-title>
						</v-layout>
						<v-layout row class="ml-3 mr-3 mt-0 px-1 pt-0">
							<v-list>
						<v-card-subtitle class="font-weight-bold mt-1 pt-1">
							{{ promotion.time_slot }}
						</v-card-subtitle>
						<v-spacer></v-spacer>
						<v-card-text class="py-0">
							{{ promotion.description }}
						</v-card-text>
					</v-list>
					</v-layout>
					<v-divider class="my-4"></v-divider>

							<v-layout row class="mx-5">
								<v-list>
								<v-list-item>
									<v-list-item-avatar size="42" color="grey">
										<v-img :src="promotion.vendor.logo_img" alt="Logo" />
									</v-list-item-avatar>
									<v-list-item-content>
										<v-list-item-title>{{
											promotion.vendor.name
										}}</v-list-item-title>
									</v-list-item-content>
								</v-list-item>
							
								<v-list-item class="mt-1">
							        <v-list-item-icon class="pr-0 mr-0">
							          <v-icon small>mdi-home</v-icon>
							        </v-list-item-icon>

							        <v-list-item-title class="text-wrap font-weight-bold" style="font-size:.8rem;">{{promotion.vendor.address}}</v-list-item-title>
							    </v-list-item>
								<v-list-item class="mb-0 pb-0">
							        <v-list-item-icon class="pr-0 mr-0">
							          <v-icon small>mdi-phone</v-icon>
							        </v-list-item-icon>

							        <v-list-item-title class="font-weight-bold" style="font-size:.8rem;">{{promotion.vendor.contact_number}}</v-list-item-title>
							    </v-list-item>
								<v-card-text class="mb-1 mt-0 pt-0">
									{{ promotion.vendor.description }}
								</v-card-text>
							</v-list>
							</v-layout>
						
						<v-card-actions class="d-flex justify-center pb-3">
							<v-btn
								width="80%"
								dark
								color="#DFA937"
								tile
								class="buttons"
								depressed
								@click.stop="getCoupon(promotion)"
							>
								claim
							</v-btn>
						</v-card-actions>
						
					</v-card>
		</v-layout>

		    	</v-dialog>

		    	<v-spacer></v-spacer>
		 
		    	
		    </v-card-actions>
		  </v-card>

        </v-row>
      </v-col>
     </v-row>
		
								<v-layout row class="d-flex justify-space-around">
									<v-btn
										width="80%"
										dark
										color="#DFA937"
										tile
										class="buttons"
										depressed
										@click.stop="getCoupon(promotion)"
									>
										get coupon
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
								</v-layout>
							</v-layout>
							<v-divider class="my-5"></v-divider>

							<v-layout row class="mx-5">
								<v-list-item>
									<v-list-item-avatar size="54" color="grey">
										<v-img :src="promotion.vendor.logo_img" alt="Logo" />
									</v-list-item-avatar>
									<v-list-item-content>
										<v-list-item-title class="headline">{{
											promotion.vendor.name
										}}</v-list-item-title>
									</v-list-item-content>
								</v-list-item> 
						
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		name: 'DealDetails',
		created() {
			this.$api
				.get('/promotions')
				.then(response => {
					this.details = response.data;
					this.details = this.details.map(details => ({
						...details,
						show: false,
						deets: false,
						dialog: false,
						dialograting: false,
					}));
				})
				.catch(e => {
					this.error.push(e);
				});
		},
		data() {
			return {
				details: [],
				rating1: 5,
				valid: '',
				rating: '',
				dialograting: false
			};
		},
		methods: {
			getCoupon(promotion) {
				// post api
				// var customer_id = 1;
				this.$api
					.post(
						`/promotions/${promotion.id}/claim_coupon`
					)
					.then(function() {
						promotion.deets = false;
						promotion.dialog = true;
					})
					.catch(function(error) {
						alert('fail' + error);
				});
			},
			methods: {
		  	submitUpload() {
		        this.$refs.upload.submit();
		    },
		  }
		}
	};
</script>

<style scoped>
	.buttons {
		border-radius: 5px;
	}
	.buttonst {
		border-radius: 5px;
		background-color: rgba(223, 169, 55, 20%) !important;
		color: #dfa937 !important;
	}
</style>