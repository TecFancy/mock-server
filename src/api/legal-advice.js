const getData = (ctx) => {
  ctx.body = {
    code: "0",
    msg: "success",
    title: "success",
    data: {
      items: [
        {
          id: 1,
          inquiryNo: "123",
          clientUserName: "若非",
          clientUserSurname: "王",
          clientUserMobile: "15318724236",
          inqCategory: "CONTRACT_SERVICE",
          createTime: "2021-05-24 23:45:56",
          serUpdateTime: "2021-05-24 23:55:43",
          serClientUserName: "Green",
          serClientUserSurname: "Olive",
          status: "INQUIRY",
          orderExpertClientUserName: "Green2",
          orderExpertClientUserSurname: "Olive",
          startTime: "2021-05-24 23:45:56",
          endTime: "2021-05-24 23:55:43",
          dateTime: "2021-05-24 23:55:43",
          price: "100",
        },
        {
          id: 2,
          inquiryNo: "1234",
          clientUserName: "Olive",
          clientUserSurname: "Green",
          clientUserMobile: "15318724237",
          inqCategory: "LEGAL_GUIDANCE",
          createTime: "2021-05-24 23:45:56",
          serUpdateTime: "2021-05-24 23:55:43",
          serClientUserName: "若非",
          serClientUserSurname: "王",
          status: "REFUSED",
          orderExpertClientUserName: "Green2",
          orderExpertClientUserSurname: "Olive",
          startTime: "2021-05-24 23:45:56",
          endTime: "2021-05-24 23:55:43",
          dateTime: "2021-05-24 23:55:43",
          price: "100",
        },
        {
          id: 3,
          inquiryNo: "12345",
          clientUserName: "Jane",
          clientUserSurname: "Jimmy",
          clientUserMobile: "15318724237",
          inqCategory: "OTHER",
          createTime: "2021-05-24 23:45:56",
          serUpdateTime: "2021-05-24 23:55:43",
          serClientUserName: "Green",
          serClientUserSurname: "Olive",
          status: "REFUSED",
          orderExpertClientUserName: "Green2",
          orderExpertClientUserSurname: "Olive",
          startTime: "2021-05-24 23:45:56",
          endTime: "2021-05-24 23:55:43",
          dateTime: "2021-05-24 23:55:43",
          price: "100",
        },
      ],
      pageInfo: { totalResults: 100, pages: 10 },
      pageNumber: 1,
    },
  };
};

const getStatus = (ctx) => {
  ctx.body = {
    code: "0",
    msg: "success",
    title: "success",
    data: [
      {
        code: "INQUIRY",
        value: "发起咨询",
      },
      {
        code: "ASSISTANT",
        value: "助理跟进",
      },
      {
        code: "LAWYER",
        value: "匹配律师",
      },
      {
        code: "TIME",
        value: "约定时间",
      },
      {
        code: "UNPAID",
        value: "待支付",
      },
      {
        code: "PAID",
        value: "已支付",
      },
      {
        code: "CONFIRM",
        value: "完成咨询",
      },
      {
        code: "COMPLETE",
        value: "完成评价",
      },
      {
        code: "REFUNDING",
        value: "退款中",
      },
      {
        code: "REFUNDED",
        value: "已退款",
      },
      {
        code: "REFUSED",
        value: "已拒绝退款",
      },
      {
        code: "CLOSE",
        value: "战败",
      },
    ],
  };
};

const getChatWayList = (ctx) => {
  ctx.body = {
    code: "0",
    msg: "success",
    title: "success",
    data: [
      {
        code: "PHONE",
        value: "电话",
      },
      {
        code: "WECHAT",
        value: "微信",
      },
      {
        code: "EMAIL",
        value: "邮件",
      },
      {
        code: "SMS",
        value: "短信",
      },
      {
        code: "OTHER",
        value: "其他",
      },
    ],
  };
};

const getChatResultList = (ctx) => {
  ctx.body = {
    code: "0",
    msg: "success",
    title: "success",
    data: [
      {
        code: "NORMAL",
        value: "正常跟进",
      },
      {
        code: "MATCH_LAWYER",
        value: "匹配律师",
      },
      {
        code: "SUB_TIME",
        value: "约定时间",
      },
      {
        code: "MAKE_PRICE",
        value: "定价",
      },
      {
        code: "FAIL",
        value: "失败",
      },
    ],
  };
};

const getInqCategoryList = (ctx) => {
  ctx.body = {
    code: "0",
    msg: "success",
    title: "success",
    data: [
      {
        code: "CONTRACT_SERVICE",
        value: "合同服务",
      },
      {
        code: "LEGAL_GUIDANCE",
        value: "法律指导",
      },
      {
        code: "OTHER",
        value: "其他",
      },
    ],
  };
};

const getDetailsData = (ctx) => {
  ctx.body = {
    code: "0",
    msg: "success",
    title: "success",
    data: {
      inquiryNo: "INQ2020101916030759490001",
      clientUserName: "CHEN",
      clientUserSurname: "LI",
      clientUserCountryNum: "897878",
      clientUserMobile: "13012301232",
      inqCategory: "LEGAL_GUIDANCE",
      introduction: "七七八八五五六六",
      status: "INQUIRY",
      orderExpertClientUserName: "wang",
      orderExpertClientUserSurname: "chao",
      orderExpertUserId: "E87754215",
      businessArea: {
        code: "LAW",
        value: "法律咨询",
      },
      iccpExpertPriceLawList: [
        {
          id: 1,
          expertPriceId: 118,
          countryCode: "CHN",
          countryName: "China",
          countryCname: "中国", // 服务国家 - 取第一条就行
          price: 1234.0,
          createId: "CRM000031",
          createTime: "2021-05-21 11:12:30",
          updateId: "",
          updateTime: "2021-05-21 11:12:30",
          isValid: 1,
        },
      ],
      expertCountryInfo: {
        continentId: 1,
        name: "China",
        lowerName: "people's republic of china",
        countryCode: "CHN",
        fullName: "People's Republic of China",
        cname: "中国",
        fullCname: "中华人民共和国",
      },
      iccpInquiryLawRecordList: [
        {
          id: 1,
          createIdType: "customerService", // 假设该字段表示用户类型
          content: "12345678", // 操作说明
          inquiryNo: "INQ2020101916030759490001",
          chatWay: "WECHAT", // 沟通方式
          chatResult: "123", // 记录
          imageUrl: [
            "https://lxiccp-test.oss-cn-beijing.aliyuncs.com/iccp/2021-05-31/1622451625566/ed9efdc4638f47ef8bc23cab432eb25f.jpg",
            "https://lxiccp-test.oss-cn-beijing.aliyuncs.com/iccp/2021-05-31/1622451663619/e3140333604043c0b3be72966ddabcda.jpg",
            "https://lxiccp-test.oss-cn-beijing.aliyuncs.com/iccp/2021-05-31/1622451682907/834a2282b3ed4ef98e70128c81a4e234.jpg",
            "https://lxiccp-test.oss-cn-beijing.aliyuncs.com/iccp/2021-05-31/1622451698172/db954dd5026a4514a0f92c3942acd2a6.jpg",
            "https://lxiccp-test.oss-cn-beijing.aliyuncs.com/iccp/2021-05-31/1622451714809/3ea961c9fc394360868336b8822728fc.jpg",
          ], // 上传的图片
          remark: "1234", // 备注
          createTime: "2021-05-27 16:21:52",
          createId: "admin", // 操作人
          updateTime: "2021-05-27 16:22:23", // 操作时间
          updateId: "admin",
          isValid: 1,
          operUserInfo: {
            clientUserEmail: "",
            countryCode: "",
            countryInfo: {
              cname: "",
              continentId: 1,
              countryCode: "",
              fullCname: "",
              fullName: "",
              lowerName: "",
              name: "",
            },
            name: "王若非",
            surname: "",
            userId: "CCCwangruofei",
          },
        },
        {
          id: 2,
          createIdType: "customerService", // 假设该字段表示用户类型
          content: "12345678",
          inquiryNo: "INQ2020101916030759490001",
          chatWay: "EMAIL",
          chatResult: "123",
          imageUrl: null,
          remark: "1234",
          createTime: "2021-05-27 16:21:52",
          createId: "admin",
          updateTime: "2021-05-27 16:22:23",
          updateId: "admin",
          isValid: 1,
          operUserInfo: {
            clientUserEmail: "",
            countryCode: "",
            countryInfo: {
              cname: "",
              continentId: 1,
              countryCode: "",
              fullCname: "",
              fullName: "",
              lowerName: "",
              name: "",
            },
            name: "Green1",
            surname: "Olive",
            userId: "CCCwangruofei1",
          },
        },
        {
          id: 3,
          createIdType: "user", // 假设该字段表示用户类型
          content: "12345678",
          inquiryNo: "INQ2020101916030759490001",
          chatWay: "PHONE",
          chatResult: "123",
          imageUrl: [],
          remark: "1234",
          createTime: "2021-05-27 16:21:52",
          createId: "admin",
          updateTime: "2021-05-27 16:22:23",
          updateId: "admin",
          isValid: 1,
          operUserInfo: {
            clientUserEmail: "",
            countryCode: "",
            countryInfo: {
              cname: "",
              continentId: 1,
              countryCode: "",
              fullCname: "",
              fullName: "",
              lowerName: "",
              name: "",
            },
            name: "Green",
            surname: "Olive1",
            userId: "CCCwangruofei2",
          },
        },
      ],
    },
  };
};

const legalRecordGet = (ctx) => {
  ctx.body = {
    code: "0",
    data: {
      chatResult: "", // 跟进结果：normal正常跟进，match_lawyer匹配律师，sub_time约定时间，make_price定价，fail失败
      chatWay: "", // 沟通方式：phone电话，wechat微信，email邮件，sms短信，other其他
      content: "", // 跟进记录内容
      imageUrl: "", // 上传图片 url
      inquiryNo: "", // 咨询id
      remark: JSON.stringify({
        refundApplyReasons: "这是用户申请退款的原因哦",
      }), // 备注，匹配的律师id、时间选择器的时间、定价等
    },
    errorDetail: {},
    errorInfo: "",
    msg: "success",
    title: "success",
  };
};

const saveFirstServicer = (ctx) => {
  ctx.body = {
    code: "0",
    data: {},
    errorDetail: {},
    errorInfo: "",
    msg: "success",
    title: "success",
  };
};

module.exports = {
  getData,
  getStatus,
  getChatWayList,
  getChatResultList,
  getInqCategoryList,
  getDetailsData,
  legalRecordGet,
  saveFirstServicer,
};
