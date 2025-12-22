const express = require("express")
const app = express()

app.use(express.json())

let users = []

app.post("/user", (req, res) => {
  const user = req.body;
  if (!user || typeof user.name !== 'string' || user.name.trim() === '') {
    return res.status(400).json({ error: "Invalid user data" });
  }
  users.push(user);
  res.send("User added");
});

app.get("/user/:id", (req, res) => {
  const user = users[req.params.id]
  res.json(user)
})

app.listen(3000)
