<template>
	<div>
		<v-footer
    dark
    padless
    class="hidden-md-and-up mb-12"

  >
    <v-card
      flat
      tile
      class="white--text text-center"
      color="#DFA937"
    >
      
      <v-card-actions class="text-center">
		<v-card-text class="font-weight-bold body">
			<v-icon right>mdi-phone</v-icon>
			+86 18817373070
		</v-card-text>
		<v-card-text class="font-weight-bold body">
			<v-icon right>mdi-email</v-icon>
			gast@gmail.com
		</v-card-text>
	</v-card-actions>

      <v-card-text class="white--text pt-0">
        Gast aims to reduce food waste by providing a platform for F&B establishments to promote deals on food that needs to be consumed. Everything promoted on Gast is perfectly fine to eat, nothing has expired or gone bad.
      </v-card-text>

      <v-divider></v-divider>
      <v-card-text class="white--text mb-n5">
        <strong><a style="color:white; text-decoration: none;" href="http://www.beian.miit.gov.cn">沪ICP备20010509号</a></strong>
      </v-card-text>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Gast</strong>
      </v-card-text>
    </v-card>
  </v-footer>
 <v-footer
    dark
    padless
    class="hidden-sm-and-down"
  >
    <v-card
      flat
      tile
      class="white--text text-center"
      color="#DFA937"
    >
       <v-card-actions class="text-center">
		<v-card-text class="font-weight-bold body">
			<v-icon right>mdi-phone</v-icon>
			+86 18817373070
		</v-card-text>
		<v-card-text class="font-weight-bold body">
			<v-icon right>mdi-email</v-icon>
			gast@gmail.com
		</v-card-text>
	</v-card-actions>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</div>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'mdi-wechat',
        'mdi-twitter',
      ],
    }),
  }
</script>