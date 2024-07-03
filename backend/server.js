const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv')
const authRoutes = require("./routes/auth.routes.js");
const { connectToMongoDb } = require("./db/connectMongo.js");
const path = require('path')
const cors = require('cors')
const dirname = path.resolve();


dotenv.config()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(dirname, "/..", "/frontend/dist")));


app.use("/api/auth", authRoutes);


app.get("*", (req, res) => {
    res.sendFile(path.join(dirname, "/..", "/frontend/dist/index.html"));
});

app.listen(port, () => {
    connectToMongoDb();
    console.log(`Example app listening on port ${port}`)
})