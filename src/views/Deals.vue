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
  							<v-select
					        v-model="filter.checkedAreas"
					        :items="areas"
					        multiple
					        chips
					        color="#DFA937"
                    		@change="filterDeals">
					        	<template v-slot:label>
									<div>
										{{ $t('fba') }}
									</div>
								</template>
					        </v-select>
					        <v-select
					        v-model="filter.checkedTypes"
					        :items="vendor_type"
					        multiple
					        chips
					        color="#DFA937"
                    		@change="filterDeals">
					        	<template v-slot:label>
									<div>
										{{ $t('fbt') }}
									</div>
								</template>
					        </v-select>
        				</v-list>
    				</v-col>
  				</v-row>
      		</div>
    	</v-expand-transition>
    	<!-- if nothing has been added, dont show the button-->
    	<v-layout row class="mx-auto" align-center justify-center v-if="claimed">
    		<v-btn
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
				<v-icon right dark>mdi-cart</v-icon>
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
				            v-for="promotion in details"
							:key="promotion.id"
							@click.native="promotion.deets = true">
				            <div class="d-flex flex-no-wrap">
				            	<v-avatar
				                class=""
				                size="145"
				                height=""
				                tile>
					                <v-img
						            class="white--text"
					              	gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.5)"
					              	:src="promotion.image">
				              			<v-row align="end" justify="center">
			              					<v-card-title class="subtitle-2 white--text align-end justify-center pb-1">
								      			<v-icon small class="white--text align-end justify-center pb-1">mdi-noodles</v-icon>
								      				{{ promotion.statistics.available }}{{ $t('avi') }}
											</v-card-title>
										</v-row>
			              			</v-img>
				            	</v-avatar>
				            	<div>
				                	<v-card-title class="mt-n1 mb-2 pr-0 cols-3 text-truncate" style="font-size:1.1rem;">{{ promotion.title }}</v-card-title>
									<!-- <v-spacer></v-spacer> -->
			              			<v-card-subtitle class="caption align-end justify-center mb-n8 pr-0 cols-5 text-truncate" style="font-size:.5rem;">
								      	<v-icon small class="align-end justify-center mr-1">mdi-clock-outline</v-icon>
								      	{{ promotion.time_slot }}
									</v-card-subtitle>
									<v-row class="mt-3 ml-1 mb-n12 pb-n12">
								        <v-card-title class="body-1 deep-orange--text" style="font-size:1.1rem; font-weight: bold;">¥{{promotion.price}}</v-card-title>
								        <v-card-title class="body-2 ml-n5 text--disabled under">¥{{promotion.original_price}}</v-card-title>
								        <v-spacer></v-spacer>
								        <!--@@ plus and minus button and the quantity display area -->
								        
								        <!--@@ plus and minus button and the quantity display area -->
								    </v-row>
								    <v-row class="mt-4 ml-1 mb-n10 pb-n10">
								    	<v-btn class="plmn mt-4 mb-n10 pb-n10" bottom style="z-index: 3;"
			              				@click.stop="minusQty(promotion)"
                           				fab
                           				text
			              				x-small
			              				depressed
			              				color="#FFB300">
								        	<v-icon>mdi-minus
								        	</v-icon>
								        </v-btn>
								        <v-card-title class="body-1 mt-5 mx-0 pa-0" style="font-size:1rem;color:gray;">{{promotion.qty}}</v-card-title>
								        <v-btn class="plmn mt-4 mb-n12 pb-n12" bottom style="z-index: 3;"
			              				@click.stop="plusQty(promotion)"
			              				fab
			              				text
			              				x-small
			              				depressed
			              				color="#FFB300">
								        	<v-icon>mdi-plus
								        	</v-icon>
								        </v-btn>

			                        <v-btn class="white--text plmn mt-4 mb-n12 pb-n12" bottom style="z-index: 3;"
			                            @click.stop="getCoupon(promotion)"
			                            fab
			                            x-small
			                            depressed
			                            color="#FFB300">
			                          <v-icon dark>mdi-cart</v-icon>
			                        </v-btn>
								    </v-row>
								    <v-dialog v-model="promotion.dialog" max-width="290">
										<v-card>
											<v-layout row class="mx-auto">
												<v-card-title class="headline">{{ $t('suc') }}</v-card-title>
												<v-spacer></v-spacer>
												<v-btn icon @click="promotion.dialog = false">
													<v-icon>mdi-close</v-icon>
												</v-btn>
											</v-layout>
											<v-card-text>
												{{ $t('sucmes') }}
											</v-card-text>
											<v-card-actions class="d-flex justify-center pb-3">
												<v-btn
													width="80%"
													dark
													color="#FFB300"
													tile
													class="buttons"
													depressed
													to="/profile">
													{{ $t('sip') }}
												</v-btn>
											</v-card-actions>
										</v-card>
									</v-dialog>
									<v-dialog v-model="promotion.deets" width="290">
							    		<v-layout>
											<v-card width="290">
												<v-img :src="promotion.image" height="250px">
												</v-img>
												<v-layout row class="mx-3 px-1 mb-0 pb-0">
													<v-card-title class="mb-0 pb-0">
														{{ promotion.title }}
													</v-card-title>
												</v-layout>
												<v-layout row class="ml-3 mr-3 mt-0 px-1 pt-0">
												<v-list>
													<v-list-item class="mt-1 mb-n3">
													    <v-list-item-icon class="pr-0 mr-0">
													        <v-icon small>mdi-clock-time-four</v-icon>
													    </v-list-item-icon>
													    <v-list-item-title class="text-wrap font-weight-bold" style="font-size:.8rem;">{{ promotion.time_slot }}</v-list-item-title>
													</v-list-item>
													<v-list-item class="mb-0 pb-0">
													    <v-list-item-icon class="pr-0 mr-0">
													        <v-icon small>mdi-noodles</v-icon>
													    </v-list-item-icon>
													    <v-list-item-title class="font-weight-bold" style="font-size:.8rem;">{{ promotion.statistics.available }}{{ $t('avi') }}</v-list-item-title>
													    </v-list-item>
													<v-spacer></v-spacer>
													<v-card-text class="py-0">
														{{ promotion.description }}
													</v-card-text>
												</v-list>
												</v-layout>
												<v-card-actions class="d-flex justify-center pb-3">
													<v-btn
														width="80%"
														dark
														color="#FFB300"
														tile
														class="buttons"
														depressed
														@click.stop="getCoupon(promotion)">
														{{ $t('claim') }}
													</v-btn>
												</v-card-actions>
												<v-layout row class="mx-5">
													<v-list>
														<v-list-item>
															<v-list-item-avatar size="42" color="grey">
																<v-img :src="promotion.vendor.logo_img" alt="Logo" />
															</v-list-item-avatar>
															<v-list-item-content>
																<v-list-item-title>{{promotion.vendor.name}}</v-list-item-title>
															</v-list-item-content>
														</v-list-item>
														<v-list-item class="mt-1 mb-n3">
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
														<v-card-text class="mb-1 mt-0 pt-0">{{ promotion.vendor.description }}</v-card-text>
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
	</div>
</template>

<script>

	import Navbar from '../components/Navbar';

	export default {
		name: 'Deals',
		components: { Navbar },
		props: { msg: String },
		data() {
			return {
				details: [],
				filter: {
					checkedAreas: [],
        	checkedTypes: []
				},
				valid: '',
				show: false,
        claimed: false,
				areas: ['Xuhui', 'Jingan', 'Huangpu', 'Changning', 'Hongkou', 'Yangpu', 'Putuo', 'Pudong', 'Other'],
				vendor_type: ['Restaurant', 'Bar', 'Cafe', 'Store'],
				login: !(sessionStorage.getItem('token') != undefined && sessionStorage.getItem('token') != 'logout'),
			};
		},
		methods: {
			getCoupon(promotion) {
        let page = this;
				this.$api.post(`/promotions/${promotion.id}/claim_coupon`, {quantity: promotion.qty}).then(function() {
					promotion.deets = false;
					promotion.dialog = false;
          page.claimed = true;
				})
				.catch(function(error) {
					alert('fail' + error);
				});
			},
			submitUpload() {
		    this.$refs.upload.submit();
		  },
      filterDeals() {
        let filtedDetails = [];
        // alert(this.filter.checkedAreas)
        // alert(this.filter.checkedTypes)
        if (this.filter.checkedAreas.length > 0 && this.filter.checkedTypes.length > 0) {
          filtedDetails = this.allDetails.filter((e) => {
            return this.filter.checkedAreas.includes(e.vendor.area) && this.filter.checkedTypes.includes(e.vendor.vendor_type)
          })
        } else if (this.filter.checkedAreas.length > 0) {
          filtedDetails = this.allDetails.filter((e) => {
            return this.filter.checkedAreas.includes(e.vendor.area)
          })
        } else if (this.filter.checkedTypes.length > 0) {
          filtedDetails = this.allDetails.filter((e) => {
            return this.filter.checkedTypes.includes(e.vendor.vendor_type)
          })
        }
        // filtedDetails could be empty, add fallback tell users this
        this.details = filtedDetails
      },
      fetchDeals() {
        this.$api.get(`/promotions`).then(response => {
          this.details = response.data;
          this.details = this.details.map(details => ({
            ...details,
            show: false,
            deets: false,
            dialog: false,
            dialograting: false,
            qty: 1
          }));
          // backup all deals
          this.allDetails = this.details;
        }).catch(e => {
          this.error.push(e);
        });
      },
      plusQty(promotion) {
        promotion.qty += 1
        this.promotion = promotion
      },
      minusQty(promotion) {
        if (promotion.qty > 1) {
          promotion.qty -= 1
          this.promotion = promotion
        }
      }
		},
	  created () {
			let storedToken = sessionStorage.getItem('token');
			let login = !(storedToken != undefined && storedToken != 'logout')
			this.login = login;

			if ((storedToken != null || storedToken != undefined) && storedToken != 'logout') {
        this.$api.defaults.headers.common['X-Auth-Token'] = storedToken
			}

			if (this.$route.query.code != null || this.$route.query.code != undefined) {
        this.$api.get(`/users/login/wx_web_login?code=${this.$route.query.code}`).then((res) => {
          this.$api.defaults.headers.common['X-Auth-Token'] = res.data.user.token
          sessionStorage.setItem('token', res.data.user.token);
          sessionStorage.setItem('user', JSON.stringify(res.data.user));
            // Vue.prototype.$api = this.$api;
            window.location.href = window.location.origin + `?time=${new Date().getTime()}`;
        }).catch(() => {
          window.location.href = window.location.origin + `?time=${new Date().getTime()}`;
        });
	  	}
      this.fetchDeals();
  	}
	};
</script>

<style scoped>
	.home {
		background-color: white;
	}
	.buttons {
		border-radius: 5px;
	}
	.under {
		text-decoration: line-through;
	}
	/*.buttonst {
		border-radius: 5px;
		background-color: rgba(223, 169, 55, 20%) !important;
		color: #dfa937 !important;
	}*/
</style>
