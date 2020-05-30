<template>
	<div>
		<v-footer
    dark
    padless
    class="hidden-md-and-up"

  >
    <v-card
      flat
      tile
      class="white--text text-center"
      color="#DFA937"
    >
      

      <v-card-text class="white--text pt-3">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

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
  

      <v-card-text class="white--text pt-3">
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