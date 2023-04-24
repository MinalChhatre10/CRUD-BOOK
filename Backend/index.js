import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "Minal",
  password: "Minal@7284559",
  database: "test",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello this is the backend");
});

app.get("/books", (req, res) => {
  // db.connect(function (err) {
  //   if (err) {
  //     console.error("error connecting: " + err.errno);
  //     return;
  //   }

  //   console.log("connected as id " + db.threadId);
  // });
  const q = "SELECT * FROM Books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO Books(`title`,`desc`,`price`,`cover`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been created sucessfully");
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id =?";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been deleted sucessfully");
  });
});

app.listen(8800, () => {
  console.log("Connected to backend!");
});
