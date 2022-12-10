const connection = require("../config");

//this function will return all users detail
const getAllUsers = async (req, res, next) => {
    const sql = "select * from users";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.status(201).send(result);
    });
}

//this function will return a book with given id
const getById = async (req, res, next) => {
    const id = req.params.id;
    const sql = `select * from users where id=${id}`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.status(201).send(result);
    });
}

//this function will add user detail
const addUser = async (req, res, next) => {
    // req.body will come from client with all data
    const {id,username, email, password, image } = req.body;
    const sql = `INSERT INTO users  VALUES ('${id}', '${username}', '${email}', '${password}', '${image}')`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.status(201).send(result);
    });
}


//this function will update a user detail by given id
//assuming that client is sending all field
const updateUser = async (req, res, next) => {
    const _id = req.params.id;
    const {id, username, email, password, image } = req.body;
    const sql = `UPDATE users SET id = ${id},username='${username}', 
    email='${email}', password='${password}', 
    image='${image}'  WHERE id = ${_id}`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.status(201).send(result);
    });
}

//this function will delete a user detail by given id
const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    const sql = `DELETE FROM users WHERE id = ${id}`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.status(201).send(result);
    });

}

//exporting all method so that we can use this method in another file
exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;