<template>
	<div class="profile" >
		<Navbar />
		<v-layout hidden-md-and-up>
			<v-img height="200px" src="../assets/cross.jpg" ></v-img>
		</v-layout>
		<v-layout hidden-sm-and-down class="mt-12 pt-12">
		
		</v-layout>
		<!-- <v-layout column class="mx-12 my-12 mt-12" width="60vw" min-height="500px" hidden-sm-and-down justify-center>
			<v-list v-for="user in users" :key="user.username">
				<v-list-item>
					<v-list-item-avatar size="54" color="grey">
						<img :src="user.avatar" />
					</v-list-item-avatar>
					<v-list-item-content>
						<v-list-item-title class="headline">{{
							user.username
						}}</v-list-item-title>
					</v-list-item-content>
					<v-list-item-icon>
						<v-btn fab text>
							<v-icon>mdi-logout</v-icon>
						</v-btn>
					</v-list-item-icon>
				</v-list-item>
			</v-list>

			<h3 class="mx-4 mt-3">Today's claims</h3>

			<v-list
				row
				two-line
				v-for="(deal, index) in deals"
				:key="index"
				width="90vw"
			>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title>
							{{ deal.promotion.title }}
						</v-list-item-title>
						<v-list-item-subtitle>
							{{ deal.promotion.end_time }}
						</v-list-item-subtitle>
					</v-list-item-content>
					<v-spacer></v-spacer>
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

								<v-card-text>
									API fetch
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
									Are you sure you want to cancel this deal? They will no longer
									be expecting you!
								</v-card-text>

								<v-card-actions class="d-flex justify-center pb-3">
									<v-btn
										width="80%"
										dark
										color="#DFA937"
										tile
										class="buttons"
										depressed
										@click="remove(deal.id, index)"
									>
										yes, i am sure
									</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</v-list-item-icon>
				</v-list-item>
			</v-list>
		</v-layout> -->
		<v-layout column class="mx-5 my-5">
			<v-list v-for="user in users" :key="user.username">
				<v-list-item>
					<v-list-item-avatar size="54" color="grey">
						<img :src="user.avatar" />
					</v-list-item-avatar>
					<v-list-item-content>
						<v-list-item-title class="headline">{{
							user.username
						}}</v-list-item-title>
					</v-list-item-content>
					<v-list-item-icon>
						<v-btn fab text>
							<v-icon>mdi-logout</v-icon>
						</v-btn>
					</v-list-item-icon>
				</v-list-item>
			</v-list>

			<h3 class="mx-4 mt-3">Today's claims</h3>

			<v-list
				row
				two-line
				v-for="(deal, index) in deals"
				:key="index"
				width="90vw"
			>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title>
							{{ deal.promotion.title }}
						</v-list-item-title>
						<v-list-item-subtitle>
							{{ deal.vendor_name }}
						</v-list-item-subtitle>
						<v-list-item-subtitle>
							{{ deal.promotion.time_slot }}
						</v-list-item-subtitle>
					</v-list-item-content>
					<v-spacer></v-spacer>
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
									Are you sure you want to cancel this deal? They will no longer
									be expecting you!
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

	export default {
		name: 'Profile',
		components: { Navbar },
		mounted() {
			// this.getProfileInfo();
		},
		created() {
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
		},
		data() {
			return {
				customerID: 1,
				deals: [],
				res: [],
				snackbar: false,
				users: [
					{
						username: 'Jim Halpert',
						avatar: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg'
					}
				]
			};
		},
		methods: {
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
