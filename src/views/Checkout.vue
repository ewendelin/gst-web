<template>
	<div class="checkout">
		<!-- <Navbar /> -->
		<v-btn class="mt-n8" icon>
			<v-icon to="/deals" color="black">mdi-chevron-left
			</v-icon>
		</v-btn>
		<h3 class="mx-5">Checkout</h3>
		<v-layout row class="mx-auto" align-center justify-center>
    		<v-btn 
    			align-center
    			width="60%" 
    			justify-center 
    			dark
				color="#07C160"
				tile
				class="buttons"
				depressed
				style="position: fixed; bottom: 10px; z-index: 5;">WeChat pay
	    	</v-btn>
	    </v-layout>
		<v-layout row class="mx-auto" style="max-width: 100vw;" align-center justify-center>
	    	<v-col cols="12">
	        	<v-row justify="center">
		    		<v-col
	          		cols="12">
	          			<v-card
						class="mb-2 mx-auto px-0"
			            light
			            v-for="(deal, index) in coupons"
						:key="index"
			            >
	            			<div class="d-flex flex-no-wrap">
				            	<v-avatar
				                class=""
				                size="145"
				                height=""
				                tile>
				                	<v-img 
              							:src="deal.image">
              						</v-img>
				                </v-avatar>
	              				<div>
	                				<v-card-title class="mt-n1 mb-3 pr-0 cols-3 text-truncate" style="font-size:1.1rem;"
	                				>{{deal.title}}</v-card-title>
									<v-card-subtitle class="caption justify-center mb-n9 pr-0 cols-5 text-truncate mb-3" style="font-size:.5rem;">
					      				<v-icon small class="align-end justify-center mr-1">mdi-clock-outline</v-icon>
					      					{{deal.timeslot}}
									</v-card-subtitle>
									<v-row
									class="mt-3 ml-1">
					        			
					        			<v-card-title class="body-1 deep-orange--text" style="font-size:1.1rem; font-weight: bold;">¥{{deal.price}}</v-card-title>
					        			<v-card-title class="body-2 ml-n5 text--disabled under">¥{{deal.original_price}}</v-card-title>
					    			</v-row>
					    			
									<v-row class="mb-n12">
										<v-btn class="white--text plmn mt-4 mb-n12 pb-n12" bottom style="z-index: 3;"
			              				fab 
			              				x-small
			              				depressed
			              				color="#FFB300">
								        	<v-icon>mdi-minus
								        	</v-icon>
								        </v-btn>
								        <v-card-title class="body-1 ma-0 pa-0" style="font-size:1rem;">0</v-card-title>
								        <v-btn class="white--text plmn mt-4 mb-n12 pb-n12" bottom style="z-index: 3;"
			              				@click.stop="getCoupon(promotion)"
			              				fab
			              				x-small
			              				depressed
			              				color="#FFB300">
								        	<v-icon>mdi-plus
								        	</v-icon>
								        </v-btn>
										<v-spacer></v-spacer>
								        <v-btn
								            icon
								            right
								            color="red"
								            small
								            absolute
								            bottom
				              				depressed
				              				@click="remove(deal)"
				              				>
								        	<v-icon>mdi-trash-can-outline
								        	</v-icon>
								        </v-btn>
						    		</v-row>
				            	</div>
				        	</div>
				    	</v-card>
					</v-col>
				</v-row>
			</v-col>
		</v-layout>
		<h3 class="mx-5">Delivery Address</h3>
		<p class="mx-5">addess</p>
		<p class="mx-5 mt-n4">delivery name</p>
		<p class="mx-5 mt-n4">number</p>
		<v-layout row class="mx-auto" align-center justify-center>
			<v-btn 
    			align-center
    			width="60%" 
    			justify-center 
    			dark
				color="#FFB300"
				tile
				class="buttons mt-4 mb-8"
				depressed>Edit Delivery Address
			</v-btn>
						<v-dialog v-model="dialogdelivery" max-width="350">
						<v-card center class="pt-12 pb-12">
							<v-layout row class="mx-auto mb-n4 mt-n4">
							<v-spacer></v-spacer>
								<v-btn class="mt-n4" icon @click="dialogdelivery = false">
										<v-icon>mdi-close</v-icon>
									</v-btn>
								</v-layout>
							<!-- <v-col> -->
							<v-layout row class="mx-5">

								<v-card-title class="title mt-n3">Delivery Address</v-card-title>
								</v-layout>
									<v-form ref="form" v-model="valid" lazy-validation class="mx-8">
										<v-text-field
												v-model="delivery.name"
												:rules="[v => !!v || 'Name is required!']"
												required
												color="#DFA937"
											>
												<template v-slot:label>
													<div>
														{{ $t('newVendorName') }}
													</div>
												</template>
											</v-text-field>

						
											<v-text-field
												v-model="delivery.address"
												required
												:rules="[v => !!v || 'Address is required!']"
												color="#DFA937"
											>
												<template v-slot:label>
													<div>
														{{ $t('address') }}
													</div>
												</template>
											</v-text-field>
											

											<v-text-field
												v-model="delivery.contact_number"
												required
												:rules="[v => !!v || 'Phone number is required!']"
												color="#DFA937"
											>
												<template v-slot:label>
													<div>
														{{ $t('phoneNumber') }}
													</div>
												</template>
											</v-text-field>
											
									</v-form>
										
									<v-layout class="align-center justify-center">
										<v-btn
											dark
											width="80%"
											color="#DFA937"
											tile
											class="buttons mb-3"
											depressed
											
										>
										Save address
										</v-btn>
									</v-layout>
					
					</v-card>
				</v-dialog>
		</v-layout>
		<v-checkbox
            class="mx-5"
            label="Add delivery ¥12"
            color="FFB300"
            value="red"
        ></v-checkbox>
		<h3 class="mx-5">Total: ¥{{deal.total.price}}</h3>
		<div class="disc">
			<h5 class="mx-5">Disclaimer:</h5>
			<p class="mx-5 caption" font-size=".7rem">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus magni, iusto pariatur possimus ipsam quae rem consequatur error repellendus, inventore, aut officiis at. Necessitatibus, delectus. Doloribus reprehenderit, debitis officia mollitia.
			</p>
		</div>
	</div>
</template>

<script>
	
	export default {
		name: 'Checkout',
		components: { },

		methods: {

			remove(deal) {
				// this.$api(this.deals, index);
					this.$api.post(
						`/coupons/${deal.id}`,
					)
					.then(response => {
						this.canceled = response

						this.res = this.deals.filter((x) => {
							return x.id != deal.id
						});
						this.deals = this.res;

						// this.deals = this.deals.map(deals => ({
						// 	...deals,
						// 	dialog: false,
						// 	dialog3: false
						// }));

					})
					.catch(function(error) {
						alert('fail' + error);
					});
			}
		}
	}
</script>

<style scoped>
	.disc {
		background-color: #E5E5E5;
		margin:2rem;
		padding:1rem;
	}
	.checkout {
		background-color: white;
		height: 100vh;
	}
	.buttons {
		border-radius: 5px;
	}
</style>