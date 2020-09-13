<template>
	<nav>
		<!-- <v-layout>

			<v-app-bar app text prominent hide-on-scroll class="mb-5" >
				<v-layout col style="margin-top: 1rem;">
					<v-btn color="#FFF" icon x-large to="/">
						<Gast class="lgb"/>
					</v-btn>
				</v-layout>
				<v-flex class="justify-space-around">

				</v-flex>
				<v-spacer></v-spacer>

				<v-spacer></v-spacer>
				<v-btn text to="/deals">
						<span>Browse Coupons</span>
						<v-icon right>mdi-sale</v-icon>
					</v-btn>

					<v-btn text to="/profile">
						<span>Profile</span>
						<v-icon right>mdi-account</v-icon>
					</v-btn>

			</v-app-bar>
		</v-layout> -->


		<v-bottom-navigation
			grow
			fixed
			color="#DFA937"
			width
			height

		>
			<v-btn to="/deals">
				<span>{{ $t('deals') }}</span>
				<v-icon>mdi-sale</v-icon>
			</v-btn>
			<v-btn to="/">
        <img class="logo" src="http://gast-vendor.gast.world/logo.png" />
				<!-- <Gast class="logo" /> -->
			</v-btn>
			<v-btn to="/profile">
				<span>{{ $t('profile') }}</span>
				<v-icon>mdi-account</v-icon>
			</v-btn>
		</v-bottom-navigation>
	</nav>
</template>

<script>
  // import Gast from '../assets/logo.svg';
	// import Gast from '../assets/logo.svg';
	export default {
		name: 'Navbar',
		components: { },
		props: {
            msg: String
        },
	};
</script>
<style>
	.v-bottom-navigation {
		bottom: 0;
		left: 0;
		right: 0;
		/*position: absolute;*/
	}
	.v-btn {
		margin: 0.5rem;
	}
	.v-toolbar {
		top: 0;
	}
	.logo {
		width: 2rem;
		height: 2rem;
	}
	.lgb {
		width: 5rem;
		height: 5rem;
		margin-left: 5rem;
	}
</style>
