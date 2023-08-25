import { Request, Response } from "express";
import AuthServices from "../services/AuthServices";

class AuthController {
  register(req: Request, res: Response) {
    AuthServices.register(req, res);
  }
  login(req: Request, res: Response) {
    AuthServices.login(req, res);
  }
  check(req: Request, res: Response) {
    AuthServices.check(req, res);
  }
  logout(req: Request, res: Response) {
    AuthServices.logout(req, res);
  }
}

export default new AuthController();
