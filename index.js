const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Set up a simple route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "que_1.html"));
});

app.get("/que_1/:answer", (req, res) => {
  console.warn(req.params.answer);
});

app.get("/que_2/:answer", (req, res) => {
  console.warn(req.params.answer);
});

app.get("/que_3/:answer", (req, res) => {
  console.warn(req.params.answer);
});

app.get("/que_4/:answer", (req, res) => {
  console.warn(req.params.answer);
});

app.get("/que_4_message/:answer", (req, res) => {
  console.warn(req.params.answer);
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
