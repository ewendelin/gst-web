<template>
	<div class="home">
		<Navbar />
		<v-btn class="" text color="grey" to="/vendor"	>{{ $t('forVendors') }}
			<v-icon class="pl-1">mdi-store</v-icon>
		</v-btn>
		<v-img height="200px" src="http://qgn108sp2.hd-bkt.clouddn.com/PastaL.png"></v-img>
		<v-layout row class="mx-0 mt-n12">
				<v-col cols="12">
            	<h1 class="text-center font-weight-bold" style="color:#FFB300; font-size: 3rem;">Hungry?</h1>
            	<p class="text-center" subtitle-1 style="color:#424242;">Find good deals on food that needs to be consumed.</p>
            	<v-layout row
        		class="ma-1 mt-n4"
          		align="center"
          		>
          		<v-col>
	            	<v-btn
					width="20rem"
					dark
					color="#FFB300"
					tile
					class="buttons"
					depressed
					to="/deals"
						>{{ $t('browseDeals') }}
						<v-icon right>mdi-sale</v-icon>
					</v-btn>
					<v-btn
						v-if="login"
						width="20rem"
						dark
						color="#FFCD00"
						tile
						class="buttonst mt-3"
						depressed
						@click="wxLogin()"
					>{{ $t('userLogin') }}
						<v-icon right>mdi-wechat</v-icon>
					</v-btn>
				</v-col>
			</v-layout>
        	</v-col>
		</v-layout>

		<v-layout row class="mx-1">
			<v-col cols="12">
			    <v-list-item three-line>
			    	<v-list-item-icon>
            			<v-icon size="62" color="#5BB452">mdi-check-decagram</v-icon>
          			</v-list-item-icon>
			      <v-list-item-content>
			        <v-list-item-title>Verified Vendors</v-list-item-title>
			        <v-list-item-subtitle>
			          Vendors have been verified and kitchens follow strict hygene rules
			        </v-list-item-subtitle>
			      </v-list-item-content>
			    </v-list-item>

            	<v-list-item three-line>
			    	<v-list-item-icon>
            			<v-icon size="62">mdi-silverware-fork-knife</v-icon>
          			</v-list-item-icon>
			      <v-list-item-content>
			        <v-list-item-title>Made Fresh</v-list-item-title>
			        <v-list-item-subtitle>
			          Food is fresh and has been prepared by professional chefs
			        </v-list-item-subtitle>
			      </v-list-item-content>
			    </v-list-item>

            	<v-list-item three-line>
			    	<v-list-item-icon>
            			<v-img class="logo1" src="../assets/21.png"></v-img>
          			</v-list-item-icon>
			      <v-list-item-content>
			        <v-list-item-title>So, why 寻饱XunBao?</v-list-item-title>
			        <v-list-item-subtitle>
			          Overproduction, approaching expiry dates, package deformation etc
			        </v-list-item-subtitle>
			      </v-list-item-content>
			    </v-list-item>
        	</v-col>
		</v-layout>
		<v-img height="200px" src="https://xunbao-assets.gast.world/RiceRcopy.png"></v-img>
	</div>
</template>
<script>
	// import Gast from '../assets/logo.svg';
	import Navbar from '../components/Navbar';

	export default {
		name: 'Home',
		components: { Navbar },
		props: {
            msg: String
        },
		data() {
			return {
				dialog2: false,
				dialog1: false,
				snackbar: false,
				login: !(sessionStorage.getItem('token') != undefined && sessionStorage.getItem('token') != 'logout'),
			};
		},
		methods: {
			wxLogin() {
        alert('loginUrl ' + this.$config.loginUrl);
			  window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.$config.appID}&redirect_uri=${encodeURIComponent(this.$config.loginUrl)}&response_type=code&scope=snsapi_userinfo&state=${new Date().getTime()}`
			}
		},
		created() {
      let storedToken = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoyMSwiZXhwIjoxNjA1Njg5ODAwfQ.DGdVD04iA-AUnNHHZyjQSygxTpm-rSMJQY1IzKuZNs4";
      sessionStorage.setItem('token', storedToken);
			// let storedToken = sessionStorage.getItem('token');
	   	if (storedToken != undefined || storedToken != null) {
	    	this.$api.defaults.headers.common['X-Auth-Token'] = storedToken

			  // let storedToken = sessionStorage.getItem('token');

			  // let login = !(storedToken != undefined && storedToken != 'logout')
			  // this.login = login;

  			if (storedToken != 'logout') {
          this.$api.defaults.headers.common['X-Auth-Token'] = storedToken
  				window.location.href = window.location.origin + '/deals'
          // redirect('/deals')
  			}
		  }
      // login logic
      if (this.$route.query.code != null || this.$route.query.code != undefined) {
        this.$api.get(`/users/login/wx_web_login?code=${this.$route.query.code}`).then((res) => {
          this.$api.defaults.headers.common['X-Auth-Token'] = res.data.user.token
          this.login = true;
          sessionStorage.setItem('token', res.data.user.token);
          sessionStorage.setItem('user', JSON.stringify(res.data.user));
          window.location.href = window.location.origin + `?time=${new Date().getTime()}`;
        })
        .catch(() => {
          window.location.href = window.location.origin + `?time=${new Date().getTime()}`;
        });
      }
	  }
  }
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
		background-color: #07C160 !important;
		color: #FFF !important;
	}
	.log {
		width: 10rem;
		height: 10rem;
	}
	.logo1 {
		width: 4rem;
		height: 4rem;
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
