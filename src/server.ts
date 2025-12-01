import express from "express"
import type { Express } from "express"
import { ProductRouter } from "./product/product.router"


const HOST = "127.0.0.1"
const PORT = 8000
const app = express()
app.use(express.json())
app.use("/products", ProductRouter);


app.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}`)
})


