import { createInvoice } from "@controllers/invoices.controller"
import express from "express"

const router = express()

router.get("/invoice", createInvoice)

export { router }

