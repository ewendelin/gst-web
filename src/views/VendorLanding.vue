<template>
	<div class="vendorlanding">
		<v-img height="200px" src="../assets/cross.jpg"></v-img>
		<v-layout row class="d-flex justify-space-around mx-9 my-8">
			<!-- <v-btn
				width="35vw"
				dark
				color="#DFA937"
				tile
				class="buttons"
				depressed
				@click="dialog = true"
			>
				login
			</v-btn>
			<v-dialog v-model="dialog" max-width="300">
				<v-card>
					<v-layout row class="mx-3">
						<v-card-title>Login</v-card-title>
						<v-form ref="form" v-model="valid" lazy-validation class="mx-5">
							<v-text-field
								v-model="email"
								:rules="emailRules"
								label="E-mail"
								required
								color="#DFA937"
							></v-text-field>

							<v-text-field
								v-model="password"
								:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
								:type="show1 ? 'text' : 'password'"
								name="input-10-1"
								@click:append="show1 = !show1"
								color="#DFA937"
							></v-text-field>
						</v-form>
						<v-btn
							dark
							width="95%"
							color="#DFA937"
							tile
							class="buttons mb-3"
							depressed
							to="/vendor"
						>
							login
						</v-btn>
						<v-btn text small class="pt-0 mt-0" @click="dialog1 = true">
							<v-card-text class="mr-3 pt-0 text-lowercase"
								><span class="text-capitalize">Don’t</span> have an account yet?
								<span class="font-weight-bold"
									><span class="text-capitalize">Register</span> here</span
								></v-card-text
							>
						</v-btn>
					</v-layout>
				</v-card>
			</v-dialog>
			<v-btn
				width="35vw"
				tile
				class="buttonst"
				depressed
				@click="dialog1 = true"
			>
				register
			</v-btn>
			<v-dialog v-model="dialog1" max-width="300">
				<v-card>
					<v-layout row class="mx-3">
						<v-card-title>Register Vendor Account</v-card-title>
						<v-form ref="form" v-model="valid" lazy-validation class="mx-5">
							<v-text-field
								v-model="vendorname"
								label="Name of Establishment"
								required
								color="#DFA937"
							></v-text-field>

							<v-select
								v-model="value"
								:items="items"
								attach
								label="Type of Establishment"
								color="#DFA937"
							></v-select>

							<v-text-field
								v-model="contactperson"
								label="Contact Person"
								required
								color="#DFA937"
							></v-text-field>
							<v-text-field
								v-model="address"
								label="Address"
								required
								color="#DFA937"
							></v-text-field>

							<v-text-field
								v-model="email"
								label="E-mail"
								required
								color="#DFA937"
							></v-text-field>

							<v-text-field
								v-model="contactnumber"
								label="Phone Number"
								required
								color="#DFA937"
							></v-text-field>

							<v-text-field
								v-model="password"
								:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
								:type="show1 ? 'text' : 'password'"
								name="input-10-1"
								label="Password"
								@click:append="show1 = !show1"
								color="#DFA937"
							></v-text-field>
							<v-text-field
								v-model="password"
								:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
								:type="show1 ? 'text' : 'password'"
								label="Confirm Password"
								name="input-10-1"
								@click:append="show1 = !show1"
								color="#DFA937"
							></v-text-field>
							<v-checkbox
								v-model="checkbox"
								label="Agree with terms of service"
								required
							></v-checkbox>
						</v-form>
						<v-btn
							dark
							width="95%"
							color="#DFA937"
							tile
							class="buttons mb-3"
							depressed
							@click="snackbar = true"
						>
							submit for approval
						</v-btn>
						<v-snackbar v-model="snackbar" color="success">
							Successfully submitted. An account manager will contact you
							shortly to confirm your account
							<v-btn vertical text dark @click="snackbar = false">close</v-btn>
						</v-snackbar>

						<v-btn text small class="pt-0 mt-0" @click="dialog = true">
							<v-card-text class="mr-3 pt-0 text-lowercase"
								><span class="text-capitalize">Already</span> have an account?
								<span class="font-weight-bold"
									><span class="text-capitalize">Login</span> here</span
								></v-card-text
							>
						</v-btn>
					</v-layout>
				</v-card>
			</v-dialog> -->
		</v-layout>
		<v-layout row class="mx-9 my-8">
			<v-list v-for="vendor in vendors" :key="vendor.id">
				<p class="font-weight-medium">Your Venues:</p>
				<v-list-item>
					{{vendor.name}}	
				</v-list-item>
			</v-list>
		</v-layout>
		<VNav />
	</div>
</template>
<script>
	import VNav from '../components/VNav';
  // this.$api.defaults.headers.common['X-Auth-Token'] = sessionStorage.getItem('token');

	export default {
	components: { VNav },

		data() {
			return {
				snackbar: false,
				show1: false,
				password: 'Password',
				dialog: false,
				dialog1: false,
				items: ['Restaurant', 'Bar', 'Café', 'Grocery store'],
				value: ['Restaurant', 'Bar', 'Café', 'Grocery store'],
				items2: [
					{ icon: true, title: 'Overproduction' },
					{ icon: true, title: 'Short time until best before date' },
					{ icon: true, title: 'Season specific food' },
					{ icon: true, title: 'Packaging deformation' },
					{ icon: true, title: 'Production mistakes' }
				],
				items1: [
					{ icon: true, title: 'Spoiled food' },
					{ icon: true, title: 'Food waste' }
				]
			};
		},

		created() {
		    let storedToken = sessionStorage.getItem('token');
		    if (storedToken != undefined || storedToken != null) {
		      this.$api.defaults.headers.common['X-Auth-Token'] = storedToken
		    }

		    this.$api.defaults.headers.common['X-Auth-Token'] = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxNiwiZXhwIjoxNTkzNDIxOTU5fQ.RQMa9A83CNgtObuyjJXLS8oxlx8uUjxDwmnG5InVVZg'

		    this.$api
		      .get("/vendor_profiles/vendor")
		      .then(response => {
		      	// alert(response.data[0].id)
		        this.vendors = response.data;
		      })
		      .catch(e => {
		        this.error.push(e);
		      });
		  },
	};
</script>
<style scoped>
	.vendorlanding {
		background-color: #fff;
		height: 100%;
		width: 100vw;
	}
	.buttons {
		border-radius: 5px;
	}
	.buttonst {
		border-radius: 5px;
		background-color: rgba(223, 169, 55, 20%) !important;
		color: #dfa937 !important;
	}
</style>
