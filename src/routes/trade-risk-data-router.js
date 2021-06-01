const Router = require("koa-router");
const tradeRiskData = require("../api/trade-risk-data");

const router = new Router();

router.prefix("/api/mock");

router.get("/tradeRiskData", tradeRiskData);

module.exports = router;
