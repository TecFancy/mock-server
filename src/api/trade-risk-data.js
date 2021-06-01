module.exports = (ctx) => {
  ctx.body = {
    code: "0",
    msg: "success",
    title: "success",
    data: {
      items: [
        {
          id: 1,
          area: "美国",
          continent: "加利福尼亚洲",
          risk: "2",
          createTime: "2021-05-24 23:45:13",
          updateTime: "2021-05-24 23:55:32",
        },
        {
          id: 2,
          area: "美国",
          continent: "阿尔尼亚州",
          risk: "2",
          createTime: "2021-05-23 23:45:13",
          updateTime: "2021-05-23 23:55:32",
        },
      ],
      pageInfo: { totalResults: 100, pages: 10 },
      pageNumber: 1,
    },
  };
};
