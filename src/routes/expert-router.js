const Router = require("koa-router");
const expert = require("../api/expert");

const router = new Router();

router.prefix("/api/mock");

router.get("/expert/getSingleExpertInfo", expert.getSingleExpertInfo);
router.get("/expert/settlementMethodEmun", expert.settlementMethodEmun);
router.post("/expert/reportOrderList", expert.reportOrderList);

module.exports = router;
