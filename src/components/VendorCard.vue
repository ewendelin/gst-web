<template>
	<div class="vendorcard">
    <v-layout row class="mx-auto" align-center justify-center>
      <v-card tile
              class="mb-6"
              width="85vw"
              xs12 md6 lg4
              v-for="(promotion) in promotions"
              :key="promotion.id">		
        <v-img src="../assets/cross.jpg"
              height="200px">
        </v-img>
        <v-layout row class="mx-3 px-1 mb-0 pb-0">
          <v-card-title class="mb-0 pb-0">
            {{ promotion.title }}
          </v-card-title>
        </v-layout>

        <v-layout row class="ml-3 mr-3 mt-0 px-1 pt-0">
          <v-card-subtitle class="font-weight-bold mt-1 pt-1">
            {{ promotion.time_slot }}
            <!-- {{deal.time1}} -->
          </v-card-subtitle>
          <v-spacer></v-spacer>
          <v-card-text class="py-0 mt-n3">
            {{ promotion.description }}
          </v-card-text>
          <v-card-text class="mt-2 pt-0 font-weight-medium">
              Disclaimer
          </v-card-text>
          <v-card-text class="mt-n6">
            {{promotion.disclaimer}}
            <!-- {{deal.time1}} -->
          </v-card-text>
          <v-card-text class="mt-2 pt-0 font-weight-medium">
              Status
          </v-card-text>
          <v-card-text class="mt-n6">
            {{promotion.status}}
            <!-- {{deal.time1}} -->
          </v-card-text>
          <v-row justify="space-around" class="mx-2 align-center">
            <v-btn fab text @click="promotion.dialog3 = true">
              <v-icon right>mdi-cog</v-icon>
            </v-btn>
            
            <v-dialog  v-model="promotion.dialog3"
                      max-width="290">
              <v-card>
                <v-layout row class="mx-auto">
                  <v-card-title class="headline">Promotion</v-card-title>
                  <v-spacer></v-spacer>
                    <v-btn icon @click="promotion.dialog3 = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-layout>
                  <v-card-text>{{promotion.status}}</v-card-text>
                
                <v-form 
                 v-if="promotion.status == 'archive' || promotion.status == 'draft'"
                  ref="form2"
                  v-model="valid"
                        lazy-validation
                        class="mx-5">
                  <v-checkbox v-model="allday"
                              color="green">
                    <template v-slot:label>
                      <div>
                        All day promotion
                      </div>
                    </template>
                  </v-checkbox>
                  <v-menu
                    ref="menu3"
                    v-model="menu3"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                    color="#DFA937"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="promotion.start_date"
                        label="Start Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-on="on"
                        color="#DFA937"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="start_date" no-title scrollable color="#DFA937">
                      <v-spacer></v-spacer>
                      <v-btn text color="#DFA937" @click="menu3 = false">Cancel</v-btn>
                      <v-btn text color="#DFA937" @click="$refs.menu3.save(start_date)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
              <v-menu
                    ref="menu4"
                    v-model="menu4"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                    color="#DFA937"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="promotion.end_date"
                        label="End Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-on="on"
                        color="#DFA937"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="end_date2" no-title scrollable color="#DFA937">
                      <v-spacer></v-spacer>
                      <v-btn text color="#DFA937" @click="menu4 = false">Cancel</v-btn>
                      <v-btn text color="#DFA937" @click="$refs.menu4.save(end_date2)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                  <el-time-select
                  v-model="promotion.start_time"
                  :picker-options="{
                    start: '00:00',
                    step: '00:30',
                    end: '24:00'
                  }"
                  placeholder="Start Time">
                </el-time-select>
                 <el-time-select
                 class="endtime"
                  v-model="promotion.end_time"
                  :picker-options="{
                    start: '00:00',
                    step: '00:30',
                    end: '24:00'
                  }"
                  placeholder="End Time">
                </el-time-select>
                <v-card-actions class="d-flex justify-space-around pb-3">
                  <v-btn v-if="promotion.status == 'draft'"
                    width="90%" dark color="#DFA937" tile class="buttons" depressed @click="update(promotion, 'onsale')">
                    Activate
                  </v-btn>
                  <v-btn v-else-if="promotion.status == 'archive'"
                    width="90%" dark color="#DFA937" tile class="buttons" depressed @click="update(promotion, 'onsale')">
                    Reactivate
                  </v-btn>
                </v-card-actions>
                </v-form>
                <v-form v-else-if="promotion.status == 'onsale'">
                  <v-btn
                    width="90%" dark color="#DFA937" tile class="buttons" depressed @click="update(promotion, 'archive')">
                    archive
                  </v-btn>
                </v-form>

                
              </v-card>
            </v-dialog>

            <v-btn fab text @click="promotion.dialog2 = true">
              <v-icon right>mdi-pencil</v-icon>
            </v-btn>

            <v-dialog v-model="promotion.dialog2"
                      max-width="290">
              <v-card>
                <v-layout row class="mx-auto">
                  <v-card-title class="headline">Edit promotion</v-card-title>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="promotion.dialog2 = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-layout>
                <v-form ref="form"
                        v-model="valid"
                        lazy-validation
                        class="mx-5">

                  <v-text-field v-model="promotion.title"
                                label="Title"
                                required
                                color="#DFA937">
                  </v-text-field>
                  <v-textarea v-model="promotion.description"
                              color="#DFA937">
                    <template v-slot:label>
                      <div>
                        Description 
                      </div>
                    </template>
                  </v-textarea>
                  <v-textarea v-model="promotion.disclaimer"
                              color="#DFA937">
                    <template v-slot:label>
                      <div>
                        Disclaimer 
                      </div>
                    </template>
                  </v-textarea>
                  <v-file-input label="Promotion Photo"
                                prepend-icon="mdi-camera">
                  </v-file-input>
                </v-form>

                <v-card-actions class="d-flex justify-space-around pb-3">
                  <!-- @FIXME this one needs to be connected to the edit api -->
                  <v-btn
                    width="50%" dark color="#DFA937" tile class="buttons" depressed @click="editPromotion(promotion);">
                    save
                  </v-btn>
                  <!--@FIXME to discharge changes --> 
                  <v-btn
                    width="40%" dark color="#DFA937" tile class="buttonst" depressed @click="cancelEdit();">
                    cancel
                  </v-btn>
                  <!-- <v-snackbar v-model="snackbar">
                    You have successfully edited this promotion. Toggle the switch to make the promotion live and visable for customers!
                    <v-btn color="success"
                          vertical
                          text
                          dark
                          @click="promotion.snackbar = false">
                      close
                    </v-btn>
                  </v-snackbar> -->
                </v-card-actions>
              </v-card>
            </v-dialog>
             <v-btn fab text @click="promotion.dialogstats = true">
              <v-icon right>mdi-chart-areaspline-variant</v-icon>
            </v-btn>
            <v-dialog v-model="promotion.dialogstats"
                      max-width="290">
              <v-card>
                <v-layout row class="mx-auto">
                  <v-card-title class="headline">Statistics</v-card-title>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="promotion.dialogstats = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-layout>
                <v-card-text>
                  50 Claimed coupons 
                </v-card-text>
              </v-card>
            </v-dialog>
            
            <v-btn fab text @click="promotion.dialog = true">
              <v-icon right>mdi-delete</v-icon>
            </v-btn>

            <v-dialog 
              v-model="promotion.dialog"
              max-width="290">
              <v-card>
                <v-layout row class="mx-auto">
                  <v-card-title class="headline">Delete promotion</v-card-title>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="promotion.dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-layout>
                <v-card-text>
                  Are you sure you want to cancel this promotion? This action is permanent.
                </v-card-text>
                <v-card-actions class="d-flex justify-center pb-3">
                  <v-btn width="80%" dark color="#DFA937" tile class="buttons" depressed @click="remove(promotion)">
                    yes, i am sure
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>	
        </v-layout>
      </v-card>
    </v-layout>
	</div>
</template>

<script>
	export default {
		name: 'VendorCard',
		props: {
			vendorId: {
				type: Number,
				default: 0
			}
		},
		created() {
			this.$api
				.get(
					`/vendor_profiles/${this.vendorId}/promotions`
				)
				.then(response => {
					this.promotions = response.data.promotions;
					this.promotions = this.promotions.map(promotions => ({
						...promotions,
						dialog: false,
						switch: false,
						dialog2: false,
						dialog3: false,
            dialogstats: false
					}));
				})
				.catch(e => {
					this.error.push(e);
				});
		},
		methods: {
      remove(promotion) {
        // this.$api(this.deals, index);
          this.$api.post(
            `/vendor_profiles/destroy_promotion`,
            {id: promotion.id}
          )
          .then(response => {
            this.canceled = response
            
            this.res = this.promotions.filter((x) => {
              return x.id != promotion.id
            });
            this.promotions = this.res;

            // this.deals = this.deals.map(deals => ({
            //  ...deals,
            //  dialog: false,
            //  dialog3: false
            // }));

          })
          .catch(function(error) {
            alert('fail' + error);
          });
      },
      editPromotion(promotion) {
        let id = promotion.id
        let updated_promotion = promotion;
        delete updated_promotion.id
        delete updated_promotion.image
        delete updated_promotion.switch
        delete updated_promotion.dialog
        delete updated_promotion.dialog2
        delete updated_promotion.dialog3
        delete updated_promotion.dialogstats
       
        this.$api
          .post(`/promotions/${id}`, 
            {promotion: updated_promotion})
          .then(location.reload())
          .catch(e => {
            this.error.push(e);
          });
      },
      update(promotion, status) {
        let id = promotion.id
        if (status == 'archive') {
          this.$api
          .post(`/promotions/${id}/archive`)
          .then(location.reload())
          .catch(e => {
            this.error.push(e);
          });
        } else if (promotion.status == 'archive' && status == 'onsale') {
          promotion.status = status
          this.$api
          .post(`/promotions/${id}/renew`, {promotion: promotion})
          .then(location.reload())
          .catch(e => {
            this.error.push(e);
          });
        } else if (promotion.status == 'draft' && status == 'onsale') {
          this.$api
          .post(`/promotions/${id}/activate`, {promotion: promotion})
          .then(location.reload())
          .catch(e => {
            this.error.push(e);
          });
        }
        
      }
		},
		data() {
			return {
				snackbar: false,
				promotions: [],
        start_date: new Date().toISOString().substr(0, 10),
        end_date2: new Date().toISOString().substr(0, 10),
        menu3: false,
        menu4: false,
			};
		}
	};
</script>

<style scoped>
	.buttons {
		border-radius: 5px;
	}
	.buttonst {
		border-radius: 5px;
		background-color: rgba(223, 169, 55, 20%) !important;
		color: #dfa937 !important;
	}
</style>
