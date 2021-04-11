const Router = require("koa-router");
const combineRoutes = require("koa-combine-routers");

const aRoutes = require("./a-router");
const bRoutes = require("./b-router");

module.exports = combineRoutes(aRoutes, bRoutes);
