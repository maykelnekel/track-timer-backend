import express from "express";
import {connectDatabase} from "./database"
import routes from "./routes";

connectDatabase()

const app = express()

app.use(express.json())

routes(app)

export default app