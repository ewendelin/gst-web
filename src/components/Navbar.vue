<template>
	<nav>
		<v-bottom-navigation
			grow
			fixed
			color="#FFCD00"
			width
			height
		>
			<v-btn to="/deals">
				<span>{{ $t('deals') }}</span>
				<v-icon>mdi-sale</v-icon>
			</v-btn>
			<v-btn to="/">
        <!-- <img class="logo" src="http://gast-vendor.gast.world/logo.png" /> -->
				<Gast class="logo" />
			</v-btn>
			<v-btn to="/profile">
				<span>{{ $t('profile') }}</span>
				<v-icon>mdi-account</v-icon>
			</v-btn>
		</v-bottom-navigation>
	</nav>
</template>

<script>
  // import Gast from '../assets/xunbaologo.svg';
	import Gast from '../assets/logo.svg';
	export default {
		name: 'Navbar',
		components: { Gast },
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
