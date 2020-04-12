<template>
	<div class="vendorcard">
    <v-layout row class="mx-auto" align-center justify-center>
      <v-card tile
              class="mb-6"
              width="85vw"
              xs12 md6 lg4
              v-for="(promotion, index) in promotions"
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
            {{ promotion.time }}
            <!-- {{deal.time1}} -->
          </v-card-subtitle>
          <v-spacer></v-spacer>
          <v-card-text class="py-0">
            {{ promotion.description }}
          </v-card-text>
          <v-card-text class="mt-2 pt-0">
            <v-span class="font-weight-bold">
              Disclaimer
            </v-span>
            <br>
            promotion.disclaimer
            <!-- {{deal.disclaimer}} -->
          </v-card-text>
          <v-row justify="space-around" class="mx-2 align-center">
            <v-switch inset @change="promotion.dialog3 = true" color="success"></v-switch>
            <v-dialog v-model="promotion.dialog3"
                      max-width="290">
              <v-card>
                <v-layout row class="mx-auto">
                  <v-card-title class="headline">Activate promotion</v-card-title>
                  <v-spacer></v-spacer>
                    <v-btn icon @click="promotion.dialog3 = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-layout>

                <v-form ref="form"
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
                  <v-text-field v-model="start"
                              label="Start-time"
                              required
                              color="#DFA937">
                  </v-text-field>
                  <v-text-field v-model="end"
                                label="End-time"
                                required
                                color="#DFA937">
                  </v-text-field>
                </v-form>

                <v-card-actions class="d-flex justify-space-around pb-3">
                  <v-btn
                    width="90%" dark color="#DFA937" tile class="buttons" depressed @click="promotion.dialog3 = false, snackbar = true">
                    save & post
                  </v-btn>
                  <v-snackbar v-model="snackbar" color="success">
                    You have successfully activated this promotion. It is now live and is viseble for customers!
                    <v-btn vertical text dark
                          @click="promotion.snackbar = false">
                      close
                    </v-btn>
                  </v-snackbar>
                </v-card-actions>
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

                  <v-text-field v-model="title"
                                label="Title"
                                required
                                color="#DFA937">
                  </v-text-field>
                  <v-textarea v-model="description"
                              color="#DFA937">
                    <template v-slot:label>
                      <div>
                        Description 
                      </div>
                    </template>
                  </v-textarea>
                  <v-textarea v-model="disclaimer"
                              color="#DFA937">
                    <template v-slot:label>
                      <div>
                        Disclaimer 
                      </div>
                    </template>
                  </v-textarea>
                  <v-checkbox v-model="allday"
                              color="green">
                    <template  v-slot:label>
                      <div>
                        All day promotion
                      </div>
                    </template>
                  </v-checkbox>
                  <v-text-field v-model="start"
                                label="Start-time"
                                required
                                color="#DFA937">
                  </v-text-field>
                  <v-text-field v-model="end"
                                label="End-time"
                                required
                                color="#DFA937">
                  </v-text-field>
                  
                  <v-file-input label="Promotion Photo"
                                prepend-icon="mdi-camera">
                  </v-file-input>
                </v-form>

                <v-card-actions class="d-flex justify-space-around pb-3">
                  <v-btn
                    width="50%" dark color="#DFA937" tile class="buttons" depressed @click="promotion.dialog2 = false">
                    save & post
                  </v-btn>
                  <v-btn
                    width="40%" dark color="#DFA937" tile class="buttonst" depressed @click="promotion.dialog2 = false">
                    save
                  </v-btn>
                  <v-snackbar v-model="snackbar">
                    You have successfully edited this promotion. Toggle the switch to make the promotion live and visable for customers!
                    <v-btn color="success"
                          vertical
                          text
                          dark
                          @click="promotion.snackbar = false">
                      close
                    </v-btn>
                  </v-snackbar>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-btn fab text @click="promotion.dialog = true">
              <v-icon right>mdi-delete</v-icon>
            </v-btn>

            <v-dialog v-model="promotion.dialog"
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
                  <v-btn width="80%" dark color="#DFA937" tile class="buttons" depressed @click="remove(index)">
                    yes, i am sure
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-snackbar v-model="snackbar">
              You have successfully activated this promotion. It is now live and is viseble for customers!
              <v-btn color="success"
                      vertical
                      text
                      dark
                      @click="snackbar = false">
                close
              </v-btn>
            </v-snackbar>
          </v-row>	
        </v-layout>
      </v-card>
    </v-layout>
	</div>
</template>

<script>

	import axios from 'axios';
	export default {
		name: 'VendorCard',
		props: {
			vendorId: {
				type: Number,
				default: 0
			}
		},
		created() {
			axios
				.get(
					`http://localhost:3000/api/v1/vendors/${this.vendorId}/saved_promotions.json`
				)
				.then(response => {
					this.promotions = response.data.promotions;
					this.promotions = this.promotions.map(promotions => ({
						...promotions,
						dialog: false,
						switch: false,
						dialog2: false,
						dialog3: false
					}));
				})
				.catch(e => {
					this.error.push(e);
				});
		},

		methods: {
			remove(id) {
				this.$delete(this.promotions, id);
			}
		},
		data() {
			return {
				snackbar: false,
				promotions: []
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
