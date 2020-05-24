import { Application } from "https://deno.land/x/oak/mod.ts";
import { APP_HOST, APP_PORT } from "./config.ts";
import router from "./routes.ts";
import errorHandler from "./middlewares/errorHandler.ts";
import _404 from "./middlewares/404.ts";

const app = new Application();

app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(_404);

console.log(`Listening on port:${APP_HOST + APP_PORT}...`);

app.listen(`${APP_HOST}:${APP_PORT}`);