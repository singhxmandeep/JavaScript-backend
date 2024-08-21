import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

// Get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "joke 1", content: "joke is 1" },
    { id: 2, title: "joke 2", content: "joke is 2" },
    { id: 3, title: "joke 3", content: "joke is 3" },
    { id: 4, title: "joke 4", content: "joke is 4" },
    { id: 5, title: "joke 5", content: "joke is 5" },
  ];
  res.send(jokes)
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
