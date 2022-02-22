import express from "express"


import "./model/index.js"


const app = express()


app.get("/", (req, res) => {
  res.status(200).json({"msg": "hello"})
})


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})