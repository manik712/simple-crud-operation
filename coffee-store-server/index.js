const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// async operation
app.get("/", (req, res) => {
  res.send("Coffee making server is available");
});

// listen
app.listen(port, () => {
  console.log(`Coffee Server is running on port ${port}`);
});
