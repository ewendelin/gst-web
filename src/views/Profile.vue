<template>
	<div class="profile" >
		<Navbar />
		<v-layout column class="mx-5 mb-5">
			<v-list>
				<v-list-item>
					<v-list-item-avatar size="54" color="grey">
						<img :src="user.wx_avatar" v-if="user" />
					</v-list-item-avatar>
					<v-list-item-content>
						<v-list-item-title class="headline" v-if="user">{{
							user.wx_nickname
						}}</v-list-item-title>
					</v-list-item-content>
					<!-- <v-list-item-icon>
						<v-btn fab text @click="editdelivery()">
							<v-icon>mdi-pencil</v-icon>
						</v-btn>
					</v-list-item-icon> -->
				</v-list-item>
			</v-list>
		</v-layout>
		<h3 class="mx-5">Delivery Info</h3>
		<p class="mx-5">{{user.primary_address}}</p>
		<p class="mx-5 mt-n4">{{user.name}}</p>
		<p class="mx-5 mt-n4">{{user.mobile_phone}}</p>
		<v-layout row class="mx-auto" align-center justify-center>
			<v-btn
        @click="dialogdelivery = true"
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
									<v-form ref="form" v-model="user" lazy-validation class="mx-8">
										<v-text-field
												v-model="user.name"
												:rules="[v => !!v || 'Name is required!']"
												required
												color="#DFA937"
											>
												<template v-slot:label>
													<div>
														{{ $t('deliveryName') }}
													</div>
												</template>
											</v-text-field>


											<v-text-field
												v-model="user.primary_address"
												required
												:rules="[v => !!v || 'Address is required!']"
												color="#DFA937"
											>
												<template v-slot:label>
													<div>
														{{ $t('deliveryAddress') }}
													</div>
												</template>
											</v-text-field>


											<v-text-field
												v-model="user.mobile_phone"
												required
												:rules="[v => !!v || 'Phone number is required!']"
												color="#DFA937"
											>
												<template v-slot:label>
													<div>
														{{ $t('deliveryMobile') }}
													</div>
												</template>
											</v-text-field>

									</v-form>

									<v-layout class="align-center justify-center">
										<v-btn
                      @click="updateAddress"
											dark
											width="80%"
											color="#DFA937"
											tile
											class="buttons mb-3"
											depressed
										>Save
										</v-btn>
									</v-layout>

					</v-card>
				</v-dialog>
		</v-layout>
		<h3 class="mx-4 mt-3 mb-n3">{{ $t('todayOrder') }}</h3>
		<v-layout row class="mx-auto" style="max-width: 100vw;" align-center justify-center>
	    	<v-col cols="12">
	        	<v-row justify="center">
		    		<v-col
	          		cols="12">
	          			<v-card
						class="mb-2 mx-auto px-0"
			            light
			            v-for="(deal, index) in deals"
						:key="index">
	            			<div class="d-flex flex-no-wrap">
				            	<v-avatar
				                class=""
				                size="145"
				                height=""
				                tile>
				                	<v-img
			              			:src="deal.promotion.image">
			              			</v-img>
				                </v-avatar>
	              				<div>
	                				<v-card-title class="mt-n1 pr-0 cols-3 text-truncate" style="font-size:1.1rem;"
	                				>{{ deal.promotion.title }}</v-card-title>
									<v-card-subtitle class="caption justify-center mb-n9 pr-0 cols-5 text-truncate" style="font-size:.5rem;">
					      				<v-icon small class="align-end justify-center mr-1">mdi-clock-outline</v-icon>
					      					{{ deal.promotion.time_slot }}
									</v-card-subtitle>
									<v-row
									class="mt-3 ml-1 mb-n12 pb-n12">

					        			<v-card-title class="body-1 deep-orange--text" style="font-size:1.1rem; font-weight: bold;">¥{{deal.promotion.price}}</v-card-title>
					        			<v-card-title class="body-2 ml-n5 text--disabled under">¥{{deal.promotion.original_price}}</v-card-title>
					    			</v-row>
									<v-card-actions class="mx-n1 mt-7 cols-3 mb-n2">
								    	<v-btn small
                      v-if="deal.paid"
								    	depressed
								    	class="white--text"
								    	color="#07C160"
								    	@click.stop="deal.dia = true">redeem</v-btn>
                      <v-btn small
                      width="78"
                      v-if="deal.paid == false"
                      depressed
                      class="white--text"
                      color="#FFB300"
                      @click="toCheckout(deal)">Pay</v-btn>
											<v-dialog v-model="deal.dia" max-width="290">
												<v-card>
													<v-layout row class="mx-auto">
														<v-card-title class="headline">{{ $t('couponCode') }}</v-card-title>
														<v-spacer></v-spacer>
														<v-btn icon @click="deal.dia = false">
															<v-icon>mdi-close</v-icon>
														</v-btn>
													</v-layout>

													<v-card-text class="headline">
														{{ deal.token }}
													</v-card-text>
												</v-card>
											</v-dialog>
										<v-btn
									    depressed
									    color="#FFB300"
									    small
									    outlined
									    @click.stop="deal.dets = true">
									    Details
									    </v-btn>
						    		</v-card-actions>
									<v-dialog v-model="deal.dets" width="290">
							    		<v-layout>
											<v-card width="290">
												<v-img :src="deal.promotion.image" height="250px">
												</v-img>
											<v-layout row class="ml-3 mr-3 px-1 pt-0">
												<v-list>
													<v-card-title class="mb-n2 pb-0">
														{{ deal.promotion.title }}
													</v-card-title>
													<v-list-item class="mt-1 mb-n3">
													    <v-list-item-icon class="pr-0 mr-0">
													        <v-icon small>mdi-clock</v-icon>
													    </v-list-item-icon>
													    <v-list-item-title class="text-wrap font-weight-bold" style="font-size:.8rem;">{{ deal.promotion.time_slot }}</v-list-item-title>
													</v-list-item>
													<v-spacer></v-spacer>
													<v-card-text class="py-0">
														{{ deal.promotion.description }}
													</v-card-text>
												</v-list>
											</v-layout>
												<v-layout row class="mx-5">
													<v-list>
														<v-list-item>
															<v-list-item-avatar size="42" color="grey">
																<v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" alt="Logo" />
															</v-list-item-avatar>
															<v-list-item-content>
																<v-list-item-title>{{ deal.vendor_name }}</v-list-item-title>
															</v-list-item-content>
														</v-list-item>
														<v-list-item class="mt-1 mb-n3">
													        <v-list-item-icon class="pr-0 mr-0">
													          <v-icon small>mdi-home</v-icon>
													        </v-list-item-icon>

													        <v-list-item-title class="text-wrap font-weight-bold" style="font-size:.8rem;">{{ deal.vendor.address }}</v-list-item-title>
													    </v-list-item>
														<v-list-item class="mb-0 pb-0">
													        <v-list-item-icon class="pr-0 mr-0">
													          <v-icon small>mdi-phone</v-icon>
													        </v-list-item-icon>

													        <v-list-item-title class="font-weight-bold" style="font-size:.8rem;">{{ deal.vendor.contact_number }}</v-list-item-title>
													    </v-list-item>
														<v-card-text class="mb-1 mt-0 pt-0">
															{{ deal.vendor.description }}
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

    <!-- buttons to deals or checkout -->
    <v-layout row class="mx-auto" align-center justify-center>
      <v-btn
        v-if="deals.length > 0"
        align-center
        width="60%"
        justify-center
        dark
        color="#FFB300"
        tile
        class="buttons"
        depressed
        to="/checkout"
        style="position: fixed; bottom: 60px; z-index: 5;">checkout
      <v-icon right dark>
            mdi-cart
        </v-icon>
      </v-btn>

      <v-btn
        v-if="deals.length == 0"
        width="20rem"
        dark
        color="#07C160"
        tile
        class="buttons"
        depressed
        @click="toDeals"
        >{{ $t('browseDeals') }}
        <v-icon right>mdi-sale</v-icon>
      </v-btn>
    </v-layout>

		<!-- <h3 class="mx-4 mt-3 mb-n3">Past Orders</h3>
		<v-layout row class="mx-auto" style="max-width: 100vw;" align-center justify-center>
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
	                >{{ deal.promotion.title }}</v-card-title>
              			<v-card-subtitle class="caption justify-center mb-n9 pr-0 cols-5 text-truncate" style="font-size:.5rem;">
					      	<v-icon small class="align-end justify-center mr-1">mdi-clock-outline</v-icon>
					      	{{ deal.promotion.time_slot }}
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
		</v-layout> -->
	</div>
</template>
<script>
	// import axios from 'axios';
	import Navbar from '../components/Navbar';
	export default {
		name: 'Profile',
		components: { Navbar },
		props: { msg: String },
		created() {
      this.user = JSON.parse(sessionStorage.getItem('user')) || {}
      let storedToken = sessionStorage.getItem('token');
	    if ((storedToken != undefined || storedToken != null) && storedToken != 'logout') {
	     this.$api.defaults.headers.common['X-Auth-Token'] = storedToken
	     this.fetchCoupons()
      } else {
			  window.location.href = "https://gast.world"
	    }
		},
		data() {
			return {
				deals: [],
				res: [],
				snackbar: false,
				dialogdelivery: false,
				//what is the data we get from the api? to put the username and avatar?
				// user: JSON.parse(sessionStorage.getItem('user')) || {}
			};
		},
		methods: {
			// @@@FIXME - CAN I DO THIS???? @@@@
			logout() {
				// sessionStorage.clear();
        sessionStorage.setItem('token', 'logout');
				window.location.href = "https://gast.world"
			},
			getProfileInfo() {

			},
      toDeals() {
        window.location.href = window.location.origin + '/deals'
      },
      toCheckout(deal) {
        window.location.href = window.location.origin + '/checkout' + `?id=${deal.order.id}`;
      },
			remove(deal) {
				// this.$api(this.deals, index);
				this.$api.post(`/coupons/${deal.id}`,).then(response => {
					this.canceled = response
					this.res = this.deals.filter((x) => {
						return x.id != deal.id
					});
					this.deals = this.res;
				})
				.catch(function(error) {
					alert('fail' + error);
				});
			},
      fetchCoupons() {
        this.$api.get(`/coupons`).then(response => {
          let deals = response.data;
          this.user = deals[0].user;
          this.deals = deals.map(deals => ({
            ...deals,
            dialog: false,
            dialog3: false,
            dia: false,
            dets: false
          }))
          // store the user in session
          sessionStorage.setItem('user', JSON.stringify(this.user));
        }).catch(function(error) {
          alert('fail' + error);
        });
      },
      updateAddress() {
        this.$api.post(`/users/address`).then(response => {
          this.user = response.data
          sessionStorage.setItem('user', JSON.stringify(this.user));
        })
        .catch(function(error) {
          alert('fail' + error);
        });
      },
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
