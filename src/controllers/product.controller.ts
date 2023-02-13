import { Request, Response, NextFunction } from "express";
import Productmodel from "../models/products.model";
import  jwt  from "jsonwebtoken";

const productModel = new Productmodel();

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
    const product = await productModel.create(req.body);
    res.json({
    status: "success",
    data: {...product},
    message: "product retrieved successfully",
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
    const product = await productModel.show(req.params.id as unknown as string);
    res.json({
      status: "success",
      data: product,
      message: "product retrieved successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await productModel.index();
    res.json({
      status: "success",
      data: product,
      message: "product retrieved successfully",
    });
  } catch (err) {
    next(err);
  }
};

