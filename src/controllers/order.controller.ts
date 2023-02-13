import { Request, Response, NextFunction } from "express";
import Ordermodel from "../models/order.model";
import  jwt  from "jsonwebtoken";

const ordermodel = new Ordermodel();

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
        jwt.verify(req.body.token , process.env.TOKEN_SECRET!)
      } catch (error) {
        res.status(401)
        res.json(`invalid token ${error}`)
        return
      }
  try {
    const order = await ordermodel.create(req.body);
    res.json({
    status: "success",
    Token: {order},
    message: "Order created successfully",
  });
  } catch (error) {
    next(error);
  }
};

export const show = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
        jwt.verify(req.body.token , process.env.TOKEN_SECRET!)
      } catch (error) {
        res.status(401)
        res.json(`invalid token ${error}`)
        return
      }
  try {
    const product = await ordermodel.show(req.params.id as unknown as string);
    res.json({
      status: "success",
      data: product,
      message: "product retrieved successfully",
    });
  } catch (err) {
    next(err);
  }
};

