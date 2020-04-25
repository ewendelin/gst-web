<!-- <template>
	<div class="reviews">
		<v-img height="300px" src="../assets/cross.jpg">
		</v-img>
		<v-col align="center">
			<v-avatar class="mt-n12" size="170" color="gray">
				<img src="../assets/avatar.png" alt="John"/>
			</v-avatar>
			<p class="headline font-weight-medium mb-0">name</p>
			<p class="subtitle-1">type</p>
			<v-rating readonly v-model="rating1"
			background-color="orange lighten-3"
      		color="orange"></v-rating>
		</v-col>
		<v-layout row class="mx-5" max-width="90%">
			<v-list-item>
				<v-list-item-content>
					<v-header class="header font-weight-bold mb-1">Description</v-header>
					<v-list-item-subtitle class="body1 font-weight-regular mb-3 text-wrap">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ea possimus quod sed! Rerum esse, rem vitae. Voluptatibus harum quasi corrupti sapiente commodi adipisci molestias, ratione id pariatur dolores voluptate!
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<v-row align="center" justify="center">
				<v-btn
					width="35vw" 
					tile 
					dark
					color="#DFA937"
					class="buttons" 
					depressed
					@click="dialog = true">
					add review
				</v-btn>
				<v-dialog v-model="dialog" max-width="350">
					<v-card>
						<v-layout row class="mx-auto">
							<v-card-title class="headline">Add Review</v-card-title>
							<v-spacer></v-spacer>
							<v-btn icon @click="dialog = false">
								<v-icon>mdi-close</v-icon>
							</v-btn>
						</v-layout>
						<v-form ref="form"
						v-model="valid"
						lazy-validation
						class="mx-5"
						id="example-3">
							<v-textarea v-model="comment"
								label="Comment"
								required
								color="#DFA937">
							</v-textarea>
							<v-rating v-model="rating"
								background-color="orange lighten-3"
      							color="orange">
      						</v-rating>
						</v-form>
						<v-card-actions class="d-flex justify-space-around pb-3">
							<v-btn width="50%" dark color="#DFA937" tile class="buttons" depressed @click="createReview();submitReview();">
								post
							</v-btn>
							<v-btn width="40%" dark color="#DFA937" tile class="buttonst" depressed @click="dialog = false">
								cancel
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</v-row>		
			<ReviewCard :vendorId="vendor.id" />
		</v-layout>
		<Navbar />
	</div>
</template> -->
<!-- 
<script>
// import axios from "axios";
// import VendorCard from "../components/VendorCard.vue";
// import VNav from '../components/VNav';
// import Navbar from '../components/Navbar';
export default {
  name: "VProfile",
  // components: { Navbar },
  created() {
    this.$api
      .get("http://localhost:3000/api/v1/vendor_profiles/vendor")
      // .get(`http://localhost:3000/api/v1/vendor_profiles?id=1`)
      .then(response => {
        this.vendor = response.data;
      })
      .catch(e => {
        this.error.push(e);
      });
  },
  data() {
    return {
      vendor: {},
      rating1: 4,
      dialog: false,
	}
  },
  methods: {
  	submitUpload() {
        this.$refs.upload.submit();
      },
    createPromotion() {
      let promotion = this.newPromotion;
      // promotion["status"] = status;
      promotion['vendor_profile_id'] = this.vendor.id
      // promotion['title'] = this.data.title

      this.$api
        .post(`http://localhost:3000/api/v1/promotions`, {
          promotion: promotion
        })
        .then(location.reload())
        .catch(e => {
          this.error.push(e);
        });

      this.newPromotion = {};
      this.dialog = false;
    }
  }
};

</script>

<style>
.reviews {
  background-color: #fff;
}
.button {
  background-color: #dfa937 !important;
  border-radius: 5px;
}
.buttons {
  border-radius: 5px;
}
.buttonst {
  border-radius: 5px;
  background-color: rgba(223, 169, 55, 20%) !important;
  color: #dfa937 !important;
}

</style> -->

