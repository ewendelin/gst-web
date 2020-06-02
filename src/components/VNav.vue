<template>
	<nav>
		<v-layout>
			
			<v-app-bar app text prominent hide-on-scroll class="hidden-sm-and-down" >
				<v-layout col style="margin-top: 1rem;">
					<v-btn color="#FFF" icon x-large to="/">
						<Gast class="lgb"/>
					</v-btn>
				</v-layout>
				<v-flex class="justify-space-around">
					
				</v-flex>
				<v-spacer></v-spacer>
				
				<v-spacer></v-spacer>
				<v-btn text to="/vendor">
					<span>Profile</span>
					<v-icon right>mdi-home</v-icon>
				</v-btn>
			</v-app-bar>
		</v-layout>


		<v-bottom-navigation
			grow
			fixed
			color="#DFA937"
			width
			height
			class="hidden-md-and-up"
		>
			<v-btn to="/vendor">
				<span>Profile</span>
				<v-icon>mdi-home</v-icon>
			</v-btn>
			<v-btn to="/">
				<Gast class="logo" />
			</v-btn>
		</v-bottom-navigation>
	</nav>
</template>

<script>
	import Gast from '../assets/rac1.svg';
	export default {
		name: 'VNav',
		components: { Gast }
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
