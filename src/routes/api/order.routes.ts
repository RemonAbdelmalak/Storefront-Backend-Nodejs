import { Router } from "express";
import * as controllers from "../../controllers/order.controller";
const routes = Router();

routes.post("/create", controllers.create);
routes.post("/addorderproduct/:id", controllers.addProductToOrder);

routes
  .route("/:id")
  .get(controllers.show)

export default routes;
