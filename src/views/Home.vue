<template>
	<div class="home">
		<Navbar />
		<v-layout>
			<v-img height="150px" src="https://gast-dev.gast.world/Rice.png"></v-img>
		</v-layout>
		<v-layout col>
		<v-spacer></v-spacer>
		<v-btn class="my-n5 py-0 mb-n12 mt-n8" text color="grey" to="/vendor">{{ $t('forVendors') }}
			<v-icon class="pl-1">mdi-store</v-icon>
		</v-btn>
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
				class="buttonst"
				depressed
				@click="wxLogin()"
			>
				user login
				<v-icon right>mdi-wechat</v-icon>
			</v-btn>			
			<!-- <v-btn tile class="buttonst" width="95%" depressed to="/vendor">
				for vendors
				<v-icon right>mdi-store</v-icon>
			</v-btn> -->

			<v-list>
				<p class="font-weight-medium mt-5 text-center">
					We link our community with food that needs to be consumed. Why food ends up on our site you may ask?
				</p>
				<v-row>
			      <v-col cols="12">
			        <!-- <v-row
			        class="mt-4"
			          align="center"
			          justify="space-around"
			        >
			        	<div class="item">
    						<v-icon large>mdi-pot-steam</v-icon>
    						<span class="caption">Made Fresh</span>
						</div>
			        	<div class="item">
    						<v-icon large>mdi-check-decagram</v-icon>
    						<span class="caption">Verified vendors</span>
						</div>
			        </v-row> -->
			        <v-row
			        class="mt-12"
			          align="center"
			          justify="space-around"
			        >
			        	<div class="item">
    						<v-icon large>mdi-factory</v-icon>
    						<span class="caption">Over-production</span>
						</div>
			        	<div class="item">
    						<v-icon large>mdi-clock-alert</v-icon>
    						<span class="caption">Short BBD</span>
						</div>
			        </v-row>
					<v-row
					  class="mt-12"
			          align="center"
			          justify="space-around"
			        >
			        	<div class="item">
    						<v-icon large>mdi-barley</v-icon>
    						<span class="caption ">Season specific</span>
						</div>
			        	<div class="item">
    						<v-icon large>mdi-package-variant</v-icon>
    						<span class="caption ">Package-deformation</span>
						</div>
			        </v-row>
			      </v-col>
			    </v-row>
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
		props: {
            msg: String
        },
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
	div.item {
    vertical-align: top;
    display: inline-block;
    text-align: center;
    width: 50px;
	}
	/*img {
    width: 30px;
    height: 30px;
    background-color: blue;
	}*/
	.caption {
    display: block;
	}
</style>
