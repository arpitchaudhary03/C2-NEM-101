const express = require('express');
const connection = require('./db');
const cors = require('cors');
const notesRouter = require('./routes/notes.routes');
const userRouter = require('./routes/user.routes');
const PORT = process.env.PORT || 8080;
const app = express();


require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/auth", userRouter);
app.use("/user", notesRouter);

app.get("/", (req, res) => {
    res.send("App is working");
})






app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connected to Atlas");
    } catch (e) {
        console.log(e);
    }
    console.log(`Server started on ${PORT}`);
});

