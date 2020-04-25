<!-- <template>
	<div id="reviewcard">
		<v-list-item>
			<v-list-item-content>
			    <v-list>
			      <template v-for="(item, index) in items">
			        <v-header
			          v-if="item.header"
			          :key="item.header"
			          v-text="item.header"
			        ></v-header>

			        <v-divider
			          v-else-if="item.divider"
			          :key="index"
			          :inset="item.inset"
			        ></v-divider>

			        <v-list-item
			          v-else
			          :key="item.title"
			         
			        >
			          <v-list-item-avatar>
			            <v-img :src="item.avatar"></v-img>
			          </v-list-item-avatar>

			          <v-list-item-content >
			            <v-list-item-title v-html="item.title"></v-list-item-title>
			           	<v-rating readonly small dense v-model="item.rating"
							background-color="orange lighten-3"
								class="text-left" color="orange"></v-rating>
			            <v-list-item-subtitle class="text-wrap">2020-04-10</v-list-item-subtitle>
			            <v-list-item-subtitle class="text-wrap" v-html="item.subtitle"></v-list-item-subtitle>
			          </v-list-item-content>
			        </v-list-item>
			      </template>
			    </v-list>
			</v-list-item-content>
		</v-list-item>
	</div>
</template> -->

<!-- <script>

	export default {
		name: 'reviews',
		components: { },
		data: () => ({
      	dialog: false,
      	items: [
        { header: 'Reviews' },
      ]

    })
		created() {
    this.$api
      .get(`http://localhost:3000/api/v1/vendor_profiles?id=${this.$route.params.id}`)
      .then(response => {
        this.vendor = response.data;
      })
      .catch(e => {
        this.error.push(e);
      });
  },
	methods: {
  	submitReview() {
        this.$refs.upload.submit();
      },
    createReview() {
      let review = this.newReview;
    
      review['vendor_profile_id'] = this.vendor.id
     

      this.$api
        .post(`http://localhost:3000/api/v1/promotions`, {
          review: review
        })
        .then()
        .catch(e => {
          this.error.push(e);
        });

      this.newReview = {};
      this.dialog = false;
    }
  }
	};
</script> -->