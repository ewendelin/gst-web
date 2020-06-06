<template>
	<v-container class="px-0 pt-0">
		<v-layout row class="mx-auto" align-center justify-center>
			<v-flex xs12 sm8 md7>
				<v-card
					tile
					class="mb-6"
					xs12
					md6
					lg4
					v-for="promotion in details"
					:key="promotion.id"
				>
				<!-- @@FIXME ADD POLYFILL FOR IMAGES/ seems like its not needed... test in more browsers, safari, chrome working -->
					<v-img :src="promotion.image" height="250px"></v-img>
					<v-layout row class="mx-3 px-1 mb-0 pb-0">
						<v-card-title class="mb-0 pb-0">
							{{ promotion.title }}
						</v-card-title>
					</v-layout>
					<v-layout row class="ml-3 mr-3 mt-0 px-1 pt-0">
						<v-card-subtitle class="font-weight-bold mt-1 pt-1">
							{{ promotion.time_slot }}
						</v-card-subtitle>
						<v-spacer></v-spacer>
						<v-btn class="mt-0 pt-0" text>
							<v-icon small>mdi-map-marker</v-icon>{{promotion.vendor.area}}
						</v-btn>
						<v-card-text class="py-0">
							{{ promotion.description }}
						</v-card-text>
					</v-layout>
					

				<!-- <v-layout class="mx-5" width="90vw"> -->
					<v-card-actions>
						<!-- <v-spacer></v-spacer> -->
					<v-row align="center" justify="center" class="mx-auto">
						<v-btn
							width="90%" 
							text
							center
							large
							block
							@click.native="promotion.show = !promotion.show"
						>
							<v-icon>{{
								promotion.show ? 'mdi-chevron-up' : 'mdi-chevron-down'
							}}</v-icon>
						</v-btn>
					</v-row>
					</v-card-actions>
				<!-- </v-layout> -->
					<v-expand-transition>
						<div v-show="promotion.show">
							<v-layout row class="mx-3 mb-0 pb-0">
								<v-card-text class="mt-n1.5 mb-n3 pt-0 font-weight-bold">
									Disclaimer
								</v-card-text>
								<v-card-text class="mt-n1.5 pt-0">
									{{ promotion.disclaimer }}
								</v-card-text>
								
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
								<!-- <v-rating class="ml-3" readonly dense v-model="rating1"
									background-color="orange lighten-3"
						      		color="orange"></v-rating> -->
								<v-card-text text class="pb-0 mb-n3 font-weight-bold">{{promotion.vendor.address}}
								</v-card-text>
								<v-card-text class="mb-3">
									{{ promotion.vendor.description }}
								</v-card-text>
							<!-- <v-row align="center" justify="center"> -->
								<!-- <v-btn
									width="35vw" 
									tile 
									dark
									color="#DFA937"
									class="buttons mb-4" 
									depressed
									@click="dialograting = true">
									Add rating
								</v-btn> -->
								<!-- <v-dialog v-model="dialograting" max-width="350">
									<v-card>
										<v-layout row class="mx-auto">
											<v-card-title class="headline">Add Rating</v-card-title>
											<v-spacer></v-spacer>
											<v-btn icon @click="dialograting = false">
												<v-icon>mdi-close</v-icon>
											</v-btn>
										</v-layout>
										<v-form ref="form"
										class="mx-5"
										id="example-3">
											<v-rating v-model="rating"
												background-color="orange lighten-3"
				      							color="orange">
				      						</v-rating>
										</v-form>
										<v-card-actions class="d-flex justify-space-around pb-3">
											<v-btn width="50%" dark color="#DFA937" tile class="buttons" depressed @click="dialograting = false">
												post
											</v-btn>
											<v-btn width="40%" dark color="#DFA937" tile class="buttonst" depressed @click="dialograting = false">
												cancel
											</v-btn>
										</v-card-actions>
									</v-card>
								</v-dialog> -->
							<!-- </v-row> -->
							</v-layout>
							<v-layout class="mx-auto">
								<!-- <v-row align="center" justify="center"> -->
									<v-img :src="promotion.vendor.main_img" height="300" width="100vw">
						          		<!-- <v-row align="end" justify="center" class="fill-height"> -->
						          		<!-- FIXME SHOW THE SPECIFIC VENDOR -->
						            	<!-- <v-btn
										width="35vw" 
										tile 
										dark
										color="#DFA937"
										class="buttons" 
										depressed
										@click="jump(promotion)">
										Add rating
										</v-btn> -->
										<!-- </v-row> -->
									</v-img>
								<!-- </v-row> -->
							</v-layout>
						</div>
					</v-expand-transition>
				</v-card>
			</v-flex>
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
		    // createRating() {
		    //   let rating = this.newRating;
		    //   // promotion["status"] = status;
		    //   promotion['vendor_profile_id'] = this.vendor.id
		    //   // promotion['title'] = this.data.title

		    //   this.$api
		    //     .post(`/promotions`, {
		    //       promotion: promotion
		    //     })
		    //     .then(location.reload())
		    //     .catch(e => {
		    //       this.error.push(e);
		    //     });

		    //   this.newRating = {};
		    //   this.dialograting = false;
		    // }
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
