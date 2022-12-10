const express = require("express");
const router = require("./routes/book-routes");
const orderRouter = require("./routes/order-routes");
const userRouter = require("./routes/user-routes");
//const userRouter = require("./routes/user-routes")
const cors = require("cors");
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

app.use("/books", router);   //localhost:5000/books
app.use("/orders", orderRouter); //localhost:5000/orders
app.use("/users", userRouter); //localhost:5000/users

app.listen(5000, () => {
    console.log("starting...");
});
