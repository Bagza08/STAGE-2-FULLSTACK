import * as express from "express";
import { Request, Response } from "express";
import ThreadController from "../controllers/ThreadController";

const router = express.Router()

router.get("/", (req: Request, res: Response) =>{
    res.send("hallo wolrd v1")
} )

router.get("/threads", ThreadController.find)    
router.get("/thread/:id", ThreadController.findOne)    
router.post("/thread/create", ThreadController.create)
router.get("/thread/delete/:id", ThreadController.delete)
router.post("/thread/update/:id", ThreadController.update)



export default router