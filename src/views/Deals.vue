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
					          label="Filter by area"
					          multiple
					          chips
					          color="#DFA937"
                    @change="filterDeals"
					        ></v-select>
					        <v-select
					          v-model="filter.checkedTypes"
					          :items="vendor_type"
					          label="Filter by venue"
					          multiple
					          chips
					          color="#DFA937"
                    @change="filterDeals"
					        ></v-select>
        				</v-list>
    				</v-col>
  				</v-row>
      		</div>
    	</v-expand-transition>
		<v-layout row class="mx-auto" align-center justify-center>
		<!-- <v-row> -->
	      <v-col cols="12">
	        <v-row justify="center">
		    <v-col
	          cols="12"
	        >
	          <v-card
				class="mb-2"
	            light
	            v-for="promotion in details"
				:key="promotion.id"
				@click.native="promotion.deets = true"
	 >
	            <div class="d-flex flex-no-wrap">
	            	<v-avatar
	                class=""
	                size="145"
	                height=""
	                tile
	                >
	                <v-img 
	                class="white--text"
              		gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.5)"
              		:src="promotion.image">
              		<!-- <v-list dense> -->

              			<v-row align="end" justify="center">
              				<v-card-title class="subtitle-2 white--text align-end justify-center pb-1">
					      		<v-icon small class="white--text align-end justify-center pb-1">mdi-noodles</v-icon>
					      	{{ promotion.statistics.available }}份
							</v-card-title>
						</v-row>
              		</v-img>
              		
	              </v-avatar>
	              <div>
	                <v-card-title class="mt-n2 d-inline-block text-truncate" style="max-width: 225px;"
	                >{{ promotion.title }}</v-card-title>
					<!-- <v-spacer></v-spacer> -->
              			<v-card-subtitle class="subtitle-2 align-end justify-center mt-3 mb-n8">
					      	<v-icon small class="align-end justify-center mr-1">mdi-clock-time-four</v-icon>Aug 31st 13:00 - 18:00
					      	<!-- {{ promotion.time_slot }} -->
						</v-card-subtitle>

						<v-row
						class="mt-3 ml-1 mb-n12 pb-n12"
					        >
					        <v-card-title class="deep-orange--text">¥{{promotion.price}}</v-card-title>
					        <v-card-title class="body-1 ml-n5 text--disabled under">¥88</v-card-title>
					        <v-spacer></v-spacer>
					        <v-btn class="white--text mr-n1 mb-7" bottom
              				right
              				absolute 
              				fab 
              				x-small
              				depressed
              				color="#dfa937"
              				@click.stop="getCoupon(promotion)">
					        	<v-icon>mdi-cart-plus
					        	</v-icon>
					        </v-btn>
					    </v-row>
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

									        <v-list-item-title class="font-weight-bold" style="font-size:.8rem;">{{ promotion.statistics.available }} 份</v-list-item-title>
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
										color="#DFA937"
										tile
										class="buttons"
										depressed
										@click.stop="getCoupon(promotion)"
									>
										claim
									</v-btn>
								</v-card-actions>
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
										<v-card-text class="mb-1 mt-0 pt-0">
											{{ promotion.vendor.description }}
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
	        	<!-- <v-card
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
				    <v-card-subtitle class="pt-0 mt-n3" style="font-size:.6rem;">
				      {{ promotion.statistics.available }} - available
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
						
				    	<v-btn
				    	class="pa-.5 ml-n1"
				        dark
				        small
						color="#DFA937"
				        text
						style="font-size:.6rem;"
				        
				    	>
				        	details
				    	</v-btn>
				    	
			    	<v-spacer></v-spacer>
			    </v-card-actions>
			  </v-card> -->
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
		data() {
			return {
				details: [],
				filter: {
					checkedAreas: [],
        			checkedTypes: []
				},
				valid: '',
				show: false,
				areas: ['Xuhui', 'Jingan', 'Huangpu', 'Changning', 'Hongkou', 'Yangpu', 'Putuo', 'Pudong', 'Other'],
				vendor_type: ['Restaurant', 'Bar', 'Cafe', 'Store']
			};
		},
		methods: {
			getCoupon(promotion) {
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

      }
		},
	  created () {
	      let storedToken = sessionStorage.getItem('token');
	      if (storedToken != undefined || storedToken != null) {
	        this.$api.defaults.headers.common['X-Auth-Token'] = storedToken
			  }
  			this.$api
  				.get(`/promotions`)
  					.then(response => {
  						this.details = response.data;
  						this.details = this.details.map(details => ({
  							...details,
  							show: false,
  							deets: false,
  							dialog: false,
  							dialograting: false,
  						}));
              // backup all deals
              this.allDetails = this.details;
  				})
  				.catch(e => {
  					this.error.push(e);
  				});
  	    },
  	    // computed: {
  	    // 	filteredPromotions: function(){
  	    // 		return this.details.filter((promotion) => {
  	    // 			return promotion.area.match(this.filter)
  	    // 		});
  	    // 	}
  	    // }
  	    // mounted () {

  	    // }
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
