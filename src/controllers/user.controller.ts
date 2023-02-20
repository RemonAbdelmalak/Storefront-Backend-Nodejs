import { Request, Response, NextFunction } from "express";
import Usermodel from "../models/user.model";
import  jwt  from "jsonwebtoken";

const userModel = new Usermodel();

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userModel.create(req.body);
    var token = jwt.sign({user: user}, process.env.TOKEN_SECRET!);
    res.json({
    status: "success",
    Token: token,
    message: "User retrieved successfully",
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
    const user = await userModel.show(req.params.id as unknown as number);
    res.json({
      status: "success",
      data: user,
      message: "User retrieved successfully",
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
        jwt.verify(req.body.token , process.env.TOKEN_SECRET!)
      } catch (error) {
        res.status(401)
        res.json(`invalid token ${error}`)
        return
      }
  try {
    const users = await userModel.index();
    res.json({
      status: "success",
      data: users,
      message: "Users retrieved successfully",
    });
  } catch (err) {
    next(err);
  }
};

