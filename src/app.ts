import express from "express"
import cors from "cors"
import routes from "./routes"

const app = express()

app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: [""]
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ALL ROUTES
app.use("/api", routes)

export default app