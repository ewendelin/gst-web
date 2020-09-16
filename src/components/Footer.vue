<template>
	<div>
		<v-footer
    padless
    class="hidden-md-and-up mb-12"

  >
    <v-card
      flat
      tile
      class="gray--text text-center"
      
    >
   

      <v-card-text class="white--text pt-3">
        寻饱XunBao aims to reduce food waste by providing a platform for F&B establishments to promote deals on food that needs to be consumed. Everything promoted on 寻饱XunBao is perfectly fine to eat, nothing has expired or gone bad.
      </v-card-text>

      <v-divider></v-divider>
      <v-card-text class="white--text mb-n5">
        <strong><a style="color:gray; text-decoration: none;" href="http://www.beian.miit.gov.cn">沪ICP备20010509号</a></strong>
      </v-card-text>

      <v-card-text class="gray--text">
        {{ new Date().getFullYear() }} — <strong>寻饱XunBao</strong>
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
      class="gray--text text-center"
      color="#FFF"
    >
       <v-card-actions class="text-center">
		<v-card-text class="font-weight-bold body">
			<v-icon right>mdi-phone</v-icon>
			+86 18817373070
		</v-card-text>
		<v-card-text class="font-weight-bold body">
			<v-icon right>mdi-email</v-icon>
			xunbao-app@gmail.com
		</v-card-text>
	</v-card-actions>

      <v-card-text class="gray--text pt-0">
        寻饱XunBao aims to reduce food waste by providing a platform for F&B establishments to promote deals on food that needs to be consumed. Everything promoted on 寻饱XunBao is perfectly fine to eat, nothing has expired or gone bad.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="gray--text">
        {{ new Date().getFullYear() }} — <strong>寻饱XunBao</strong>
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