const getSingleExpertInfo = (ctx) => {
  ctx.body = {
    code: "0",
    title: "success",
    msg: "success",
    data: {
      user: {
        type: "expert",
        userId: "E95431096",
        name: "jielun",
        callName: "jielun",
        sex: null,
        image:
          "https://lxiccp-test.oss-cn-beijing.aliyuncs.com/iccp/2021-04-26/1619424554483/9cea7fb913ae4268baf5e84f81569656.jpg",
        email: "409481917@qq.com",
        paypalAccount: null,
        phone: "15563998020",
        countryCode: "USA",
        company: "CCC",
        position: "AAA",
        createTime: "2021-04-26 16:09:52",
        updateTime: null,
        custrServId: "cs000000",
        createdId: null,
        updateUserId: null,
        isVerified: 1,
        isValid: 1,
        isDel: null,
        surname: "zhou",
        sort: 99,
        countryNum: null,
        mobile: null,
        regChannel: null,
        address: null,
        openId: null,
        transparentImage: null,
        regSubChannel: null,
      },
      companyAddress: "ABCD",
      serviceIdStr: "1018,1020,977,1019,487,6,59,58",
      introduction: "lvshi",
      advantage: "我是专家",
      iccpExpertRating: {
        id: 1224,
        userId: "E95431096",
        attitudeRateAVG: 4,
        attitudeRateAVGChange: 0,
        skillRateAVG: 4,
        skillRateAVGChange: 0,
        responseSpeed: 3.9,
        responseSpeedChange: 0,
        createTime: "2021-04-26T08:09:52.000+00:00",
        updateTime: "2021-06-07T00:59:31.000+00:00",
      },
      iccpSettlement: {
        id: 1,
        userId: "E95431096",
        settlementMethod: "PAYPAL",
        payee: "888888",
        receivingBank: "888888",
        swiftCode: "88888",
        bankAccount: "88888",
        createId: null,
        createTime: null,
        updateId: "CRM000069",
        updateTime: "2021-06-07T00:59:31.000+00:00",
        isValid: 1,
      },
    },
  };
};

const settlementMethodEmun = (ctx) => {
  ctx.body = {
    code: "0",
    title: "success",
    msg: "success",
    data: [
      {
        code: "OFFLINE",
        value: "线下",
      },
      {
        code: "PAYPAL",
        value: "PayPal",
      },
    ],
  };
};

const reportOrderList = (ctx) => {
  ctx.body = {
    code: "0",
    title: "success",
    msg: "success",
    data: {
      pageNumber: 1,
      pageInfo: { totalResults: 598, pages: 30 },
      items: [
        {
          orderNumber: "ORD2021060716230322050001",
          initiator: "联信",
          reportComName: "sdfsdfsd",
          clientUserId: "A64108874",
          expertUserId: "E36711545",
          clientUserName: "",
          expertUserName: "qihao",
          clientUserSurname: "邱丽璇",
          expertUserSurname: "Sun",
          createTime: "2021-06-08 15:44:33",
          updateTime: "2021-06-08 15:48:35",
          status: "CLOSE",
          expertOffer: "123",
          settlementPrice: 222,
          settlementCurrencyType: "USD",
          rmbPrice: 100,
          platformPrice: 20,
          statusInfo: {
            code: "CLOSE",
            chineseValue: "已取消",
            englishValue: "Cancelled",
          },
        },
        {
          orderNumber: "ORD2021052016214940360001",
          initiator: "联信",
          reportComName: "89欧陆",
          clientUserId: "A25326544",
          expertUserId: "E36711545",
          clientUserName: "",
          expertUserName: "qihao",
          clientUserSurname: "jihuahua",
          expertUserSurname: "Sun",
          createTime: "2021-06-08 14:23:30",
          updateTime: "2021-06-08 14:23:29",
          status: "UNPAID",
          expertOffer: "123",
          settlementPrice: 222,
          settlementCurrencyType: "USD",
          rmbPrice: 100,
          platformPrice: 20,
          statusInfo: {
            code: "UNPAID",
            chineseValue: "待付款",
            englishValue: "To be paid",
          },
        },
      ],
    },
  };
};

module.exports = {
  getSingleExpertInfo,
  settlementMethodEmun,
  reportOrderList,
};
