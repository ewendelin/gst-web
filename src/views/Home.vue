<template>
	<div class="home">
		<Navbar />
		<v-layout class="" hidden-sm-and-down>
			<v-img height="350px" src="../assets/broc.jpg"></v-img>
		</v-layout>
		<v-layout hidden-md-and-up>
			<v-img height="200px" src="../assets/broc.jpg"></v-img>
		</v-layout>
		<!-- <v-layout row class="mx-9 my-8" hidden-sm-and-down justify-center align-center>
			<v-flex md6 lg6>
			<p class="font-weight-medium text-center">
				Find deals on food that needs to be consumed today!
			</p>

			<v-btn
				dark
				block
				color="#DFA937"
				tile
				class="buttons"
				depressed
				@click="wxLogin()"
			>
				user login to find deals
				<v-icon right>mdi-wechat</v-icon>
			</v-btn>
			<v-btn
				dark
				block
				color="#DFA937"
				tile
				class="buttons"
				depressed

			>
				Log out
				<v-icon right>mdi-wechat</v-icon>
			</v-btn> -->
			<!-- <v-dialog v-model="dialog1" max-width="300">
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
							to="/deals"
						>
							login
						</v-btn>
						<v-btn text small class="pt-0 mt-0" @click="dialog2 = true">
							<v-card-text class="mr-3 pt-0 text-lowercase"
								><span class="text-capitalize">Don’t</span> have an account yet?
								<span class="font-weight-bold"
									><span class="text-capitalize">Register</span> here</span
								></v-card-text
							>
						</v-btn>
					</v-layout>
				</v-card>
			</v-dialog> -->
			<!-- <v-dialog v-model="dialog2" max-width="300">
				<v-card>
					<v-layout row class="mx-3">
						<v-card-title>Register</v-card-title>
						<v-form ref="form" v-model="valid" lazy-validation class="mx-5">
							<v-text-field
								v-model="email"
								label="E-mail"
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
							to="/deals"
						>
							Register
						</v-btn>
						<v-snackbar v-model="snackbar" color="success">
							Thank you for joining the Gast community! We hope you will enjoy
							using our service.
							<v-btn vertical text dark @click="snackbar = false">close</v-btn>
						</v-snackbar>

						<v-btn text small class="pt-0 mt-0" @click="dialog2 = true">
							<v-card-text class="mr-3 pt-0 text-lowercase"
								><span class="text-capitalize">Already</span> have an account?
								<span class="font-weight-bold"
									><span class="text-capitalize">Login</span> here</span
								></v-card-text
							>
						</v-btn>
					</v-layout>
				</v-card>
			</v-dialog>
			<v-btn tile class="buttonst" block depressed to="/vendors">
				vendors click here to start
				<v-icon right>mdi-store</v-icon>
			</v-btn>
			<v-list>
				<p class="font-weight-medium">Our partners are not allowed to sell:</p>
				<v-list-item v-for="item1 in items1" :key="item1.title">
					<v-list-item-icon>
						<v-icon v-if="item1.icon" color="red">mdi-cancel</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title
							v-text="item1.title"
							class="font-weight-medium"
						></v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
			<v-list>
				<p class="font-weight-medium">
					The reasons why food end up on our site could be one of the following
					reasons:
				</p>
				<v-list-item v-for="item in items" :key="item.title">
					<v-list-item-icon>
						<v-icon v-if="item.icon" color="orange">mdi-carrot</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title
							v-text="item.title"
							class="font-weight-medium"
						></v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-flex>
		</v-layout> -->


		<v-layout row class="mx-8 my-8" justify-center align-center>

		<v-col cols="12"
            sm="8"
            md="6"
            lg="6">
            <p class="font-weight-medium text-center">
				Find deals on food that needs to be consumed today!
			</p>
			<v-btn
				width="95%"
				dark
				color="#DFA937"
				tile
				class="buttons"
				depressed
				@click="wxLogin()"
			>
				user login
				<v-icon right>mdi-wechat</v-icon>
			</v-btn>
			<v-btn
				dark
			width="95%"
				color="#DFA937"
				tile
				class="buttons"
				depressed
			>
				Log out
			</v-btn>

			<!-- <v-dialog v-model="dialog1" max-width="300">
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
							to="/deals"
						>
							login
						</v-btn>
						<v-btn text small class="pt-0 mt-0" @click="dialog2 = true">
							<v-card-text class="mr-3 pt-0 text-lowercase"
								><span class="text-capitalize">Don’t</span> have an account yet?
								<span class="font-weight-bold"
									><span class="text-capitalize">Register</span> here</span
								></v-card-text
							>
						</v-btn>
					</v-layout>
				</v-card>
			</v-dialog> -->
			<!-- <v-dialog v-model="dialog2" max-width="300">
				<v-card>
					<v-layout row class="mx-3">
						<v-card-title>Register</v-card-title>
						<v-form ref="form" v-model="valid" lazy-validation class="mx-5">
							<v-text-field
								v-model="email"
								label="E-mail"
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
							to="/deals"
						>
							Register
						</v-btn>
						<v-snackbar v-model="snackbar" color="success">
							Thank you for joining the Gast community! We hope you will enjoy
							using our service.
							<v-btn vertical text dark @click="snackbar = false">close</v-btn>
						</v-snackbar>

						<v-btn text small class="pt-0 mt-0" @click="dialog2 = true">
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
			<v-btn tile class="buttonst" width="95%" depressed to="/vendors">
				for vendors
				<v-icon right>mdi-store</v-icon>
			</v-btn>

			<v-list>
				<p class="font-weight-medium mt-5">
					Why food end up on our site could be one of the following
					reasons:
				</p>
				<v-list-item v-for="item in items" :key="item.title">
					<v-list-item-icon>
						<v-icon v-if="item.icon" color="orange">mdi-carrot</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title
							v-text="item.title"
							class="font-weight-medium"
						></v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
			<v-list>
				<p class="font-weight-medium">Our partners are not allowed to sell:</p>
				<v-list-item v-for="item1 in items1" :key="item1.title">
					<v-list-item-icon>
						<v-icon v-if="item1.icon" color="red">mdi-cancel</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title
							v-text="item1.title"
							class="font-weight-medium"
						></v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-col>
		</v-layout>

	</div>
</template>
<script>
	import Navbar from '../components/Navbar';
	// function getUrlParams(name) {
	//     let reg = new RegExp("(\\?|&)" + name + "=([^&]*)(&|$)", "i");
	//     let r = window.location.search.match(reg);
	//     if (r != null) return unescape(r[2]);
	// 	    return null;
	//   }
  	// localStorage.wxCode = getUrlParams("code")

	// import Gast from '../assets/rac1.svg'
  		// window.location.href = window.location.origin

	export default {
		name: 'Home',
		components: { Navbar },
		data() {
			return {
				items: [
					{ icon: true, title: 'Overproduction' },
					{ icon: true, title: 'Short time until best before date' },
					{ icon: true, title: 'Season specific food' },
					{ icon: true, title: 'Packaging deformation' },
					{ icon: true, title: 'Production mistakes' }
				],
				items1: [
					{ icon: true, title: 'Spoiled food' },
					{ icon: true, title: 'Food waste' }
				],
				dialog2: false,
				dialog1: false,
				snackbar: false
			};
		},
		methods: {
			wxLogin() {
			  window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.$config.appID}&redirect_uri=${encodeURIComponent(this.$config.loginUrl)}&response_type=code&scope=snsapi_userinfo&state=${new Date().getTime()}`
			},
		},
		created() {
      // alert('wx login');
      // window.location.search.substr(0).includes('?code')
			if (this.$route.query.code != null || this.$route.query.code != undefined) {
	  			alert(this.$route.query.code);
          // this.$api.defaults.headers.common['X-Auth-Token'] = ''
          this.$api
						.get(
							`/users/login/wx_web_login?code=${this.$route.query.code}`
						)
						.then((res) => {
              alert('res.user.token');
              alert(`${res}`);
              alert(`${res.user}`);
              alert(`${res.user.token}`);
              this.$api.defaults.headers.common['X-Auth-Token'] = res.user.token
              window.location.href = window.location.origin + `?time=${new Date().getTime()}`;
            })
						.catch(() => {
              window.location.href = window.location.origin + `?time=${new Date().getTime()}`;
            });
	  		}

			// if (this.$api.defaults.headers.common['X-Auth-Token'] != undefined) {
			// 	// login
			// } else if () {
			//   // go to login page
			// }
		  },
	};
</script>

<style scoped>
	.home {
		background-color: #fff;
	}
	.buttons {
		border-radius: 5px;
	}
	.buttonst {
		border-radius: 5px;
		background-color: rgba(223, 169, 55, 20%) !important;
		color: #dfa937 !important;
	}
	.log {
		width: 10rem;
		height: 10rem;
	}
</style>
