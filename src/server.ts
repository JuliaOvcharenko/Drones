import express from "express"
import type { Express } from "express"
import { ProductRouter } from "./product/product.router"
import { CategoryRouter } from "./category/category.router"
import { UserRouter } from "./user/user.router"
import { OrderRouter } from "./order/order.router"

import cors from 'cors'; 
import path from "path/win32"

const HOST = "127.0.0.1"
const PORT = 8000
const app = express()


app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true 
}));

app.use(express.json())
app.use("/products", ProductRouter);
app.use("/categories", CategoryRouter);
app.use("/users", UserRouter);
app.use("/orders", OrderRouter);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}`)
})