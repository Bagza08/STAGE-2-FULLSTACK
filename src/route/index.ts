import * as express from "express";
import { Request, Response } from "express";
import ThreadController from "../controllers/ThreadController";
import AuthController from "../controllers/AuthController";
import authenticate from "../middlewares/AuthMiddleware";
import { upload } from "../middlewares/uploadfile";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("hallo wolrd v1");
});

router.get("/threads", authenticate, ThreadController.find);
router.get("/thread/:id", ThreadController.findOne);
router.post(
  "/thread/create",
  authenticate,
  upload("image"),
  ThreadController.create
);
router.get("/thread/delete/:id", ThreadController.delete);
router.post("/thread/update/:id", ThreadController.update);

//auth
router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);
router.get("/check", authenticate, AuthController.check);
router.get("/auth/logout", AuthController.logout);

export default router;
