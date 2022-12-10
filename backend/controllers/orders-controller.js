const connection = require("../config");

//this function will return detail of all orders
const getAllOrders = async (req, res, next) => {
    const sql = "select * from orders";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.status(201).send(result);
    });
}

//this function will return a book detail with given id
const getById = async (req, res, next) => {
    const id = req.params.id;
    const sql = `select * from orders where id=${id}`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.status(201).send(result);
    });
}

//this function will add a order detail
const addOrder = async (req, res, next) => {
    // req.body will come from client with all data
    const {id, bookname, contact, address } = req.body;
    const sql = `INSERT INTO orders  VALUES ('${id}', '${bookname}', '${contact}', '${address}')`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.status(201).send(result);
    });
   
}


//this function will delete a order detail with given id
const deleteOrder = async (req, res, next) => {
    const id = req.params.id;
    const sql = `DELETE FROM orders WHERE id = ${id}`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.status(201).send(result);
    });
}

//exporting all methods so that we can use this in another file
exports.getAllOrders = getAllOrders;
exports.addOrder = addOrder;
exports.getById = getById;
exports.deleteOrder = deleteOrder;