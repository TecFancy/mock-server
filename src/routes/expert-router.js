const Router = require("koa-router");
const expert = require("../api/expert");

const router = new Router();

router.prefix("/api/mock");

router.get("/expert/getSingleExpertInfo", expert.getSingleExpertInfo);
router.get("/expert/settlementMethodEmun", expert.settlementMethodEmun);
router.post("/expert/reportOrderList", expert.reportOrderList);
router.get("/expert/getOrderStatusList", expert.getOrderStatusList);
router.post("/expert/getOrderData", expert.getOrderData);
router.post("/expert/saveOrderSettlementData", expert.saveOrderSettlementData);
router.post(
  "/expert/saveSettlementVoucherData",
  expert.saveSettlementVoucherData
);
router.post("/expert/reportOrderRecords", expert.reportOrderRecords);

module.exports = router;
