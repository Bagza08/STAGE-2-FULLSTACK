import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer")) {
    return res.status(401).json({
      error: "Unauthorized",
    });
  }

  const token = authorizationHeader.split(" ")[1];

  try {
    const loginSeasson = jwt.verify(token, "bagzaganteng");
    res.locals.loginSeasson = loginSeasson;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

export default authenticate;
