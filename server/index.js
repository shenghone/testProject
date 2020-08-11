import express from "express";
import { config } from "dotenv";
config();
const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("index page");
});

app.listen(PORT, () => {
  console.log(`App is listening on PORT: ${PORT}`);
});
