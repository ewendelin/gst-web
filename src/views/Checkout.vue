<template>
	<div class="checkout">
		<!-- <Navbar /> -->
		<v-btn class="mt-n8" icon @click="toDeals">
			<v-icon to="/deals" color="black">mdi-chevron-left
			</v-icon>
		</v-btn>
		<h3 class="mx-5">Checkout</h3>
		<v-layout row class="mx-auto" align-center justify-center>
  		<v-btn
        v-if="order.id"
  			align-center
  			width="60%"
  			justify-center
  			dark
			  color="#07C160"
			  tile
			  class="buttons"
			  depressed
        @click="pay"
			  style="position: fixed; bottom: 10px; z-index: 5;">WeChat Pay
    	</v-btn>
	   </v-layout>
		<v-layout row class="mx-auto" style="max-width: 100vw;" align-center justify-center>
	    	<v-col cols="12">
	        <v-row justify="center">
		    		<v-col cols="12" class="scroll">
	          	<v-card
						      class="mb-2 mx-auto px-0"
			            light
                  v-if="order.id"
			            >
	            			<div class="d-flex flex-no-wrap">
				            	<v-avatar
				                class=""
				                size="145"
				                height=""
				                tile>
				                	<v-img
              							:src="order.promotion.image">
              						</v-img>
				                </v-avatar>
	              				<div>
	                				<v-card-title class="mt-n1 mb-3 pr-0 cols-3 text-truncate" style="font-size:1.1rem;"
	                				>{{order.promotion.title}}</v-card-title>
									<v-card-subtitle class="caption justify-center mb-n9 pr-0 cols-5 text-truncate mb-3" style="font-size:.5rem;">
					      				<v-icon small class="align-end justify-center mr-1">mdi-clock-outline</v-icon>
					      					{{order.promotion.time_slot}}
									</v-card-subtitle>
									<v-row class="mt-3 ml-1">
			        			<v-card-title class="body-1 deep-orange--text" style="font-size:1.1rem; font-weight: bold;">¥{{order.amount}}</v-card-title>
			        			<v-card-title class="body-2 ml-n5 text--disabled under">¥{{order.promotion.original_price}}</v-card-title>
				    			</v-row>

									<v-row class="mb-n12">
										<v-spacer></v-spacer>
								        <v-btn
                            v-if="order.can_remove"
								            icon
								            right
								            color="red"
								            small
								            absolute
								            bottom
				              			depressed
				              			@click="remove_order(order)"
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

    <v-layout row class="mx-0 mt-n12" v-if="!order.id" align="center">
      <v-col cols="12" >
        <h1 class="text-center font-weight-bold" style="color:#FFB300; font-size: 3rem;">No orders yet ...</h1>
        <p class="text-center" subtitle-1 style="color:#424242;">Find good deals on food that needs to be consumed.</p>
        <v-layout
          class="ma-1 mt-n4"
          align="center"
        >
          <v-col cols="12" >
            <v-btn
              width="20rem"
              dark
              color="#07C160"
              tile
              class="buttons"
              depressed
              @click="toDeals"
              >{{ $t('browseDeals') }}
              <v-icon right>mdi-sale</v-icon>
            </v-btn>
          </v-col>
        </v-layout>
      </v-col>
    </v-layout>

		<h3 class="mx-5" v-if="order.id">Total: ¥ {{order.total_amount}} for {{order.quantity}} {{order.quantity > 1 ? 'sets' : 'set'}}</h3>
		<div class="disc">
			<h5 class="mx-5">Disclaimer:</h5>
			<p class="mx-5 caption" font-size=".7rem">
			Comming soon ...
			</p>
		</div>
	</div>
</template>

<script>
  // import Navbar from '../components/Navbar';
  // import wx from 'weixin-js-sdk';
  import wx from 'weixin-jsapi';
	export default {
		name: 'Checkout',
    // components: { Navbar },
    components: {  },

    created() {
      let storedToken = sessionStorage.getItem('token');
      if ((storedToken != undefined || storedToken != null) && storedToken != 'logout') {
        this.$api.defaults.headers.common['X-Auth-Token'] = storedToken
        this.fetchOrders(this.$route.query.id)
      }
      else {
        // window.location.href = "https://gast.world"
        window.location.href = window.location.origin
      }
    },

    data() {
      return {
        coupons: [],
        orders: [],
        total: 1,
        payment: {},
        order: {
          promotion: {}
        }
      };
    },

		methods: {
      fetchOrders(id = undefined) {
        // alert(order_id)
        let url = id === undefined ? `orders` : `orders/${id}`
        this.$api.get(url).then(response => {
          if (id === undefined) {
            this.order = response.data[0]
          } else {
            this.order = response.data.data
          }
        })
        .catch(function() {
          // alert('fail' + error);
        });
      },
			remove_order(order) {
				// this.$api(this.deals, index);
				this.$api.delete(`/orders/${order.id}`).then(response => {
					this.canceled = response
					this.orders = this.orders.filter((x) => {
            return x.id != order.id
          });
          this.order = {promotion: {}}
				})
				.catch(function() {
					// alert('fail' + error);
				});
      },
      toDeals() {
        window.location.href = window.location.origin + '/deals'
      },
      pay() {
        this.$api.post(`/orders/pay`, {id: this.order.id}).then( response => {
          let payment = response.data.data.payment;
          // alert('in pay' + payment)
          this.wxPay(payment);
        })
      },
      wxPay(data) {
        // alert(data)
        wx.config({
          debug: false, // 这里一般在测试阶段先用ture，等打包给后台的时候就改回false,
          appId: data.appId, // 必填，公众号的唯一标识
          timestamp: data.timeStamp, // 必填，生成签名的时间戳
          nonceStr: data.nonceStr, // 必填，生成签名的随机串
          signature: data.paySign, // 必填，签名
          jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表
        })

        wx.ready(() => {
          wx.checkJsApi({
            jsApiList: ['chooseWXPay'],
            success:function(){
              // alert(res)
              // console.log("seccess")
              // console.log('hskdjskjk', res)
            },
            fail:function(){
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
            success: function () {  // 支付成功后的回调函数
              // alert(res.errorMsg)
            },
            fail: function () {
              // alert("支付失败");
              // alert(res.errMsg);
            }
          })
        })

        wx.error( function() {
          // alert()
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
  .scroll{
    overflow: scroll !important;
  }
</style>
