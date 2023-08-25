import { User } from "./../entities/User";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { registerSchema, loginSchema } from "../utils/auth";

class AuthServices {
  private readonly authRepository: Repository<User> =
    AppDataSource.getRepository(User);

  //register
  async register(req: Request, res: Response) {
    try {
      const data = req.body;
      const { error, value } = registerSchema.validate(data);
      if (error) {
        return res.status(400).json({ error: error });
      }
      const password = await bcrypt.hash(value.password, 10);
      const ckemail = await this.authRepository.count({
        where: {
          email: value.email,
          username: value.username,
        },
      });
      if (ckemail > 0) {
        return res.status(400).json("email/password salah");
      }
      const user = this.authRepository.create({
        full_name: value.full_name,
        username: value.username,
        email: value.email,
        password: password,
      });
      const setAccount = await this.authRepository.save(user);
      return res.status(200).json(setAccount);
    } catch (error) {
      return res.status(500).json("terjadi kesalahan pada server");
    }
  }

  //login
  async login(req: Request, res: Response) {
    try {
      const data = req.body;
      const { error, value } = loginSchema.validate(data);
      if (error) {
        return res.status(400).json({ error: error });
      }

      const ckemail = await this.authRepository.findOne({
        where: {
          email: value.email,
        },
        select: ["id", "full_name", "username", "email", "password"],
      });

      if (!ckemail) {
        return res.status(400).json("email/password salah");
      }
      const isPasswordValid = await bcrypt.compare(
        value.password,
        ckemail.password
      );
      if (!isPasswordValid) {
        return res.status(400).json("email/password salah");
      }
      const user = this.authRepository.create({
        id: ckemail.id,
        email: ckemail.email,
        password: ckemail.password,
      });
      const token = jwt.sign({ user }, "bagzaganteng", {
        expiresIn: "1hr",
      });

      return res.status(200).json({
        user,
        token,
      });
    } catch (error) {
      return res.status(500).json("server error");
    }
  }

  //check
  async check(req: Request, res: Response) {
    try {
      const loginSeasson = res.locals.loginSeasson;
      const user = await this.authRepository.findOne({
        where: {
          id: loginSeasson.user.id,
        },
        select: ["id", "full_name", "username", "email", "password"],
      });
      return res.status(200).json({
        user,
        message: "token is valid",
      });
    } catch (error) {
      return res.status(500).json("server error");
    }
  }

  //logout
  async logout(req: Request, res: Response) {
    try {
      return res.status(200).json({ messege: "Logout Berhasil!!" });
    } catch (error) {
      console.log("Log out gagal", error);
      return res.status(500).json("server terjadi kesalahan");
    }
  }
}

export default new AuthServices();
