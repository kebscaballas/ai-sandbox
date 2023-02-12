import dotenv from 'dotenv';
import json from 'koa-json';
import Koa from 'koa';
import logger from 'koa-logger';
import router from './routes';

dotenv.config();

const app = new Koa();
const { PORT } = process.env;

app.use(json());
app.use(logger());
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}.`)
});
