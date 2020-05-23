import { Router } from "https://deno.land/x/oak/mod.ts";

import users from "./api/users/users.controller.ts";

const router = new Router();

router
  .get("/", users.getUsers)
  .post("/users", users.createUser)

export default router;