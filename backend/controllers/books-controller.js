const connection = require("../config");

//this method return all books in format of object name books
const getAllBooks = async (req, res, next) => {
    const sql = "select * from books";
    connection.query(sql, (err, books) => {
        if (err) throw err;
        res.status(201).json({books});
    });
}

//this function will return a book detail 
const getById = async (req, res, next) => {
    const id = req.params.id;
    const sql = `select * from books where id=${id}`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.status(201).send(result);
    });
}


// this function wil add a book detail in the books table
const addBook = async (req, res, next) => {
    // req.body will come from client with all data
    const {id, name, author, description, price, available, image } = req.body;
    const sql = `INSERT INTO books  VALUES ('${id}', '${name}', '${author}', '${description}', '${price}', '${available}', '${image}')`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.status(201).send(result);
    });
}

//this method will update a book detail with given id
//assuming that client is sending detail all field
const updateBook = async (req, res, next) => {
    const _id = req.params.id;
    const { id, name, author, description, price, available, image } = req.body;
    const sql = `UPDATE books SET id = ${_id},name='${name}', 
    author='${author}', description='${description}', 
    price='${price}',available=${available},image='${image}'  WHERE id = ${_id}`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.status(201).send(result);
    });

}

//delete a book with given id 
const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    const sql = `DELETE FROM books WHERE id = ${id}`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.status(201).send(result);
    });
}

// exporting all method so that we can use this 
//in anothe file

exports.getAllBooks = getAllBooks;
exports.getById = getById;
exports.addBook = addBook;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;