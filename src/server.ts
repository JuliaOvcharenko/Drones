import express from "express"
import type { Express } from "express"

const HOST = "127.0.0.1"
const PORT = 8000
const app = express()

app.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}`)
})