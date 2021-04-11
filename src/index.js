const path = require("path");
const Koa = require("koa");
const koaBody = require("koa-body");
const json = require("koa-json");
const cors = require("@koa/cors");
const helmet = require("koa-helmet");
const statics = require("koa-static");
const router = require("./routes");

const app = new Koa();

app
  .use(statics(path.join(__dirname, "../public")))
  .use(helmet())
  .use(cors())
  .use(koaBody())
  .use(json({ pretty: false, param: "pretty" }))
  .use(router());

app.listen(3000);
