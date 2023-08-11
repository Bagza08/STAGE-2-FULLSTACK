//import { Console } from "console";
import { AppDataSource } from "./data-source"
//import { Thread } from "./entities/Thread"
import * as express from "express";
import { Request, Response } from "express";
import router from "./route";

AppDataSource.initialize().then(async () => {

    // console.log("Inserting a new user into the database...")
    // const user = new Thread()
    // user.content = "Timber"  
    // user.image = "Saw"
    // user.id = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(Thread)
    // console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")


    const app = express()
    const port = 5000

    app.use(express.json())
    app.use("/api/v1/", router)

    app.get("/", (req:Request, res: Response) => {
        res.send("hallo world!")
    })

    app.listen(port, () => {
        console.log(`server is running on http://localhost:${port}`)
    })

    
}).catch(error => console.log(error))
