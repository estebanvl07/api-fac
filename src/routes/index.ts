import express from "express"
import { router as userRoutes } from "./v1/users"
import { router as invoceRoutes } from "./v1/invoice"

const router = express()
const version = "/v1"

// route structure -> /api/users/...etc
// ALL ROUTES

router.use(version, userRoutes)
router.use(version, invoceRoutes)

export default router