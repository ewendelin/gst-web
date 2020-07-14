<template>
	<div>
		<v-col class="pa-0" v-if="showForm">
		<v-img height="300px" :src="vendor.main_img">
		</v-img>

		<v-col align="center">
			<v-avatar class="mt-n12 mb-4" size="170" color="gray">
				<v-img :src="vendor.logo_img" alt="John"/>
			</v-avatar>

			<v-layout row class="justify-end mx-5">
				<v-btn text class="mt-n12 pt-0" @click="logout()">
					<v-icon right>mdi-logout</v-icon>
				</v-btn>
			</v-layout>
			<v-btn depressed dark class="button mb-2" width="80%" @click="dialog = true">add new deal

			</v-btn>
			<v-btn depressed dark class="buttonst mb-2" width="80%" @click="dialog1 = true">verify coupon

			</v-btn>
			<v-btn depressed dark class="buttonst mb-6" width="80%" @click="dialogtotalstat = true">monthly statistics

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
						v-model="valid2"
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
						            label="Start Date"
						            prepend-icon="mdi-calendar"
						            readonly
						            v-on="on"
						            color="#DFA937"
						          ></v-text-field>
						        </template>
						        <v-date-picker v-model="newPromotion.start_date" no-title scrollable color="#DFA937">
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
						            label="End Date"
						            prepend-icon="mdi-calendar"
						            readonly
						            v-on="on"
						            color="#DFA937"
						          ></v-text-field>
						        </template>
						        <v-date-picker v-model="newPromotion.end_date" no-title scrollable color="#DFA937">
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
								action="http://localhost:3000/api/v1/promotions/images/upload"
								  class="upload-demo"
								  ref="upload"
                  :on-change="handleChange"
                  :file-list="fileList"
								  :auto-upload="false">
								<el-button slot="trigger" size="small" type="primary">select file</el-button>
							</el-upload>
							<v-text-field
					          label="Amount"
					          v-model="newPromotion.price"
					          value=""
					          color="#DFA937"
					          prefix="¥"
					        ></v-text-field>
							<!-- <v-checkbox
							v-model="newPromotion.status"
							color="#DFA937"
							label="Click box to Post Now">
							</v-checkbox> -->
						</v-form>
						<v-card-actions class="d-flex justify-space-around pb-3">
							<v-btn width="50%" dark color="#DFA937" tile class="buttons" depressed @click="createPromotion('onsale');">
								save & post
							</v-btn>
							<v-btn width="40%" dark color="#DFA937" tile class="buttonst" depressed @click="createPromotion('draft');">
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
						v-model="valid3"
						lazy-validation
						class="mx-5">
							<v-text-field v-model="token"
								label="Coupon Code"
								required
								color="#DFA937">
							</v-text-field>
						</v-form>
						<v-card-actions class="d-flex justify-space-around pb-3">
							<v-btn width="50%" dark color="#DFA937" tile class="buttons" depressed @click="verify(token), snackbar = true">
								verify
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
				<v-snackbar
				v-model="snackbar"
				top
				multi-line
				color="#FFF"
				>
				<p class="black--text" v-if="tokenValid">
				{{text.ok}}</p>
				<p class="black--text" v-else-if="tokenFailed">
				{{text.error}}</p>
					<v-btn text color="#DFA937" @click="snackbar = false">
						close
					</v-btn>
				</v-snackbar>


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
						v-model="valid1"
						lazy-validation
						class="mx-5">
							<v-text-field v-model="vendor.name"
								label="Company Name"
								required
								color="#DFA937">
							</v-text-field>
							<v-text-field v-model="vendor.address"
								label="Address"
								required
								color="#DFA937">
							</v-text-field>
							<v-textarea v-model="vendor.description"
								required
								color="#DFA937">
								<template v-slot:label>
									<div>
										Company description
									</div>
								</template>
							</v-textarea>
							<v-select
								v-model="vendor.vendor_type"
								:items="items"
								attach
								label="Type of Establishment"
								color="#DFA937"
							></v-select>

							<el-upload
								v-model="mainimage"
								action="http://localhost:3000/api/v1/promotions/images/upload"
								  class="upload-demo mb-2"
								  ref="upload"
                  :on-change="handleChangeMain"
                  :file-list="fileList"
								  :auto-upload="false">
								<el-button slot="trigger" size="small" type="primary">Upload Vendor Image</el-button>
							</el-upload>

							<el-upload
								v-model="logo"
								action="http://localhost:3000/api/v1/promotions/images/upload"
								  class="upload-demo"
								  ref="upload"
                  :on-change="handleChangeLogo"
                  :file-list="fileList"
								  :auto-upload="false">
								<el-button slot="trigger" size="small" type="primary">Upload Logo</el-button>
							</el-upload>
						</v-form>
						<v-card-actions class="d-flex justify-space-around pb-3">
							<v-btn width="50%" dark color="#DFA937" tile class="buttons" depressed @click="editVendor();">
								save
							</v-btn>
							<v-btn width="40%" dark color="#DFA937" tile class="buttonst" depressed @click="dialog2 = false">
								cancel
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
				<v-dialog v-model="dialogtotalstat" max-width="350">
					<v-card>
						<v-layout row class="mx-auto">
							<v-card-title class="headline">Monthly Statistics</v-card-title>
							<v-spacer></v-spacer>
							<v-btn icon @click="dialogtotalstat = false">
								<v-icon>mdi-close</v-icon>
							</v-btn>
						</v-layout>
						<v-card-title class="title font-weight-regular mb-1 mt-n4">
							Coupons claimed:
						</v-card-title>
						<v-card-text class="body1 font-weight-regular mb-3">
							{{vendor.statistics.issued}}
						</v-card-text>
						<v-card-title class="title font-weight-regular mb-1 mt-n4">
							Coupons verified:
						</v-card-title>
						<v-card-text class="body1 font-weight-regular mb-3">
							{{vendor.statistics.verified}}
						</v-card-text>
						<v-card-actions class="d-flex justify-space-around pb-3">
							<v-btn width="90%" dark color="#DFA937" tile class="buttons" depressed @click="dialogtotalstat = false">
								close
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</v-layout>
			</v-col>
				<v-layout row class="mx-auto">
					<v-list-item>
						<v-list-item-content>
							<v-list-item-title class="title font-weight-bold mb-1 mt-n4">Description</v-list-item-title>
							<v-list-item-subtitle class="body1 font-weight-regular mb-3">
								{{ vendor.address }}
							</v-list-item-subtitle>
							<v-list-item-subtitle class="body1 font-weight-regular mb-3 text-wrap">
								{{ vendor.description }}
							</v-list-item-subtitle>
							<v-list-item-title class="title font-weight-bold">Saved Deals</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<VendorCard :vendorId="vendor.id" />
				</v-layout>
			</v-col>
			<v-layout v-else class="backe mx-auto" row justify-center align-center>
				<v-col cols="12"
	           	sm="8"
	            md="6"
	            lg="6">
				<p class="font-weight-medium text-center">
				Hey, it looks like you do not have a vendor account set up yet. Click the button below to register a vendor account!
				</p>
				
					<v-btn
					@click.stop="dialogra = true" 
					dark
					width="95%"
					color="#DFA937"
					tile
					class="buttons mb-3 mt-6"
					depressed>Register vendor account
					</v-btn>
				</v-col>
				
				<v-dialog v-model="dialogra" max-width="350">
					<v-card center class="pt-12 pb-12">
						<v-layout row class="mx-5">
							<v-spacer></v-spacer>
							<v-btn class="mt-n4" icon @click="dialogra = false">
									<v-icon>mdi-close</v-icon>
								</v-btn>
								
							<v-card-title class="title mt-n3">Register Vendor Account</v-card-title>
							
								<v-form ref="form" v-model="valid" lazy-validation class="ml-5">
									<v-text-field
											v-model="newVendorProfile.name"
											label="Name of Establishment"
											:rules="nameRules"
											required
											color="#DFA937"
										></v-text-field>

										<v-select
											v-model="newVendorProfile.vendor_type"
											:items="items"
											required
											:rules="[v => !!v || 'Type is required!']"
											attach
											label="Type of Establishment"
											color="#DFA937"
										></v-select>

										<v-textarea v-model="newVendorProfile.description"
											required
											color="#DFA937">
											<template v-slot:label>
												<div>
													Company description
												</div>
											</template>
										</v-textarea>

										<v-text-field
											v-model="newVendorProfile.address"
											label="Address"
											required
											:rules="[v => !!v || 'Address is required!']"
											color="#DFA937"
										></v-text-field>
										<v-text-field
											:rules="[v => !!v || 'Area is required!']"
											v-model="newVendorProfile.area"
											label="Area"
											required
											color="#DFA937"
										></v-text-field>

										<v-text-field
											v-model="newVendorProfile.contact_number"
											label="Phone Number"
											required
											:rules="[v => !!v || 'Phone number is required!']"
											color="#DFA937"
										></v-text-field>
										<!-- <el-upload
											v-model="newVendorProfile.main_img"
											action="http://localhost:3000/api/v1/promotions/images/upload"
											  class="upload-demo mb-2"
											  ref="upload"
			                  :on-change="handleChangeMain"
			                  :file-list="fileList"
											  :auto-upload="false">
											<el-button slot="trigger" size="small" type="primary">Upload Vendor Image</el-button>
										</el-upload>

										<el-upload
											v-model="newVendorProfile.logo_img"
											action="http://localhost:3000/api/v1/promotions/images/upload"
											  class="upload-demo"
											  ref="upload"
			                  :on-change="handleChangeLogo"
			                  :file-list="fileList"
											  :auto-upload="false">
											<el-button slot="trigger" size="small" type="primary">Upload Logo</el-button>
										</el-upload> -->
										<v-checkbox
											v-model="checkbox"
											label="Agree with terms of service"
											required
											:rules="[v => !!v || 'You must agree to continue!']"
										></v-checkbox>
										<v-btn dark
										text
										color="#DFA937"
										tile
										class="mt-n3 ml-0 mb-3 caption"
										@click.stop="dialogtos = true"
										depressed>Read terms of service here
										</v-btn>
									</v-form>
									<v-dialog v-model="dialogtos" scrollable>
										<v-card>
									        <v-card-title>
									          <span class="headline">Terms Of Service</span>
									        </v-card-title>
									        <v-card-text>Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat.
									         </v-card-text>
									        <v-card-actions>
									          <v-spacer></v-spacer>
									          <v-btn color="#DFA937" text @click="dialogtos = false">Close</v-btn>
									        </v-card-actions>
									      </v-card>
									</v-dialog>
									<v-btn
										dark
										width="95%"
										color="#DFA937"
										tile
										class="buttons mb-3"
										depressed
										@click="createVendor()"
									>
										submit for approval
									</v-btn>
						</v-layout>
					</v-card>
				</v-dialog>
				<v-dialog v-model="confirm">
					<v-card>
				        <v-card-title>
				          <span class="headline">Confirmation!</span>
				        </v-card-title>
				        <v-card-text>Your application has been submitted. An account manager will contact you shortly and verify your account. You can start creating your vendor profile and create deals but they will not be visiable until after you have been verified.
				         </v-card-text>
				        <v-card-actions>
				          <v-spacer></v-spacer>
				          <v-btn color="#DFA937" text @click="confirm = false">Close</v-btn>
				        </v-card-actions>
				      </v-card>
				</v-dialog> 
					<!-- <VNav /> -->
			</v-layout> 
		<VNav />
	</div>
</template>


<script>
// import axios from "axios";
import VendorCard from "../components/VendorCard.vue";
import VNav from '../components/VNav';
// this.$api.defaults.headers.common['X-Auth-Token'] = sessionStorage.getItem('token');

export default {
  name: "Vendor",
  components: { VendorCard, VNav },
  created() {
    let storedToken = sessionStorage.getItem('token');
    if ((storedToken != undefined || storedToken != null) && storedToken != 'logout') {
		  this.$api.defaults.headers.common['X-Auth-Token'] = storedToken
    // if (storedToken != undefined || storedToken != null) {
    //   this.$api.defaults.headers.common['X-Auth-Token'] = storedToken
    // }

		    // this.$api.defaults.headers.common['X-Auth-Token'] = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxNSwiZXhwIjoxNTk0MDI0MTA4fQ.nysYVF6GQNn7vlhSwUmtq9JqNg1k2ZUtNQb2naTIDvA'

    // let user = sessionStorage.getItem('user');
    // let id = this.vendor.id
      this.$api
        // .get("/vendor_profiles/vendor?only=true")
        // .get("/vendor_profiles/vendor")
        .get(`/vendor_profiles/vendor?only=true&state=${new Date().getTime()}`)
        .then(response => {
        // let vendor = response.data.vendor;

          this.vendor = response.data.vendor;
          if (Object.keys(response.data.vendor).length == 0 ) {
            this.showForm = false
          } else {
            this.showForm = true
          }
        })
        .catch(e => {
          this.error.push(e);
    });
    } 
  },
  data() {
    return {
      showForm: false,
      dialogra: false,
      valid: true,
      valid1: true,
	  valid2: true,
	  valid3: true,
	  confirm: false,
      nameRules: [
        v => !!v || 'Name is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      checkbox: false,
      start_date: new Date().toISOString().substr(0, 10),
      end_date: new Date().toISOString().substr(0, 10),
      menu: false,
      menu1: false,
      vendor: null,
      error: [],
      formData: new FormData(),
      fileList: [],
      formDataMain: new FormData(),
      fileListMain: [],
      formDataLogo: new FormData(),
      fileListLogo: [],
      createdPromotion: null,
      dialog: false,
      dialog1: false,
      dialog2: false,
      snackbar: false,
      dialogtotalstat: false,
      dialogtos: false,
      text: {
      	error: 'Ops, the code can not be verified, please try again.',
      	ok: 'Coupon has been verified!'
      },
      tokenValid: false,
      tokenFailed: false,
      items: ['Restaurant', 'Bar', 'Cafe', 'Store'],
      coupon: {token: ''},
      newPromotion: {
		title: '',
		description: '',
		disclaimer: '',
		start_date: '',
		end_date: '',
		start_time: '08:30',
      	end_time: '23:00',
      	status: '',
      	price: '',
      	image: '',
      },
      updateVendor: {
      },
      newVendorProfile: {
  		name: '',
  		vendor_type: '',
  		description: '',
  		contact_number: '',
  		address: '',
  		area: '',
  		logo_img: '',
  		main_img: '',
		}
    };
  },
  methods: {
  	submitUpload() {
  	  if (this.formData.files != undefined) {
  	  	let formData = new FormData();
      formData.append("file", this.formData.files[1]);
      // formData.append("promotion", JSON.stringify(this.createdPromotion));
      this.$api.post(`promotions/images/upload?id=${this.createdPromotion.id}`, formData, {headers: { "Content-Type": "multipart/form-data" }})
      .then(() => {
        this.fileList = [];
        this.uploadFile =[];
        location.reload();
      })
      .catch();
  	  }

      // this.$refs.upload.submit();
    },
    submitUploadVendorLogo(id) {
	  if (this.formDataLogo.files != undefined) {
	  	let formData = new FormData();
      	formData.append("file", this.formDataLogo.files[1]);
      	// formData.append("promotion", JSON.stringify(this.createdPromotion));
      this.$api.post(`files/upload?id=${id}&model=vendor_profile&field=logo_img`, formData, {headers: { "Content-Type": "multipart/form-data" }})
      .then(() => {
        this.fileListLogo = [];
        // this.uploadFile =[];
        // location.reload();
        this.dialog2 = false;
      })
      .catch();
	  } else {
	  	this.dialog2 = false;
	  }


      // this.$refs.upload.submit();
    },
    submitUploadVendorMain(id) {
      if (this.formDataMain.files != undefined) {
      	let formData = new FormData();
      	formData.append("file", this.formDataMain.files[1]);
      // formData.append("promotion", JSON.stringify(this.createdPromotion));
      this.$api.post(`files/upload?id=${id}&model=vendor_profile&field=main_img`, formData, {headers: { "Content-Type": "multipart/form-data" }})
      .then(() => {
        this.fileListMain = [];
        // this.uploadFile =[];
        this.dialog2 = false;
        location.reload();
      })
      .catch();
      // this.$refs.upload.submit();
      } else {
      	this.dialog2 = false;
        location.reload();
      }
      
    },
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
      this.formData.files = {}
      this.formData.files[1] = file.raw;
    },
    handleChangeMain(file, fileList) {
      this.fileListMain = fileList.slice(-3);
      this.formDataMain.files = {}
      this.formDataMain.files[1] = file.raw;
    },
    handleChangeLogo(file, fileList) {
      this.fileListLogo = fileList.slice(-3);
      this.formDataLogo.files = {}
      this.formDataLogo.files[1] = file.raw;
    },
    createPromotion(status) {
      let promotion = this.newPromotion;
      // promotion["status"] = status;
      promotion['vendor_profile_id'] = this.vendor.id
      // promotion['title'] = this.data.title
      promotion.status = status;
      this.$api
        .post(`/promotions`, {
          promotion: promotion
        })
        .then(res => {
          this.createdPromotion = res.data.data
          this.submitUpload();
          // this.promotions = this.promotions.push(res)
        })
        .catch(e => {
          this.error.push(e);
        });

      this.newPromotion = {};
      this.dialog = false;
      // location.reload();
    },
    createVendor() {
    	let newVendor = this.newVendorProfile;
		this.$api
			.post(`/vendor_profiles`, {
		    vendor: newVendor
		  		})
		  	.then(res => {
				this.createdVendorProfile = res.data.data
		    	this.submitUpload();
		  	})
		 	.catch(e => {
		    	this.error.push(e);
		});
		 this.newVendorProfile = {};
		 this.dialogra = false;
		 this.confirm = true;
	},
    editVendor() {
    	let updated_vendor = this.vendor;
    	let id = this.vendor.id;
    	delete updated_vendor.id;
    	delete updated_vendor.user_id;
    	delete updated_vendor.verified;
    	delete updated_vendor.average_stars;
    	delete updated_vendor.total_reviews;
    	delete updated_vendor.statistics;

    	// vendor['vendor_profile_id'] = this.vendor.id
    	this.$api
    		.post(`/vendor_profiles/${id}`,
    			{vendor: updated_vendor})
    		.then( () => {
    			
    			this.updateVendor = {};
    			this.dialog2 = false;
    			this.submitUploadVendorLogo(id);
    			this.submitUploadVendorMain(id);

    		}
    	    )
    		.catch(e => {
    			this.error.push(e);
    		});
    	this.dialog2 = false;
    },

    verify(token) {
    	// let token = this.data;
    	this.$api
    		.post(`/users/verify_coupon`,
    			{token: token})
    		.then((res) => {
    			this.submitUpload();
    			if (res) {
    				this.tokenValid = true;
    				this.tokenFailed = false;
    			} else {
    				this.tokenFailed = true;
    				this.tokenValid = false;
    			}
    		})
    		.catch(e => {
    			this.tokenFailed = true;
    			this.tokenValid = false;
    			this.error.push(e);
    		});
    	this.dialog1 = false;
        // location.reload();
    },
    logout() {
        sessionStorage.setItem('token', 'logout');
        window.location.href = "https://gast.world"
		// return redirect('/');
	},
   }
}

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
.backe {
	height: 40rem;
	background-color: #fff;
}
</style>
