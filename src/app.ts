import express, { Request, Response } from "express"
import cors from "cors"

const app = express()
const port = process.env.PORT || 8000

app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: [""]
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



export default app