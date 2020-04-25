<template>
	<v-container class="px-0">
		<!-- <v-layout row class="mx-auto hidden-sm-and-down" align-center justify-center>
			<v-flex md6 lg6>
				<v-card
					tile
					class="mb-6"
					xs12
					md6
					lg4
					v-for="promotion in details"
					:key="promotion.id"
				>
					<v-img src="../assets/cross.jpg" height="350px"></v-img>
					<v-layout row class="mx-3 px-1 mb-0 pb-0">
						<v-card-title class="mb-0 pb-0">
							{{ promotion.description }}
						</v-card-title>
					</v-layout>
					<v-layout row class="ml-3 mr-3 mt-0 px-1 pt-0">
						<v-card-subtitle class="font-weight-bold mt-1 pt-1">
							{{ promotion.end_time }}
						</v-card-subtitle>
						<v-spacer></v-spacer>
						<v-btn class="mt-0 pt-0" text>
							<v-icon small>mdi-map-marker</v-icon>200 m
						</v-btn>
						<v-card-text class="py-0">
							{{ promotion.description }}
						</v-card-text>
					</v-layout>

					<v-card-actions class="pt-0 pb-0 mb-0 mt-0">
						<v-spacer></v-spacer>

						<v-btn
							class="pt-0 pb-0 mt-n1 mb-1"
							text
							large
							block
							right
							@click.native="promotion.show = !promotion.show"
						>
							<v-icon>{{
								promotion.show ? 'mdi-chevron-up' : 'mdi-chevron-down'
							}}</v-icon>
						</v-btn>
					</v-card-actions>

					<v-expand-transition>
						<div v-show="promotion.show">
							<v-layout row class="mx-3 px-1 mb-0 pb-0">
								<v-card-text class="mt-n1.5 pt-0">
									<v-span class="font-weight-bold">Disclaimer</v-span>
									<br />
									{{ promotion.disclaimer }}
								</v-card-text>
								<v-layout row class="d-flex justify-space-around">
									<v-btn
										width="35vw"
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
									<v-btn 
										width="35vw" 
										tile 
										class="buttonst" 
										depressed>
										share
									</v-btn>
								</v-layout>
							</v-layout>
							<v-divider class="my-5"></v-divider>

							<v-layout row class="mx-5">
								<v-list-item>
									<v-list-item-avatar size="54" color="grey">
										<img src="../assets/avatar.png" alt="John" />
									</v-list-item-avatar>
									<v-list-item-content>
										<v-list-item-title class="headline">{{
											promotion.vendor_name
										}}</v-list-item-title>
									</v-list-item-content>
								</v-list-item>
								<v-btn text class="pb-0 mb-n3">
									<v-span class="font-weight-bold body">{{
										promotion.vendor_address
									}}</v-span>

									<v-icon class="ml-12" right>mdi-map</v-icon>
								</v-btn>
								<v-card-text class="mb-3">
									{{ promotion.description }}
								</v-card-text>
							</v-layout>
							<v-img src="../assets/storefront.jpg" height="300px"></v-img>
						</div>
					</v-expand-transition>
				</v-card>
			</v-flex>
		</v-layout> -->
		<v-layout row class="mx-auto" align-center justify-center>
			<v-flex xs12 sm9>
				<v-card
					tile
					class="mb-6"
					xs12
					md6
					lg4
					v-for="promotion in details"
					:key="promotion.id"
				>
					<v-img src="../assets/cross.jpg" height="250px"></v-img>
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
					

				<v-layout class="mx-5" max-width="90%">
					<v-card-actions>
						<v-spacer></v-spacer>
					<v-row align="center" justify="center">
						<v-btn
							width="90vw" 
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
				</v-layout>
					<v-expand-transition>
						<div v-show="promotion.show">
							<v-layout row class="mx-3 px-1 mb-0 pb-0">
								<v-card-text class="mt-n1.5 pt-0">
									<v-span class="font-weight-bold">Disclaimer</v-span>
									<br />
									{{ promotion.disclaimer }}
								</v-card-text>
								<v-layout row class="d-flex justify-space-around">
									<v-btn
										width="35vw"
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
									<v-btn 
										width="35vw" 
										tile 
										class="buttonst" 
										depressed>
										share
									</v-btn>
								</v-layout>
							</v-layout>
							<v-divider class="my-5"></v-divider>

							<v-layout row class="mx-5">
								<v-list-item>
									<v-list-item-avatar size="54" color="grey">
										<img src="../assets/avatar.png" alt="John" />{{promotion.vendor.logo_img}}
									</v-list-item-avatar>
									<v-list-item-content>
										<v-list-item-title class="headline">{{
											promotion.vendor.name
										}}</v-list-item-title>
									</v-list-item-content>
								</v-list-item>
								<v-rating class="ml-3" readonly dense v-model="rating1"
									background-color="orange lighten-3"
						      		color="orange"></v-rating>
								<v-card-text text class="pb-0 mb-n3">{{promotion.vendor.address}}
									<v-icon class="ml-12" right>mdi-map</v-icon>
								</v-card-text>
								<v-card-text class="mb-3">
									{{ promotion.vendor.description }}
								</v-card-text>
							<v-row align="center" justify="center">
								<v-btn
									width="35vw" 
									tile 
									dark
									color="#DFA937"
									class="buttons" 
									depressed
									@click="dialograting = true">
									Add rating
								</v-btn>
								<v-dialog v-model="dialograting" max-width="350">
									<v-card>
										<v-layout row class="mx-auto">
											<v-card-title class="headline">Add Review</v-card-title>
											<v-spacer></v-spacer>
											<v-btn icon @click="dialograting = false">
												<v-icon>mdi-close</v-icon>
											</v-btn>
										</v-layout>
										<v-form ref="form"
										v-model="valid"
										lazy-validation
										class="mx-5"
										id="example-3">
											<v-rating v-model="rating"
												background-color="orange lighten-3"
				      							color="orange">
				      						</v-rating>
										</v-form>
										<v-card-actions class="d-flex justify-space-around pb-3">
											<v-btn width="50%" dark color="#DFA937" tile class="buttons" depressed @click="createReview();submitReview();">
												post
											</v-btn>
											<v-btn width="40%" dark color="#DFA937" tile class="buttonst" depressed @click="dialograting = false">
												cancel
											</v-btn>
										</v-card-actions>
									</v-card>
								</v-dialog>
							</v-row>
							</v-layout>
							<v-row align="center" justify="center">
								<v-img src="../assets/storefront.jpg" height="300px">{{promotion.vendor.main_img}}
						          	<v-row align="end" justify="center" class="fill-height">
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
									</v-row>
								</v-img>
							</v-row>
						</div>
					</v-expand-transition>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	// import axios from 'axios';
	export default {
		name: 'DealDetails',
		created() {
			this.$api
				.get('http://localhost:3000/api/v1/promotions')
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
			};
		},
		// methods: {
		// 	getCoupon(promotion) {
		// 		// post api
		// 		// var customer_id = 1;
		// 		this.$api
		// 			.post(
		// 				`http://localhost:3000/api/v1/promotions/${promotion.id}/claim_coupon`
		// 			)
		// 			.then(function() {
		// 				promotion.dialog = true;
		// 			})
		// 			.catch(function(error) {
		// 				alert('fail' + error);
		// 		});
		// 	},
		// 	methods: {
		//   	submitUpload() {
		//         this.$refs.upload.submit();
		//       },
		//     createRating() {
		//       let rating = this.newRating;
		//       // promotion["status"] = status;
		//       promotion['vendor_profile_id'] = this.vendor.id
		//       // promotion['title'] = this.data.title

		//       this.$api
		//         .post(`http://localhost:3000/api/v1/promotions`, {
		//           promotion: promotion
		//         })
		//         .then(location.reload())
		//         .catch(e => {
		//           this.error.push(e);
		//         });

		//       this.newRating = {};
		//       this.dialograting = false;
		//     }
		//   }
		// }
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
