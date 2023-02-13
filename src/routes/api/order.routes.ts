import { Router } from "express";
import * as controllers from "../../controllers/order.controller";
const routes = Router();

routes.post("/", controllers.create);

routes
  .route("/:id")
  .get(controllers.show)

export default routes;
