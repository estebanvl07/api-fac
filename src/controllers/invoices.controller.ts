import { Request, Response } from "express"

export const createInvoice = (req: Request, res: Response) => {
        res.send("creating invoice")
}