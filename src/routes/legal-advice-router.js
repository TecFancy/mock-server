const Router = require("koa-router");
const legalAdvice = require("../api/legal-advice");

const router = new Router();

router.prefix("/api/mock");

router.get("/legalAdviceData", legalAdvice.getData);
router.get("/legalAdvice/getStatus", legalAdvice.getStatus);
router.get("/legalAdvice/getChatWayList", legalAdvice.getChatWayList);
router.get("/legalAdvice/getChatResultList", legalAdvice.getChatResultList);
router.get("/legalAdvice/getInqCategoryList", legalAdvice.getInqCategoryList);
router.get("/legalAdvice/getDetailsData", legalAdvice.getDetailsData);
router.get(
  "/sc/bus/system/law/inquiry/saveFirstServicer",
  legalAdvice.saveFirstServicer
);

module.exports = router;
