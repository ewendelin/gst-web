<template>
	<div class="profile" >
		<Navbar />
		<v-layout column class="mx-5 mb-5">
			<v-list>
				<v-list-item>
					<v-list-item-avatar size="54" color="grey">
						<img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" />
						<!-- <img :src="user.wx_avatar" /> -->
					</v-list-item-avatar>
					<v-list-item-content>
						<v-list-item-title class="headline">Ellen</v-list-item-title>
						<!-- <v-list-item-title class="headline">{{
							user.wx_nickname
						}}</v-list-item-title> -->
					</v-list-item-content>
					<v-list-item-icon>
						
						<v-btn fab text @click="logout()"
						>
							<v-icon>mdi-logout</v-icon>
						</v-btn>
					</v-list-item-icon>
				</v-list-item>
			</v-list>
		</v-layout>
		<h3 class="mx-4 mt-3 mb-n3">{{ $t('todayOrder') }}</h3>
		<v-layout row class="mx-auto" style="max-width: 100vw;" align-center justify-center>
		<!-- <v-row> -->
	      <v-col cols="12">
	        <v-row justify="center">
		    <v-col
	          cols="12">
	          <v-card
				class="mb-2 mx-auto px-0"
	            light>
	            <div class="d-flex flex-no-wrap">
	            	<v-avatar
	                class=""
	                size="145"
	                height=""
	                tile>
	                <v-img 
              		src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
              		</v-img>
	              </v-avatar>
	              <div>
	                <v-card-title class="mt-n1 pr-0 cols-3 text-truncate" style="font-size:1.1rem;"
	                >hello</v-card-title>
              			<v-card-subtitle class="caption justify-center mb-n9 pr-0 cols-5 text-truncate" style="font-size:.5rem;">
					      	<v-icon small class="align-end justify-center mr-1">mdi-clock-outline</v-icon>
					      	32443
						</v-card-subtitle>

						<v-row
						class="mt-3 ml-1 mb-n12 pb-n12"
					        >
					        <v-card-title class="body-1 deep-orange--text" style="font-size:1.1rem; font-weight: bold;">¥54</v-card-title>
					        <v-card-title class="body-2 ml-n5 text--disabled under">¥43</v-card-title>
					    </v-row>
							<v-card-actions class="mx-n1 mt-7 cols-3 mb-n2">
						      <v-btn small
						      depressed
						      class="white--text"
						      color="#FFB300"
						      @click.stop="dia = true">redeem</v-btn>
								<v-dialog v-model="dia" max-width="290">
									<v-card>
										<v-layout row class="mx-auto">
											<v-card-title class="headline">{{ $t('couponCode') }}</v-card-title>
											<v-spacer></v-spacer>
											<v-btn icon @click="dia = false">
												<v-icon>mdi-close</v-icon>
											</v-btn>
										</v-layout>

										<v-card-text class="headline">
											6Gt647HK
											<!-- {{ deal.token }} -->
										</v-card-text>
									</v-card>
								</v-dialog>

						      <v-btn
						        depressed
						        color="#FFB300"
						        small
						        outlined
						        @click.stop="promotion = true">
						        Details
						      </v-btn>
						    </v-card-actions>
					 
						<v-dialog v-model="promotion" width="290">
				    		<v-layout>
							<v-card width="290">
							<v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" height="250px">
							</v-img>
								<v-layout row class="ml-3 mr-3 px-1 pt-0">
								<v-list>
									<v-card-title class="mb-n2 pb-0">
										Title
									</v-card-title>
									<v-list-item class="mt-1 mb-n3">
									    <v-list-item-icon class="pr-0 mr-0">
									        <v-icon small>mdi-clock</v-icon>
									    </v-list-item-icon>
									    <v-list-item-title class="text-wrap font-weight-bold" style="font-size:.8rem;">34:34</v-list-item-title>
									</v-list-item>
										<!-- <v-list-item class="mb-0 pb-0">
									        <v-list-item-icon class="pr-0 mr-0">
									          <v-icon small>mdi-noodles</v-icon>
									        </v-list-item-icon>

									        <v-list-item-title class="font-weight-bold" style="font-size:.8rem;">{{ promotion.statistics.available }}{{ $t('avi') }}</v-list-item-title>
									    </v-list-item> -->
								
								<v-spacer></v-spacer>
								<v-card-text class="py-0">
									promo desct
								</v-card-text>
							</v-list>
							</v-layout>
							<!-- <v-card-actions class="d-flex justify-center pb-3">
									<v-btn
										width="80%"
										dark
										color="#FFB300"
										tile
										class="buttons"
										depressed
										@click.stop="getCoupon(promotion)"
									>
										{{ $t('claim') }}
									</v-btn>
								</v-card-actions> -->
								<v-layout row class="mx-5">
									<v-list>
										<v-list-item>
											<v-list-item-avatar size="42" color="grey">
												<v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" alt="Logo" />
											</v-list-item-avatar>
											<v-list-item-content>
												<v-list-item-title>Vendor</v-list-item-title>
											</v-list-item-content>
										</v-list-item>
										<v-list-item class="mt-1 mb-n3">
									        <v-list-item-icon class="pr-0 mr-0">
									          <v-icon small>mdi-home</v-icon>
									        </v-list-item-icon>

									        <v-list-item-title class="text-wrap font-weight-bold" style="font-size:.8rem;">vendor address</v-list-item-title>
									    </v-list-item>
										<v-list-item class="mb-0 pb-0">
									        <v-list-item-icon class="pr-0 mr-0">
									          <v-icon small>mdi-phone</v-icon>
									        </v-list-item-icon>

									        <v-list-item-title class="font-weight-bold" style="font-size:.8rem;">123456773</v-list-item-title>
									    </v-list-item>
										<v-card-text class="mb-1 mt-0 pt-0">
											vendor description
										</v-card-text>
									</v-list>
								</v-layout>
							</v-card>
						</v-layout>
					</v-dialog>
	              </div>
	            </div>
	          </v-card>
	        </v-col>
	        </v-row>
	      </v-col>
		</v-layout>
		<h3 class="mx-4 mt-3">Past Orders</h3>
		<v-layout row class="mx-auto" style="max-width: 100vw;" align-center justify-center>
		<!-- <v-row> -->
	      <v-col cols="12">
	        <v-row justify="center">
		    <v-col
	          cols="12">
	          <v-card
				class="mb-2 mx-auto px-0"
	            light>
	            <div class="d-flex flex-no-wrap">
	            	<v-avatar
	                class=""
	                size="145"
	                height=""
	                tile>
	                <v-img 
              		src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
              		</v-img>
	              </v-avatar>
	              <div>
	                <v-card-title class="mt-n1 pr-0 cols-3 text-truncate" style="font-size:1.1rem;"
	                >hello</v-card-title>
              			<v-card-subtitle class="caption justify-center mb-n9 pr-0 cols-5 text-truncate" style="font-size:.5rem;">
					      	<v-icon small class="align-end justify-center mr-1">mdi-clock-outline</v-icon>
					      	32443
						</v-card-subtitle>

						<v-row
						class="mt-3 ml-1 mb-n12 pb-n12"
					        >
					        <v-card-title class="body-1 deep-orange--text" style="font-size:1.1rem; font-weight: bold;">¥54</v-card-title>
					        <v-card-title class="body-2 ml-n5 text--disabled under">¥43</v-card-title>
					    </v-row>
							<v-card-actions class="mx-n1 mt-7 cols-3 mb-n2">
						      <v-btn small
						      depressed
						      class="white--text"
						      color="#FFB300"
						      disabled>redeem</v-btn>
		

						      <v-btn
						        depressed
						        color="#FFB300"
						        small
						        outlined
						        disabled>
						        Details
						      </v-btn>
						    </v-card-actions>
					 
						
	              </div>
	            </div>
	          </v-card>
	        </v-col>
	        </v-row>
	      </v-col>
		</v-layout>
		<!-- <v-layout column class="mx-5 mb-5">
			<v-list>
				<v-list-item>
					<v-list-item-avatar size="54" color="grey">
						<img :src="user.wx_avatar" />
					</v-list-item-avatar>
					<v-list-item-content>
						<v-list-item-title class="headline">{{
							user.wx_nickname
						}}</v-list-item-title>
					</v-list-item-content>
					<v-list-item-icon>
						
						<v-btn fab text @click="logout()"
						>
							<v-icon>mdi-logout</v-icon>
						</v-btn>
					</v-list-item-icon>
				</v-list-item>
			</v-list>

			<h3 class="mx-4 mt-3">{{ $t('todayOrder') }}</h3>

			<v-list
				two-line
				v-for="(deal, index) in deals"
				:key="index"
				width="90vw"
			>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title class="text-no-wrap">
							{{ deal.promotion.title }}
						</v-list-item-title>
						<v-list-item-subtitle class="text-no-wrap">
							{{ deal.vendor_name }}
						</v-list-item-subtitle>
						<v-list-item-subtitle class="text-no-wrap">
							{{ deal.promotion.time_slot }}
						</v-list-item-subtitle>
					</v-list-item-content>
					
					<v-list-item-icon @click="deal.dialog3 = true" class="my-0">
						<v-btn fab text>
							<v-icon>mdi-key</v-icon>
						</v-btn>
						<v-dialog v-model="deal.dialog3" max-width="290">
							<v-card>
								<v-layout row class="mx-auto">
									<v-card-title class="headline">{{ $t('couponCode') }}</v-card-title>
									<v-spacer></v-spacer>
									<v-btn icon @click="deal.dialog3 = false">
										<v-icon>mdi-close</v-icon>
									</v-btn>
								</v-layout>

								<v-card-text class="headline">
									{{ deal.token }}
								</v-card-text>
							</v-card>
						</v-dialog>
					</v-list-item-icon>
					<v-list-item-icon @click="deal.dialog = true" class="my-0">
						<v-btn fab text>
							<v-icon>mdi-delete</v-icon>
						</v-btn>
						<v-dialog v-model="deal.dialog" max-width="290">
							<v-card>
								<v-layout row class="mx-auto">
									<v-card-title class="headline">{{ $t('cancel') }}?</v-card-title>
									<v-spacer></v-spacer>
									<v-btn icon @click="deal.dialog = false">
										<v-icon>mdi-close</v-icon>
									</v-btn>
								</v-layout>

								<v-card-text>
									{{ $t('areYouSureProfile') }}
								</v-card-text>

								<v-card-actions class="d-flex justify-center pb-3">
									<v-btn
										width="80%"
										dark
										color="#DFA937"
										tile
										class="buttons"
										depressed
										@click="remove(deal)"
									>
										{{ $t('yesIamSure') }}
									</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</v-list-item-icon>

					<v-list-item-icon>
					</v-list-item-icon>
				</v-list-item>
			</v-list>
		</v-layout>
		<v-layout justify-center class="mb-12 pb-12">
			<v-btn
				width="60%"
				dark
				color="#DFA937"
				class="buttons mb-12"
				tile
				depressed
				to="/deals"
			>
				{{ $t('browseDeals') }}
			</v-btn>
		</v-layout> -->
	</div>
</template>
<script>
	// import axios from 'axios';
	import Navbar from '../components/Navbar';
	// axios.defaults.headers.common['X-Auth-Token'] = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxLCJleHAiOjE1ODkxODUyMTl9.yCeUHSSHkqET1Rbr9wznhKmE_nw62Iztu4RW3H3IBi4";
	// axios.defaults.headers.common['API-key'] = 'gastbyellenapikey';
  // this.$api.defaults.headers.common['X-Auth-Token'] = sessionStorage.getItem('token');

	export default {
		name: 'Profile',
		components: { Navbar },
		
		created() {
      		let storedToken = sessionStorage.getItem('token');
		    if ((storedToken != undefined || storedToken != null) && storedToken != 'logout') {
		        this.$api.defaults.headers.common['X-Auth-Token'] = storedToken
		        this.$api
				.get(
					`/coupons`
				)
				.then(response => {
					this.deals = response.data;
					this.deals = this.deals.map(deals => ({
						...deals,
						dialog: false,
						dialog3: false
					}));
				})
				.catch(function(error) {
					alert('fail' + error);
				});
		    } else {
				window.location.href = "https://gast.world"
		    }

			
		},
		data() {
			return {
				customerID: 1,
				deals: [],
				res: [],
				promotion: false,
				snackbar: false,
				dia: false,
				//what is the data we get from the api? to put the username and avatar?
				user: JSON.parse(sessionStorage.getItem('user'))
			};
		},
		methods: {
			// @@@FIXME - CAN I DO THIS???? @@@@
			logout() {
				// sessionStorage.clear();
              	sessionStorage.setItem('token', 'logout');
				window.location.href = "https://gast.world"
				// redirect('/');
			},
			// getProfileInfo() {

			// },
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
	};
</script>

<style scoped>
	.profile {
		background-color: white;
	}
	.buttons {
		border-radius: 5px;
	}
</style>
