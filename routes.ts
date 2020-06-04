import { Router } from 'https://deno.land/x/oak/mod.ts';

import users from './api/users/users.controller.ts';
import helloDeno from './api/index.ts';

const router = new Router();

router.get('/', helloDeno);

router
  .post('/users', users.createUser)
  .get('/users', users.getUsers)
  .get('/users/:id', users.getUser)
  // .put('/users/:id', users.updateU);
  .delete('/users/:id', users.deleteUser);


export default router;