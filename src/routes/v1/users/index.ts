import express from "express";
import { getUser } from "@controllers/users.controller";

const router = express()

// TODO: add authentication middleware
//      router.get("/users", authJWT, getUser)

router.get("/users", getUser)
// router.post("/users", getUser)
// router.put("/users/:id", getUser)
// router.delete("/users:id", getUser)

export { router }