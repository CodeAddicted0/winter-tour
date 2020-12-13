const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const publicpath = path.join(__dirname, "../public");

const index = fs.readFileSync(path.join(__dirname, "../public/index.html"));
const about = fs.readFileSync(path.join(__dirname, "../public/about.html"));
const news = fs.readFileSync(path.join(__dirname, "../public/news.html"));
const contact = fs.readFileSync(path.join(__dirname, "../public/contact.html"));

app.use(express.static(publicpath));

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(index);
});
app.get("/news", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(news);
});
app.get("/about", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(about);
});
app.get("/contact", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(contact);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
