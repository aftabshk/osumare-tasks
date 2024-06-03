const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(`Recieved a request ${req.method} ${req.path}`);
  next();
});

app.use(express.json());

const tasks = [
  {
    id: 100,
    title: "Create a user",
    description: "Create user in the application",
  },
  {
    id: 101,
    title: "Boot strap application",
    description: "Run the application",
  },
];

app.get("/tasks", (req, response) => {
  response.send(tasks);
});

app.post("/tasks", (req, response) => {
  const task = req.body;
  tasks.push(task);

  response.status(200).send();
});

app.listen(8080, () => {
  console.log(`Server started on port 8080`);
});
