import express, { Request, Response } from "express"

const app = express()
const port = process.env.PORT || 8000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
    console.log(`server reuning on port, ${port} 🚀`)
})