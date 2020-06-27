<template>
	<div class="home">
		<Navbar />
		<v-layout class="" hidden-sm-and-down>
			<v-img height="350px" src="https://gast-dev.gast.world/Rice.png"></v-img>
		</v-layout>
		<v-layout hidden-md-and-up class="mb-n12 pt-3">
			<v-img height="150px" src="https://gast-dev.gast.world/Rice.png"></v-img>
		</v-layout>
	
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
				to="/deals"
			>
				browse deals
				<v-icon right>mdi-sale</v-icon>
			</v-btn>
			<v-btn
				v-if="login"
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
			<v-btn tile class="buttonst" width="95%" depressed to="/vendor">
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
							no-wrap
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
				snackbar: false,
				login: !(sessionStorage.getItem('token') != undefined && sessionStorage.getItem('token') != 'logout'),
			};
		},
		methods: {
			wxLogin() {
			  window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.$config.appID}&redirect_uri=${encodeURIComponent(this.$config.loginUrl)}&response_type=code&scope=snsapi_userinfo&state=${new Date().getTime()}`
			}
		},
		created() {
			let storedToken = sessionStorage.getItem('token');

			let login = !(storedToken != undefined && storedToken != 'logout')
			this.login = login;

			if ((storedToken != null || storedToken != undefined) && storedToken != 'logout') {
        		this.$api.defaults.headers.common['X-Auth-Token'] = storedToken
				// redirect('/deals')
			}
			if (this.$route.query.code != null || this.$route.query.code != undefined) {
               this.$api
				.get(
					`/users/login/wx_web_login?code=${this.$route.query.code}`
				)
				.then((res) => {
              this.$api.defaults.headers.common['X-Auth-Token'] = res.data.user.token
              sessionStorage.setItem('token', res.data.user.token);
              sessionStorage.setItem('user', JSON.stringify(res.data.user));

              // Vue.prototype.$api = this.$api;
              window.location.href = window.location.origin + `?time=${new Date().getTime()}`;
            })
						.catch(() => {
              window.location.href = window.location.origin + `?time=${new Date().getTime()}`;
            });
	  		}

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
