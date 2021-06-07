import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        fba: 'Filter by area',
        fbt: 'Filter by type',
        deals: 'Deals',
        profile: 'Profile',
        forVendors: 'for vendors',
        browseDeals: 'browse Deals',
        madeFresh: 'Made Fresh',
        findDeal: 'Find deals on food that needs to be consumed today!',
        whyYouSay: 'Why food ends up on our site you may ask?',
        verifiedVendors: 'Verified Vendors',
        overProduction: 'Overproduction',
        ssll: 'Short Shelf Life',
        seasonSpec: 'Season Specific',
        packageDef: 'Package Deformation',
        todayOrder: 'Todays Orders',
        userLogin: 'user login',
        registerVendor: 'Register vendor account',
        newVendorName: 'Name of establishment',
        newVendorType: 'Type of establishment',
        store: 'Store',
        bakery: 'Bakery',
        cafe: 'Café',
        restaurant: 'Restaurant',
        bar: 'Bar',
        companyDesc: 'Company Description',
        address: 'Address',
        area: 'Area',
        phoneNumber: 'Phone Number',
        agreeToS: 'Agree with terms of service',
        readToS: 'Read terms of service here',
        submitFA: 'Submit for approval',
        addNewDeal: 'Add New Deal',
        verifyCou: 'Verify Coupon',
        monthStat: 'Monthly Statistics',
        description: 'Description',
        savedDeals: 'Saved Deals',
        title: 'Title',
        startDate: 'Start Date',
        endDate: 'End Date',
        startTime: 'Start Time',
        endTime: 'End Time',
        selectFile: 'Select File',
        numberOfDeals: 'Availability',
        newPrice: 'New Price',
        oldPrice: 'Old Price',
        saveNPost: 'Save & post',
        save: 'Save',
        couponCode: 'Coupon Code',
        verify: 'Verify',
        couponsClaimed: 'Coupons Claimed:',
        couponsVerified: 'Coupons Verified:',
        close: 'Close',
        editProfile: 'Edit Profile',
        editDeal: 'Edit Deal',
        uploadVenIm: 'Upload Vendor Image',
        uploadVenLo: 'Upload Vendor Logo',
        cancel: 'Cancel',
        promo: 'Promotion',
        reactivate: 'Reactivate',
        archive: 'Archive',
        activate: 'Activate',
        stats: 'Statistics',
        verified: 'Verified:',
        claimed: 'Claimed:',
        deletePromo: 'Delete Promotion',
        areYouSure: 'Are you sure you want to delete this promotion? This action is permanent.',
        areYouSureProfile: 'Are you sure you want to cancel?',
        yesIamSure: 'Yes, I am sure',
        claim: 'add to cart',
        details: 'Details',
        avi: ' available',
        sip: 'see in profile',
        suc: 'Success!',
        tos: 'Terms of Service',
        sucmes: 'You have successfully claimed this promotion! Make sure to note the pickup time.',
        heifren: 'Hey friend, it looks like you do not have a vendor account set up yet. Create a vendor account and submit for approval.',
        confi: 'Submitted!',
        hassub: 'Your application has been submitted. An account manager will contact you shortly and verify your account. You can start creating your vendor profile and create deals but they will not be visiable until after you have been verified.',
        deliveryName: 'Your name',
        deliveryAddress: 'Your delivery address',
        deliveryMobile: 'Mobile phone',
        checkout: "Checkout",
        wxpay: "Wechat Pay",
        delin: "Delivery Info",
        editdelin: "Edit Delivery Info",
        exp: "Expiry Date: ",
        inputAddressInfo: "Pls input your receiving address before pay!"
    },
    'zh_CN': {
        fba: '区域',
        fbt: '品类',
        deals: '优惠美食',
        profile: '我的',
        forVendors: '我是商户',
        browseDeals: '浏览优惠',
        madeFresh: '新鲜食品',
        verifiedVendors: '认证商户',
        overProduction: '过度生产',
        ssll: '短暂的最佳储存日期',
        seasonSpec: '季节限定',
        packageDef: '包装变形',
        todayOrder: '今日订单',
        userLogin: '登录',
        registerVendor: '注册商家账户',
        newVendorName: '机构名称',
        newVendorType: '机构类型',
        store: '商店',
        bakery: '面包店',
        cafe: '咖啡店',
        restaurant: '餐厅',
        bar: '酒吧',
        companyDesc: '公司简介',
        address: '地址',
        area: '区域',
        phoneNumber: '联系电话',
        agreeToS: '同意服务条款',
        tos: '服务条款',
        readToS: '阅读服务条款',
        submitFA: '提交审核',
        addNewDeal: '添加折扣商品',
        verifyCou: '验证优惠券',
        monthStat: '月度统计',
        description: '描述',
        savedDeals: '我的商品',
        title: '标题',
        startDate: '开始日期',
        endDate: '结束日期',
        startTime: '开始时间',
        endTime: '结束时间',
        selectFile: '选择文件',
        numberOfDeals: '供应数量',
        newPrice: '优惠价',
        oldPrice: '原价',
        saveNPost: '保存并发布',
        save: '保存',
        couponCode: '优惠券号',
        verify: '验证',
        couponsClaimed: '领取的优惠券:',
        couponsVerified: '验证的优惠券:',
        close: '关闭',
        editProfile: '档案编辑',
        editDeal: '编辑商品',
        uploadVenIm: '上传商户图片',
        uploadVenLo: '上传商户商标',
        cancel: '取消',
        promo: '促销',
        reactivate: '恢复激活',
        archive: '存档',
        activate: '激活',
        stats: '数据',
        verified: '验证',
        claimed: '领取',
        deletePromo: '删除促销',
        areYouSure: '您确定要删除促销吗? 一经操作无法撤回',
        yesIamSure: '是的，我确定',
        claim: '加入购物车',
        details: '详情',
        avi: '份',
        findDeal: '来看看今日的折扣食物！',
        whyYouSay: '你可能会好奇这些食品为什么最终来到了我们这儿?',
        sip: '查看我的订单',
        suc: '领取成功！',
        sucmes: '请注意取货的时间哦!',
        heifren: '嘿，您好像还未注册商家账户哦，请创建商家账户并提交审核。',
        confi: '提交成功！',
        hassub: '您的申请已提交，账户经理会立刻联系您并验证账户。您可以开始创建您的商户档案及优惠食品，信息均会在验证结束后显示。',
        areYouSureProfile: '您确定取消该笔订单吗？',
        deliveryName: '收货人',
        deliveryAddress: '收货地址',
        deliveryMobile: '联系电话',
        checkout: "点击购买",
        wxpay: "微信支付",
        delin: "配送",
        editdelin: "编辑配送",
        exp: "保质期: ",
        inputAddressInfo: "付款之前请先确认配送地址"
    }
};

const i18n = new VueI18n({
    locale: 'zh_CN', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});

export default i18n;
