<template>
	<div class="profile" >
		<Navbar />
		<v-layout column class="mx-5 mb-5">
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
						<!-- @@@@ FIXME - CAN I DO THIS????@@@@@--> 
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
					<!-- <v-spacer></v-spacer> -->
					<v-list-item-icon @click="deal.dialog3 = true" class="my-0">
						<v-btn fab text>
							<v-icon>mdi-key</v-icon>
						</v-btn>
						<v-dialog v-model="deal.dialog3" max-width="290">
							<v-card>
								<v-layout row class="mx-auto">
									<v-card-title class="headline">Coupon Code</v-card-title>
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
									<v-card-title class="headline">Cancel coupon?</v-card-title>
									<v-spacer></v-spacer>
									<v-btn icon @click="deal.dialog = false">
										<v-icon>mdi-close</v-icon>
									</v-btn>
								</v-layout>

								<v-card-text>
									Are you sure you want to cancel this deal?
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
										yes, i am sure
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
				browse deals
			</v-btn>
		</v-layout>
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
				snackbar: false,
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
