const exp = require('express');
const sqlite3 = require('sqlite3');
const app = express();
const db = new sqlite3.Database('/db/database.db');
const sql ='SELECT todo FROM todos';
const sql_insert = 'INSERT INTO todos (text) VALUES (?);';
const sql_delete = 'DELETE FROM todos WHERE text=?';

app.use(express.static('..//frontend/public'));

app.get("/api/db/todos", (req, res) => {
    db.all(sql, [], (err, rows) => {
        if(err) {
            throw err;
        } else {
            res.status(200);
            res.send(rows);
        }
    });
});

app.get("/api/db/insertTodo/:name", (req, res) => {
    db.run(sql_insert, [req.params]);
    res.status(200);
    res.send("")
});

app.get("/api/db/deleteTodo/:name", (req, res) => {
    db.run(sql_delete, [req.params]);
});

app.listen(3000, () => {
    console.log("App listens on Port 3000!");
});