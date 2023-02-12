import Router from 'koa-router';

const router = new Router();

router.get('/',  async (ctx: any, next: any) => {
  ctx.body = { message: 'There\'s no place like home.' }

  await next();
});

router.post('/',  async (ctx: any, next: any) => {
  const payload: string = ctx.request.body;

  ctx.body = { message: payload }

  await next();
});

export default router;
