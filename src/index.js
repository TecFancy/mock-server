const Koa = require("koa");
const Router = require("koa-router");
const koaBody = require("koa-body");
const json = require("koa-json");
const cors = require("@koa/cors");

const app = new Koa();
const router = new Router();

router.prefix("/api");

router.get("/", (ctx) => {
  ctx.body = ctx.request.query;
});

router.get("/async", async (ctx) => {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello world 2s later.");
    }, 2000);
  });
  ctx.body = result;
});

app
  .use(cors())
  .use(koaBody())
  .use(json({ pretty: false, param: "pretty" }))
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
