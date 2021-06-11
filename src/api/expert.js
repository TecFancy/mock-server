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
          orderNumber: "ORD2021060816231439720001",
          initiator: "联信",
          reportComName: "sdfsdfsd",
          clientUserId: "A64108874",
          expertUserId: "E95431096",
          clientUserName: "",
          expertUserName: "jielun",
          clientUserSurname: "邱丽璇",
          expertUserSurname: "zhou",
          createTime: "2021-06-08 17:19:38",
          updateTime: "2021-06-08 17:20:43",
          status: "CAN_SETTLEMENT",
          expertOffer: "123",
          settlementPrice: 222,
          settlementCurrencyType: "USD",
          rmbPrice: 100,
          platformPrice: 20,
          statusInfo: {
            code: "BACK_PAY_PROCESS",
            chineseValue: "BACK_PAY_PROCESS",
            englishValue: "BACK_PAY_PROCESS",
          },
        },
        {
          orderNumber: "ORD2021060716230322050002",
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
          orderNumber: "ORD2021052016214940360003",
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
          status: "WAIT_CHECK",
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
        {
          orderNumber: "ORD2021060816231457990004",
          initiator: "联信",
          reportComName: "sdfsdfsd",
          clientUserId: "A64108874",
          expertUserId: "E95431096",
          clientUserName: "",
          expertUserName: "jielun",
          clientUserSurname: "邱丽璇",
          expertUserSurname: "zhou",
          createTime: "2021-06-08 17:50:06",
          updateTime: "2021-06-08 17:50:05",
          status: "READING",
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
        {
          orderNumber: "ORD2021060816231444060005",
          initiator: "联信",
          reportComName: "sdfsdfsd",
          clientUserId: "A64108874",
          expertUserId: "E95431096",
          clientUserName: "",
          expertUserName: "jielun",
          clientUserSurname: "邱丽璇",
          expertUserSurname: "zhou",
          createTime: "2021-06-08 17:26:50",
          updateTime: "2021-06-08 17:28:05",
          status: "PROBLEM",
          expertOffer: "123",
          settlementPrice: 222,
          settlementCurrencyType: "USD",
          rmbPrice: 100,
          platformPrice: 20,
          statusInfo: {
            code: "BACK_PAY_PROCESS",
            chineseValue: "BACK_PAY_PROCESS",
            englishValue: "BACK_PAY_PROCESS",
          },
        },
        {
          orderNumber: "ORD2021060816231443660006",
          initiator: "联信",
          reportComName: "sdfsdfsd",
          clientUserId: "A64108874",
          expertUserId: "E95431096",
          clientUserName: "",
          expertUserName: "jielun",
          clientUserSurname: "邱丽璇",
          expertUserSurname: "zhou",
          createTime: "2021-06-08 17:26:11",
          updateTime: "2021-06-08 17:26:10",
          status: "CAN_SETTLEMENT",
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

/** 征信订单 - 订单状态 */
const getOrderStatusList = (ctx) => {
  ctx.body = {
    code: "0",
    title: "success",
    msg: "success",
    data: [
      { code: "UNPAID", chineseValue: "待付款", englishValue: "To be paid" },
      {
        code: "INVESTIGATE",
        chineseValue: "调查中",
        englishValue: "Under investigation",
      },
      {
        code: "WAIT_CHECK",
        chineseValue: "待平台初审",
        englishValue: "To be reviewed by the platform",
      },
      {
        code: "CHECK_FAIL",
        chineseValue: "初审不通过",
        englishValue: "初审不通过",
      },
      {
        code: "READING",
        chineseValue: "平台解读中",
        englishValue: "平台解读中",
      },
      {
        code: "WAIT_CUSTOMER_VIEW",
        chineseValue: "待用户查看",
        englishValue: "待用户查看",
      },
      {
        code: "WAIT_CUSTOMER_CONFIRM",
        chineseValue: "待用户确认",
        englishValue: "待用户确认",
      },
      {
        code: "PROBLEM",
        chineseValue: "存在问题",
        englishValue: "存在问题",
      },
      {
        code: "CAN_SETTLEMENT",
        chineseValue: "可结算",
        englishValue: "可结算",
      },
      {
        code: "FINISH",
        chineseValue: "已结算",
        englishValue: "已结算",
      },
      {
        code: "CLOSE",
        chineseValue: "已取消",
        englishValue: "已取消",
      },
      {
        code: "BACK_PAY_PROCESS",
        chineseValue: "退款中",
        englishValue: "退款中",
      },
      {
        code: "BACK_PAY",
        chineseValue: "已退款",
        englishValue: "已退款",
      },
    ],
  };
};

const getOrderData = (ctx) => {
  const errorData = {
    code: "13000",
    title: "invalidInputData",
    // msg: "参数有误",
    errorInfo: "操作失败，没有可操作的数据",
  };
  const successData = {
    code: "0",
    title: "success",
    msg: "success",
    data: {
      list: [
        {
          orderNumber: "ORD2021060716230450460001",
          initiator: "联信",
          reportComName: "丛莹璐集团",
          clientUserId: "A30347951",
          expertUserId: "E36711545",
          clientUserName: "congyinglu",
          expertUserName: "qihao",
          clientUserSurname: "",
          expertUserSurname: "Sun",
          createTime: "2021-06-07 13:51:01",
          updateTime: "2021-06-08 13:55:18",
          status: "CAN_SETTLEMENT",
          statusInfo: {
            code: "CAN_SETTLEMENT",
            chineseValue: "可结算",
            englishValue: "Settleable",
          },
          expertOffer: "1000.00",
          settlementCurrencyType: "",
          settlementPrice: 0,
          rmbPrice: 0,
          platformPrice: 0,
          settlementMethod: null,
          paypalAccount: "447434035@qq.com",
          payee: null,
          receivingBank: null,
          swiftCode: null,
          bankAccount: null,
        },
        {
          orderNumber: "ORD2021060716230450460002",
          initiator: "联信",
          reportComName: "丛莹璐集团",
          clientUserId: "A30347951",
          expertUserId: "E36711545",
          clientUserName: "congyinglu",
          expertUserName: "qihao",
          clientUserSurname: "",
          expertUserSurname: "Sun",
          createTime: "2021-06-07 13:51:01",
          updateTime: "2021-06-08 13:55:18",
          status: "CAN_SETTLEMENT",
          statusInfo: {
            code: "CAN_SETTLEMENT",
            chineseValue: "可结算",
            englishValue: "Settleable",
          },
          expertOffer: "1000.00",
          settlementCurrencyType: "",
          settlementPrice: 0,
          rmbPrice: 0,
          platformPrice: 0,
          settlementMethod: null,
          paypalAccount: "447434035@qq.com",
          payee: null,
          receivingBank: null,
          swiftCode: null,
          bankAccount: null,
        },
        {
          orderNumber: "ORD2021060716230450460003",
          initiator: "联信",
          reportComName: "丛莹璐集团",
          clientUserId: "A30347951",
          expertUserId: "E36711545",
          clientUserName: "congyinglu",
          expertUserName: "qihao",
          clientUserSurname: "",
          expertUserSurname: "Sun",
          createTime: "2021-06-07 13:51:01",
          updateTime: "2021-06-08 13:55:18",
          status: "CAN_SETTLEMENT",
          statusInfo: {
            code: "CAN_SETTLEMENT",
            chineseValue: "可结算",
            englishValue: "Settleable",
          },
          expertOffer: "1000.00",
          settlementCurrencyType: "",
          settlementPrice: 0,
          rmbPrice: 0,
          platformPrice: 0,
          settlementMethod: null,
          paypalAccount: "447434035@qq.com",
          payee: null,
          receivingBank: null,
          swiftCode: null,
          bankAccount: null,
        },
        {
          orderNumber: "ORD2021060716230450460004",
          initiator: "联信",
          reportComName: "丛莹璐集团",
          clientUserId: "A30347951",
          expertUserId: "E36711545",
          clientUserName: "congyinglu",
          expertUserName: "qihao",
          clientUserSurname: "",
          expertUserSurname: "Sun",
          createTime: "2021-06-07 13:51:01",
          updateTime: "2021-06-08 13:55:18",
          status: "CAN_SETTLEMENT",
          statusInfo: {
            code: "CAN_SETTLEMENT",
            chineseValue: "可结算",
            englishValue: "Settleable",
          },
          expertOffer: "1000.00",
          settlementCurrencyType: "",
          settlementPrice: 0,
          rmbPrice: 0,
          platformPrice: 0,
          settlementMethod: null,
          paypalAccount: "447434035@qq.com",
          payee: null,
          receivingBank: null,
          swiftCode: null,
          bankAccount: null,
        },
        {
          orderNumber: "ORD2021060716230450460005",
          initiator: "联信",
          reportComName: "丛莹璐集团",
          clientUserId: "A30347951",
          expertUserId: "E36711545",
          clientUserName: "congyinglu",
          expertUserName: "qihao",
          clientUserSurname: "",
          expertUserSurname: "Sun",
          createTime: "2021-06-07 13:51:01",
          updateTime: "2021-06-08 13:55:18",
          status: "CAN_SETTLEMENT",
          statusInfo: {
            code: "CAN_SETTLEMENT",
            chineseValue: "可结算",
            englishValue: "Settleable",
          },
          expertOffer: "1000.00",
          settlementCurrencyType: "",
          settlementPrice: 0,
          rmbPrice: 0,
          platformPrice: 0,
          settlementMethod: null,
          paypalAccount: "447434035@qq.com",
          payee: null,
          receivingBank: null,
          swiftCode: null,
          bankAccount: null,
        },
        {
          orderNumber: "ORD2021060716230450460006",
          initiator: "联信",
          reportComName: "丛莹璐集团",
          clientUserId: "A30347951",
          expertUserId: "E36711545",
          clientUserName: "congyinglu",
          expertUserName: "qihao",
          clientUserSurname: "",
          expertUserSurname: "Sun",
          createTime: "2021-06-07 13:51:01",
          updateTime: "2021-06-08 13:55:18",
          status: "CAN_SETTLEMENT",
          statusInfo: {
            code: "CAN_SETTLEMENT",
            chineseValue: "可结算",
            englishValue: "Settleable",
          },
          expertOffer: "1000.00",
          settlementCurrencyType: "",
          settlementPrice: 0,
          rmbPrice: 0,
          platformPrice: 0,
          settlementMethod: null,
          paypalAccount: "447434035@qq.com",
          payee: null,
          receivingBank: null,
          swiftCode: null,
          bankAccount: null,
        },
      ],
      settlementPrice: 0,
      orderTotal: 6,
    },
  };
  ctx.body = successData;
};

const saveOrderSettlementData = (ctx) => {
  ctx.body = {
    code: "0",
    title: "success",
    msg: "success",
  };
};

const saveSettlementVoucherData = (ctx) => {
  ctx.body = {
    code: "0",
    title: "success",
    msg: "success",
  };
};

const reportOrderRecords = (ctx) => {
  ctx.body = {
    code: "0",
    data: {
      items: [
        {
          content: "这里全 TM 备注_这是假数据 哦",
          createTime: "2021-01-01 12:32:23",
          title: "订单操作名称 code",
          userName: "这是用户名哦",
        },
        {
          content: "这里全 TM 备注",
          createTime: "2021-01-01 12:32:23",
          title: "订单操作名称 code 2",
          userName: "这是用户名哦",
        },
      ],
      pageInfo: {
        pages: 1,
        totalResults: 21,
      },
      pageNumber: 1,
    },
    msg: "success",
    title: "success",
  };
};

module.exports = {
  getSingleExpertInfo,
  settlementMethodEmun,
  reportOrderList,
  getOrderStatusList,
  getOrderData,
  saveOrderSettlementData,
  saveSettlementVoucherData,
  reportOrderRecords,
};
