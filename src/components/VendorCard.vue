<template>
	<v-container fluid>
    <v-layout row class="mx-auto" align-center justify-center>
      <v-col>
        <!-- <v-row > -->
      <v-card tile
              class="mb-6"
              v-for="(promotion) in promotions"
              :key="promotion.id">
        <v-img :src="promotion.image"
              height="200px">
        </v-img>
          <v-list-item three-line>
            <v-list-item-content class="mx-auto">
                <v-list-item-title class="headline mb-1">{{ promotion.title }}</v-list-item-title>
                <div class="overline mb-4">{{ promotion.time_slot }}</div>
                <v-list-item-subtitle>{{ promotion.description }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

            <v-card-actions justify="space-around">
              <v-btn fab text @click.stop="promotion.dialog3 = true">
                <v-icon>mdi-cog</v-icon>
              </v-btn>
              <v-btn fab text @click="promotion.dialog2 = true">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn fab text @click="promotion.dialogstats = true">
                <v-icon>mdi-chart-areaspline-variant</v-icon>
              </v-btn>
              <v-btn fab text @click="promotion.dialog = true">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-card-actions>
            <v-dialog
              v-model="promotion.dialog3"
              max-width="290">
              <v-card>
                <v-layout row class="mx-auto">
                  <v-card-title class="headline">{{ $t('promo') }}</v-card-title>
                  <v-spacer></v-spacer>
                    <v-btn icon @click="promotion.dialog3 = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-layout>
                  <v-card-text>{{promotion.status}}</v-card-text>
                <v-form
                 v-if="promotion.status == 'archive'"
                  ref="form2"
                  v-model="valid"
                  lazy-validation
                  class="mx-5">
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
                        v-model="start_date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-on="on"
                        color="#DFA937"
                        required
                        :rules="[v => !!v || 'You must add start date!']"
                      >
                        <template v-slot:label>
                          <div>
                            {{ $t('startDate') }}
                          </div>
                        </template>
                      </v-text-field>
                    </template>
                    <v-date-picker v-model="start_date" no-title scrollable color="#DFA937">
                      <v-spacer></v-spacer>
                      <v-btn text color="#DFA937" @click="menu3 = false">{{ $t('cancel') }}</v-btn>
                      <v-btn text color="#DFA937" @click="saveToToggle('start_date', promotion.start_date),menu3 = false">OK</v-btn>
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
                        v-model="end_date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-on="on"
                        color="#DFA937"
                        required
                        :rules="[v => !!v || 'You must add end date!']"
                      >
                        <template v-slot:label>
                          <div>
                            {{ $t('endDate') }}
                          </div>
                        </template>
                      </v-text-field>
                    </template>
                    <v-date-picker v-model="end_date" no-title scrollable color="#DFA937">
                      <v-spacer></v-spacer>
                      <v-btn text color="#DFA937" @click="menu4 = false">{{ $t('cancel') }}</v-btn>
                      <v-btn text color="#DFA937" @click="saveToToggle('end_date', promotion.end_date),menu4 = false">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                  <el-time-select
                  v-model="start_time"
                  :picker-options="{
                    start: '00:00',
                    step: '00:30',
                    end: '24:00'
                  }"
                  placeholder="Start Time"
                  :change="saveToToggle('start_time', start_time)">
                </el-time-select>
                 <el-time-select
                 class="endtime"
                  v-model="end_time"
                  :picker-options="{
                    start: '00:00',
                    step: '00:30',
                    end: '24:00'
                  }"
                  placeholder="End Time"
                  :change="saveToToggle('end_time', end_time)">
                </el-time-select>
                <v-text-field
                    label="Number available"
                    v-model="promotion.statistics.limit"
                    value=""
                    color="#DFA937"
                  >
                    <template v-slot:label>
                      <div>
                        {{ $t('numberOfDeals') }}
                      </div>
                    </template>
                  </v-text-field>
                <v-text-field
                    v-model="promotion.price"
                    value=""
                    color="#DFA937"
                    prefix="¥"
                  >
                     <template v-slot:label>
                      <div>
                        {{ $t('newPrice') }}
                      </div>
                    </template>
                  </v-text-field>
                  <v-text-field
                    v-model="promotion.original_price"
                    value=""
                    color="#DFA937"
                    prefix="¥"
                  >
                     <template v-slot:label>
                      <div>
                        {{ $t('oldPrice') }}
                      </div>
                    </template>
                  </v-text-field>
                <v-card-actions class="d-flex justify-space-around pb-3">
                  <v-btn
                    width="90%" dark color="#DFA937" tile class="buttons" depressed @click="update(promotion), promotion.dialog3 = false">
                    {{ $t('reactivate') }}
                  </v-btn>
                </v-card-actions>
                </v-form>
                <v-form
                 v-else-if="promotion.status == 'draft'"
                  ref="form2"
                  v-model="valid"
                  lazy-validation
                  class="mx-5">
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
                        v-model="start_date"
                        prepend-icon="mdi-calendar"
                        v-on="on"
                        color="#DFA937"
                        required
                        :rules="[v => !!v || 'You must add start date!']"
                      >
                        <template v-slot:label>
                          <div>
                              {{ $t('startDate') }}
                          </div>
                        </template>
                      </v-text-field>
                    </template>
                    <v-date-picker v-model="promotion.start_date" no-title scrollable color="#DFA937">
                      <v-spacer></v-spacer>
                      <v-btn text color="#DFA937" @click="menu3 = false">{{ $t('cancel') }}</v-btn>
                      <v-btn text color="#DFA937" @click="saveToToggle('start_date', promotion.start_date),menu3 = false">OK</v-btn>
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
                        v-model="end_date"
                        prepend-icon="mdi-calendar"
                        v-on="on"
                        color="#DFA937"
                        required
                        :rules="[v => !!v || 'You must add end date!']"
                      >
                        <template v-slot:label>
                          <div>
                              {{ $t('endDate') }}
                          </div>
                        </template>
                      </v-text-field>
                    </template>
                    <v-date-picker v-model="promotion.end_date" no-title scrollable color="#DFA937">
                      <v-spacer></v-spacer>
                      <v-btn text color="#DFA937" @click="menu4 = false">{{ $t('cancel') }}</v-btn>
                      <v-btn text color="#DFA937" @click="saveToToggle('end_date', promotion.end_date),menu4 = false">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                  <el-time-select
                  class="endtime"
                  v-model="start_time"
                  :picker-options="{
                    start: '00:00',
                    step: '00:30',
                    end: '24:00'
                  }"
                  placeholder="Start Time"
                  :change="saveToToggle('start_time', start_time)">
                </el-time-select>
                 <el-time-select
                 class="endtime"
                  v-model="end_time"
                  :picker-options="{
                    start: '00:00',
                    step: '00:30',
                    end: '24:00'
                  }"
                  placeholder="End Time"
                  :change="saveToToggle('end_time', end_time)">
                </el-time-select>
                <v-text-field
                    v-model="promotion.statistics.limit"
                    value=""
                    color="#DFA937"
                  >
                    <template v-slot:label>
                      <div>
                        {{ $t('numberOfDeals') }}
                      </div>
                    </template>
                  </v-text-field>
                <v-text-field
                    v-model="promotion.price"
                    value=""
                    color="#DFA937"
                    prefix="¥"
                  >
                    <template v-slot:label>
                      <div>
                        {{ $t('newPrice') }}
                      </div>
                    </template>
                  </v-text-field>
                  <v-text-field
                    v-model="promotion.original_price"
                    value=""
                    color="#DFA937"
                    prefix="¥"
                  >
                    <template v-slot:label>
                      <div>
                        {{ $t('oldPrice') }}
                      </div>
                    </template>
                  </v-text-field>
                <v-card-actions class="d-flex justify-space-around pb-3">
                  <v-btn
                    width="90%" dark color="#DFA937" tile class="buttons" depressed @click="update(promotion), promotion.dialog3 = false">
                    {{ $t('activate') }}
                  </v-btn>
                </v-card-actions>
                </v-form>

                <v-form class="mx-5" v-else-if="promotion.status == 'onsale'">
                  <v-card-actions class="d-flex justify-space-around pb-3">
                  <v-btn
                    width="90%" dark color="#DFA937" tile class="buttons" depressed @click="update(promotion), promotion.dialog3 = false">
                    {{ $t('archive') }}
                  </v-btn>
                  </v-card-actions>
                </v-form>


              </v-card>
            </v-dialog>
            <v-dialog v-model="promotion.dialog2" max-width="290">
              <v-card>
                <v-layout row class="mx-auto">
                  <v-card-title class="headline">{{ $t('editDeal') }}</v-card-title>
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
                    :rules="titleRules"
                    :counter="15"
                    required
                    color="#DFA937">
                      <template v-slot:label>
                        <div>
                        {{ $t('title') }}
                      </div>
                    </template>
                  </v-text-field>
                  <v-textarea v-model="promotion.description"
                              color="#DFA937">
                    <template v-slot:label>
                      <div>
                        {{ $t('description') }}
                      </div>
                    </template>
                  </v-textarea>
                  <el-upload
                    v-model="image"
                    action="http://localhost:3000/api/v1/promotions/images/upload"
                    class="upload-demo"
                    ref="upload"
                    :on-change="handleChange"
                    :file-list="fileList"
                    :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">  {{ $t('selectFile') }}</el-button>
                  </el-upload>
                  <v-text-field
                    v-model="promotion.statistics.limit"
                    value=""
                    color="#DFA937"
                  >
                    <template v-slot:label>
                      <div>
                        {{ $t('numberOfDeals') }}
                      </div>
                    </template>
                  </v-text-field>
                <v-text-field
                    v-model="promotion.price"
                    value=""
                    color="#DFA937"
                    prefix="¥"
                  >
                    <template v-slot:label>
                      <div>
                        {{ $t('newPrice') }}
                      </div>
                    </template>
                  </v-text-field>
                  <v-text-field
                    v-model="promotion.original_price"
                    value=""
                    color="#DFA937"
                    prefix="¥"
                  >
                    <template v-slot:label>
                      <div>
                        {{ $t('oldPrice') }}
                      </div>
                    </template>
                  </v-text-field>
                </v-form>
                <v-card-actions class="d-flex justify-space-around pb-3">
                  <v-btn
                    width="50%" dark color="#DFA937" tile class="buttons" depressed @click="editPromotion(promotion);">
                    {{ $t('save') }}
                  </v-btn>
                  <v-btn
                    width="40%" dark color="#DFA937" tile class="buttonst" depressed @click="promotion.dialog2 = false">
                    {{ $t('cancel') }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="promotion.dialogstats" max-width="290">
              <v-card>
                <v-layout row class="mx-auto">
                  <v-card-title class="headline">{{ $t('stats') }}</v-card-title>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="promotion.dialogstats = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-layout>
                <v-card-text>
                  {{ $t('verified') }} {{ promotion.statistics.verified }}
                </v-card-text>
                <v-card-text>
                  {{ $t('claimed') }} {{ promotion.statistics.issued }}
                </v-card-text>
              </v-card>
            </v-dialog>
            <v-dialog
              v-model="promotion.dialog"
              max-width="290">
              <v-card>
                <v-layout row class="mx-auto">
                  <v-card-title class="headline">{{ $t('deletePromo') }}</v-card-title>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="promotion.dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-layout>
                <v-card-text>
                  {{ $t('areYouSure') }}
                </v-card-text>
                <v-card-actions class="d-flex justify-center pb-3">
                  <v-btn width="80%" dark color="#DFA937" tile class="buttons" depressed @click="remove(promotion)">
                    {{ $t('yesIamSure') }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>


      </v-card>
    <!-- </v-row> -->
    </v-col>
    </v-layout>
	</v-container>
</template>

<script>
	export default {
		name: 'VendorCard',
		props: {
      msg: String,
			vendorId: {
				type: Number,
				default: 0
			}
		},
		created() {
			this.$api
				.get(
					`/vendor_profiles/${this.vendorId}/promotions?time=${new Date().getTime()}`
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

          })
          .catch(function(error) {
            alert('There are still customers who are yet to claim the deal! You can delete this deal 24h after the deal expires.' + error);
          });
      },
      saveToToggle(type, value) {
        // this.$refs.menu3.save(start_date)
        this.togglePromotion[type] = value;
      },
      saveEnd(end_date) {
        this.togglePromotion.end_date = end_date;
       // this.$refs.menu4.save(end_date)
      },
      submitUpload(id) {
        if (this.formData.files != undefined) {
          let formData = new FormData();
          formData.append("file", this.formData.files[1]);
          // formData.append("promotion", JSON.stringify(this.createdPromotion));
          this.$api.post(`files/upload?id=${id}&model=promotion&field=image`, formData, {headers: { "Content-Type": "multipart/form-data" }})
          .then(() => {
            this.fileList = [];
            this.uploadFile =[];
            location.reload();
          })
          .catch();
          // this.$refs.upload.submit();
        } else {
          location.reload()
        }

      },
      handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
        this.formData.files = {}
        this.formData.files[1] = file.raw;
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
        delete updated_promotion.statistics

        this.$api
          .post(`/promotions/${id}`,
            {promotion: updated_promotion})
          .then( () => {
            this.submitUpload(id);
            this.dialog2 = false;
            }
          )
          .catch();
          this.dialog2 = false;
      },
      update(promotion) {
        let id = promotion.id
        let updatedPromotion = {}
        // updatedPromotion.start_date = this.togglePromotion.start_date
        updatedPromotion.start_date = this.start_date
        // updatedPromotion.end_date = this.togglePromotion.end_date
        updatedPromotion.end_date = this.end_date
        updatedPromotion.start_time = this.togglePromotion.start_time
        updatedPromotion.end_time = this.togglePromotion.end_time
        updatedPromotion.price = promotion.price

        // this.$api.post(`/promotions/${id}/state`, {promotion: updatedPromotion})
        //   .then(
        //     // alert('post'),
        //     location.reload()
        //   )
        //   .catch(e => {
        //     this.error.push(e);
        //   });

          this.$api
          .post(`/promotions/${id}/state`,
            {promotion: updatedPromotion})
          .then( () => {
            this.submitUpload(id);
            // this.dialog2 = false;
            }
          )
          .catch();
          // this.dialog2 = false;
      },
		},
		data() {
			return {
				snackbar: false,
				promotions: [],
        start_date: new Date().toISOString().substr(0, 10),
        end_date: new Date().toISOString().substr(0, 10),
        start_time: '13:30',
        end_time: '23:30',
        menu3: false,
        menu4: false,
        fileList: [],
        titleRules: [
        v => !!v || 'Title is required',
        v => v.length <= 15 || 'Title must be less than 15 characters',
      ],
        formData: new FormData(),
        togglePromotion: {
        },

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
