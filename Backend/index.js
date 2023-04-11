import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "Minal",
  password: "Minal@7284559",
  database: "test",
});

app.get("/", (req, res) => {
  res.json("Hello this is the backend");
});

app.get("/books", (req, res) => {
  db.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.errno);
      return;
    }

    console.log("connected as id " + db.threadId);
  });
  const q = "SELECT * FROM Books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8808, () => {
  console.log("Connected to backend!");
});
