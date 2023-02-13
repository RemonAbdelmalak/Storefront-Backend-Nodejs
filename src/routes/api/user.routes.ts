import { Router } from "express";
import * as controllers from "../../controllers/user.controller";
const routes = Router();

routes.post("/", controllers.create);
routes.get("/", controllers.index);
routes
  .route("/:id")
  .get(controllers.show)

export default routes;
