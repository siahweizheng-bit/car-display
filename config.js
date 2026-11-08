/**
 * CarDisplay.my 人工设置区
 * 以后需要更换号码、品牌或社交链接，只修改这个文件即可。
 * WhatsApp 号码请使用国家码格式，不要加 +、空格或 -。
 */
window.APP_CONFIG = Object.freeze({
  brandName: 'CarDisplay.my',

  // Zach 接收车商咨询的销售号码（011-28991810）
  salesWhatsapp: '601128991810',

  // DEMO 中买家询问车辆时要联系的车行号码。
  // 目前留空，制作客户版本时换成该车行号码，例如：60123456789
  dealerWhatsapp: '',

  dealerSlogan: '诚信不是口号，是每一辆车都敢于公开。',
  dealerSloganEn: 'Trust is proven by what every car is willing to reveal.',
  facebookUrl: 'https://www.facebook.com/',
  instagramUrl: 'https://www.instagram.com/',
  ownerEmail: '',

  // 公开 DEMO 后台 PIN；不要在这里放正式系统密码或 API 密钥。
  demoAdminPin: '000000'
  ,

  // 方案价格（RM）
  plans: {
    showroom: { originalSetup: 1288, promoSetup: 588, monthly: 200 },
    system: { originalSetup: 2488, promoSetup: 988, monthly: 388 }
  }
});
