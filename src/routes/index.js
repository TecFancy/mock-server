const combineRoutes = require("koa-combine-routers");

const aRoutes = require("./a-router");
const bRoutes = require("./b-router");
const tradeRiskDataRouter = require("./trade-risk-data-router");
const legalAdviceRouter = require("./legal-advice-router");

module.exports = combineRoutes(
  aRoutes,
  bRoutes,
  tradeRiskDataRouter,
  legalAdviceRouter
);
