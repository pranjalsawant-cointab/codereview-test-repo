const express = require("express")
const app = express()

app.use(express.json())

let users = []

app.post("/user", (req, res) => {
  users.push(req.body)
  res.send("User added")
})

app.get("/user/:id", (req, res) => {
  const user = users[req.params.id]
  res.json(user)
})

app.listen(3000)