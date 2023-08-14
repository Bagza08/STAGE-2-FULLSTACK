import { Request, Response } from "express";
import AuthServices from "../services/AuthServices";

class AuthController {
  register(req: Request, res: Response) {
    AuthServices.register(req, res);
  }
  login(req: Request, res: Response) {
    AuthServices.login(req, res);
  }
}

export default new AuthController();
