const fs = require("fs");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(cors());
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "client/build")));

app.get("/details/", (req, res) => {
  fs.readFile("details.json", (err, data) => {
    const details = JSON.parse(data);
    res.send(details);
  });
});
app.get("/loads/", (req, res) => {
  fs.readFile("load.json", (err, data) => {
    const load = JSON.parse(data);
    res.send(load);
  });
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Example app listening on port 8000!");
});

// push arry
// app.post("/", (req, res) => {
//   fs.readFile("products.json", (err, data) => {
//     const products = JSON.parse(data);
//     const title = req.body.title;
//     const quantity = req.body.quantity;
//     const image = req.body.image;
//     const price = req.body.price;
//     products.push({
//       id: products.length + 1,
//       image: image,
//       title: title,
//       quantity: quantity,
//       price: price,
//       items: 0,
//     });
//     fs.writeFile("products.json", JSON.stringify(products), (err) => {
//       res.send(products);
//     });
//   });
// });
// const { id } = useParams();

// delete
// app.delete("/:id", (req, res) => {
//   fs.readFile("products.json", (err, data) => {
//     const products = JSON.parse(data);
//     const todoId = +req.params.id;
//     const todoIndex = products.findIndex((todo) => todo.id === todoId);
//     products.splice(todoIndex, 1);
//     fs.writeFile("products.json", JSON.stringify(products), (err) => {
//       res.send("delete");
//     });
//   });
// });

// search
// app.get("/todos", (req, res) => {
//   console.log("QUERY:", req.query);
//   const search = req.query.search;
//   fs.readFile("products.json", (err, data) => {
//     const todos = JSON.parse(data);
//     if (search) {
//       const filteredTodos = todos.filter((todo) => todo.title.includes(search));
//       res.send(filteredTodos);
//     } else {
//       res.send(todos);
//     }
//   });
// });

// app.put("/todos/:id", (req, res) => {
//   fs.readFile("products.json", (err, data) => {
//     const todos = JSON.parse(data);
//     const todoId = +req.params.id;
//     const todoIndex = todos.findIndex((todo) => todo.id === todoId);
//     todos[todoIndex].title = req.body.title;
//     fs.writeFile("products.json", JSON.stringify(todos), (err) => {
//       res.send("YOU SUCCEED!!!");
//     });
//   });
// });
// const http = require("http");

// http
//   .createServer((request, response) => {
//     response.writeHead(200, { "Content-Type": "text/plain" });

//     response.end("Hello barak\n");
//   })
//   .listen(8000);

// console.log("Server running at http://127.0.0.1:8000/");
