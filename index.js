require("dotenv").config();
const express = require('express')

const app = express();
const mongoose = require("mongoose");
var cors = require('cors');
let PORT = process.env.PORT;
// use it before all route definitions
app.use(cors({origin: PORT || 3001}));
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database!"));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello server is running").end();
});

const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);


app.listen(PORT || 3001, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
