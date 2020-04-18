<template>
	<div class="vendor">
		<v-img height="300px" src="../assets/cross.jpg">
		</v-img>
		
		<v-col align="center">
			<v-avatar class="mt-n12" size="170" color="gray">
				<img src="../assets/avatar.png" alt="John"/>
			</v-avatar>

			<v-layout row class="justify-end mx-5">
				<v-btn text class="mt-n12 pt-0" to="/vendors">
					<v-icon right>mdi-logout</v-icon>
				</v-btn>
			</v-layout>
			<v-btn depressed dark class="button mb-2" width="80%" @click="dialog = true">add new deal

			</v-btn>
			<v-btn depressed dark class="buttonst mb-6" width="80%" @click="dialog1 = true">verify cuopon

			</v-btn>
			<p class="headline font-weight-medium mb-0">{{ vendor.name }}</p>
			<p class="subtitle-1">{{ vendor.vendor_type }}</p>
			<v-layout row class="justify-end mx-5">
				<v-btn text class="mt-n12 pt-0" @click="dialog2 = true">
					<v-icon right>mdi-pencil</v-icon>
				</v-btn>

				<v-dialog v-model="dialog" max-width="350">
					<v-card>
						<v-layout row class="mx-auto">
							<v-card-title class="headline">Add new Deal</v-card-title>
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
							<v-text-field v-model="newPromotion.title"
								label="Title"
								required
								color="#DFA937">
							</v-text-field>
							<v-textarea v-model="newPromotion.description"
								color="#DFA937"
								label="Description">
							</v-textarea>
							<v-textarea v-model="newPromotion.disclaimer"
								color="#DFA937">
								<template v-slot:label>
									<div>
										Disclaimer 
									</div>
								</template>
							</v-textarea>
							<v-menu
						        ref="menu"
						        v-model="menu"
						        :close-on-content-click="false"
						        :return-value.sync="date"
						        transition="scale-transition"
						        offset-y
						        min-width="290px"
						        color="#DFA937"
						      >
						        <template v-slot:activator="{ on }">
						          <v-text-field
						            v-model="start_date"
						            label="Picker in menu"
						            prepend-icon="mdi-calendar"
						            readonly
						            v-on="on"
						            color="#DFA937"
						          ></v-text-field>
						        </template>
						        <v-date-picker v-model="start_date" no-title scrollable color="#DFA937">
						          <v-spacer></v-spacer>
						          <v-btn text color="#DFA937" @click="menu = false">Cancel</v-btn>
						          <v-btn text color="#DFA937" @click="$refs.menu.save(start_date)">OK</v-btn>
						        </v-date-picker>
						      </v-menu>
							<v-menu
						        ref="menu1"
						        v-model="menu1"
						        :close-on-content-click="false"
						        :return-value.sync="date"
						        transition="scale-transition"
						        offset-y
						        min-width="290px"
						        color="#DFA937"
						      >
						        <template v-slot:activator="{ on }">
						          <v-text-field
						            v-model="end_date"
						            label="Picker in menu"
						            prepend-icon="mdi-calendar"
						            readonly
						            v-on="on"
						            color="#DFA937"
						          ></v-text-field>
						        </template>
						        <v-date-picker v-model="end_date" no-title scrollable color="#DFA937">
						          <v-spacer></v-spacer>
						          <v-btn text color="#DFA937" @click="menu1 = false">Cancel</v-btn>
						          <v-btn text color="#DFA937" @click="$refs.menu1.save(end_date)">OK</v-btn>
						        </v-date-picker>
						      </v-menu>
						      <el-time-select
								  v-model="newPromotion.start_time"
								  :picker-options="{
								    start: '00:00',
								    step: '00:30',
								    end: '24:00'
								  }"
								  placeholder="Start Time">
								</el-time-select>
								 <el-time-select
								 class="endtime"
								  v-model="newPromotion.end_time"
								  :picker-options="{
								    start: '00:00',
								    step: '00:30',
								    end: '24:00'
								  }"
								  placeholder="End Time">
								</el-time-select>
							<el-upload
							v-model="image"
							action="http://localhost:3000/api/v1/promotions"
								  class="upload-demo"
								  ref="upload"
								  :auto-upload="false">
								  <el-button slot="trigger" size="small" type="primary">select file</el-button>
								</el-upload>
							<v-checkbox
							v-model="newPromotion.status"
							color="#DFA937"
							label="Click box to Post Now">
							</v-checkbox>
						</v-form>
						<v-card-actions class="d-flex justify-space-around pb-3">
							<v-btn width="50%" dark color="#DFA937" tile class="buttons" depressed @click="createPromotion();submitUpload();">
								save & post
							</v-btn>
							<v-btn width="40%" dark color="#DFA937" tile class="buttonst" depressed @click="dialog = false">
								save
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
				<v-dialog v-model="dialog1" max-width="290">
					<v-card>
						<v-layout row class="mx-auto">
							<v-card-title class="headline">Verify Coupon</v-card-title>
							<v-spacer></v-spacer>
							<v-btn icon @click="dialog1 = false">
								<v-icon>mdi-close</v-icon>
							</v-btn>
						</v-layout>
						<v-form ref="form"
						v-model="verify"
						lazy-validation
						class="mx-5">
							<v-text-field v-model="code"
								label="Coupon Code"
								required
								color="#DFA937">
							</v-text-field>
						</v-form>
						<v-card-actions class="d-flex justify-space-around pb-3">
							<v-btn width="50%" dark color="#DFA937" tile class="buttons" depressed @click="dialog1 = false">
								verify
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
				<v-dialog v-model="dialog2" max-width="290">
					<v-card>
						<v-layout row class="mx-auto">
							<v-card-title class="headline">Edit Profile</v-card-title>
							<v-spacer></v-spacer>
							<v-btn icon @click="dialog2 = false">
								<v-icon>mdi-close</v-icon>
							</v-btn>
						</v-layout>

						<v-form ref="form"
						v-model="editprofile"
						lazy-validation
						class="mx-5">
							<v-text-field v-model="vname"
								label="Company Name"
								required
								color="#DFA937">
							</v-text-field>
							<v-text-field v-model="address"
								label="Address"
								required
								color="#DFA937">
							</v-text-field>
							<v-textarea v-model="description"
								required
								color="#DFA937">
								<template v-slot:label>
									<div>
										Company description 
									</div>
								</template>
							</v-textarea>
							<v-select
								v-model="value"
								:items="items"
								attach
								label="Type of Establishment"
								color="#DFA937"
							></v-select>
							<v-file-input label="Photo of Venue"
								required
								prepend-icon="mdi-camera">
							</v-file-input>
							<v-file-input label="Logo"
								required	
								prepend-icon="mdi-camera">
							</v-file-input>
						</v-form>
						<v-card-actions class="d-flex justify-space-around pb-3">
							<v-btn width="50%" dark color="#DFA937" tile class="buttons" depressed @click="dialog2 = false">
								save
							</v-btn>
							<v-btn width="40%" dark color="#DFA937" tile class="buttonst" depressed @click="dialog2 = false">
								cancel
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</v-layout>
		</v-col>
		<v-layout row class="mx-9" max-width="60vw">
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="title font-weight-bold mb-1 mt-n4">Description</v-list-item-title>
					<v-list-item-subtitle class="body1 font-weight-regular mb-3">
						{{ vendor.address }}
					</v-list-item-subtitle>
					<v-list-item-subtitle class="body1 font-weight-regular mb-3">
						{{ vendor.description }}
					</v-list-item-subtitle>
					<v-list-item-title class="title font-weight-bold">Saved Deals</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<VendorCard :vendorId="vendor.id" />
		</v-layout>
		<VNav />
	</div>
</template>

<script>
// import axios from "axios";
import VendorCard from "../components/VendorCard.vue";
import VNav from '../components/VNav';
export default {
  name: "Vendor",
  components: { VendorCard, VNav },
  created() {
    this.$api
      .get("http://localhost:3000/api/v1/vendor_profiles/vendor")
      .then(response => {
        this.vendor = response.data.vendor;
      })
      .catch(e => {
        this.error.push(e);
      });
  },
  data() {
    return {
      start_date: new Date().toISOString().substr(0, 10),
      end_date: new Date().toISOString().substr(0, 10),
      menu: false,
      menu1: false,
      vendor: null,
      dialog: false,
      dialog1: false,
      dialog2: false,
      items: ['Restaurant', 'Bar', 'Cafe', 'Store'],
      newPromotion: {
		title: 'hello',
		description: 'test',
		disclaimer: 'rreq',
		start_date: '',
		end_date: '',
		start_time: '08:30',
      	end_time: '23:00',
      	status: true,
      	image: '',
      }
    };
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
        .then()
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
.vendor {
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
.endtime {
	margin-top: 1rem;
	margin-bottom:.7rem;
}
</style>
