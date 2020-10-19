<template>
	<div class="checkout">
		<!-- <Navbar /> -->
		<v-btn class="mt-n8" icon>
			<v-icon to="/deals" color="black">mdi-chevron-left
			</v-icon>
		</v-btn>
		<h3 class="mx-5">Checkout</h3>
		<v-layout row class="mx-auto" align-center justify-center>
    		<v-btn
    			align-center
    			width="60%"
    			justify-center
    			dark
				color="#07C160"
				tile
				class="buttons"
				depressed
        @click="pay(orders[0].id)"
				style="position: fixed; bottom: 10px; z-index: 5;">WeChat pay
	    	</v-btn>
	    </v-layout>
		<v-layout row class="mx-auto" style="max-width: 100vw;" align-center justify-center>
	    	<v-col cols="12">
	        	<v-row justify="center">
		    		<v-col
	          		cols="12">
	          			<v-card
						class="mb-2 mx-auto px-0"
			            light
			            v-for="deal in orders"
						      v-bind:key="deal.id"
			            >
	            			<div class="d-flex flex-no-wrap">
				            	<v-avatar
				                class=""
				                size="145"
				                height=""
				                tile>
				                	<v-img
              							:src="deal.image">
              						</v-img>
				                </v-avatar>
	              				<div>
	                				<v-card-title class="mt-n1 mb-3 pr-0 cols-3 text-truncate" style="font-size:1.1rem;"
	                				>{{deal.promotion.title}}</v-card-title>
									<v-card-subtitle class="caption justify-center mb-n9 pr-0 cols-5 text-truncate mb-3" style="font-size:.5rem;">
					      				<v-icon small class="align-end justify-center mr-1">mdi-clock-outline</v-icon>
					      					{{deal.promotion.time_slot}}
									</v-card-subtitle>
									<v-row
									class="mt-3 ml-1">

					        			<v-card-title class="body-1 deep-orange--text" style="font-size:1.1rem; font-weight: bold;">¥{{deal.price}}</v-card-title>
					        			<v-card-title class="body-2 ml-n5 text--disabled under">¥{{deal.amount}}</v-card-title>
					    			</v-row>

									<v-row class="mb-n12">
										<v-spacer></v-spacer>
								        <v-btn
								            icon
								            right
								            color="red"
								            small
								            absolute
								            bottom
				              				depressed
				              				@click="remove(deal)"
				              				>
								        	<v-icon>mdi-trash-can-outline
								        	</v-icon>
								        </v-btn>
						    		</v-row>
				            	</div>
				        	</div>
				    	</v-card>
					</v-col>
				</v-row>
			</v-col>
		</v-layout>
		<h3 class="mx-5">Total: ¥ {{orders[0].amount}}</h3>
		<div class="disc">
			<h5 class="mx-5">Disclaimer:</h5>
			<p class="mx-5 caption" font-size=".7rem">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus magni, iusto pariatur possimus ipsam quae rem consequatur error repellendus, inventore, aut officiis at. Necessitatibus, delectus. Doloribus reprehenderit, debitis officia mollitia.
			</p>
		</div>
	</div>
</template>

<script>
  // import wx from 'weixin-js-sdk';
  import wx from 'weixin-jsapi';
	export default {
		name: 'Checkout',
		components: { },

    created() {
      let storedToken = sessionStorage.getItem('token');
      if ((storedToken != undefined || storedToken != null) && storedToken != 'logout') {
        this.$api.defaults.headers.common['X-Auth-Token'] = storedToken
        this.$api.get(`/orders`).then(response => {
          this.orders = response.data;
          // this.coupons = response.data.map(item => item.coupon);
          // alert('this.orders' + this.orders.length + ' == ' + this.coupons.length);
        })
        .catch(function(error) {
          // alert('fail' + error);
        });
      }
      else {
        // window.location.href = "https://gast.world"
        window.location.href = `https://${window.location.host}`
      }
    },

    data() {
      return {
        coupons: [],
        orders: [],
        total: 1,
        payment: {}
      };
    },

		methods: {
			remove(deal) {
				// this.$api(this.deals, index);
					this.$api.post(
						`/coupons/${deal.id}`,
					)
					.then(response => {
						this.canceled = response

						this.res = this.deals.filter((x) => {
							return x.id != deal.id
						});
						this.deals = this.res;

						// this.deals = this.deals.map(deals => ({
						// 	...deals,
						// 	dialog: false,
						// 	dialog3: false
						// }));

					})
					.catch(function(error) {
						// alert('fail' + error);
					});
      },
      pay(id) {
        this.$api.post(`/orders/pay`, {id: id}).then( response => {
          let payment = response.data.data.payment;
          // alert('in pay' + payment)
          this.wxPay(payment);
        })
      },
      wxPay(data) {
        // alert(data)
        wx.config({
          debug: true, // 这里一般在测试阶段先用ture，等打包给后台的时候就改回false,
          appId: data.appId, // 必填，公众号的唯一标识
          timestamp: data.timeStamp, // 必填，生成签名的时间戳
          nonceStr: data.nonceStr, // 必填，生成签名的随机串
          signature: data.paySign, // 必填，签名
          jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表
        })

        wx.ready(() => {
          wx.checkJsApi({
            jsApiList: ['chooseWXPay'],
            success:function(res){
              // alert(res)
              // console.log("seccess")
              // console.log('hskdjskjk', res)
            },
            fail:function(res){
              // alert(res)
              // console.log("fail");
              // console.log(res)
            }
          })

          wx.chooseWXPay({
            timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
            package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
            signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign: data.paySign, // 支付签名
            success: function (res) {  // 支付成功后的回调函数
              // alert(res.errorMsg)
            },
            fail: function (res) {
              // alert("支付失败");
              // alert(res.errMsg);
            }
          })
        })

        wx.error(err => {
          alert(err)
        })
      }

		}
	}
</script>

<style scoped>
	.disc {
		background-color: #E5E5E5;
		margin:2rem;
		padding:1rem;
	}
	.checkout {
		background-color: white;
		height: 100vh;
	}
	.buttons {
		border-radius: 5px;
	}
</style>
