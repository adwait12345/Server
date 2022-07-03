require("dotenv").config();
const express = require("express");
const cors = require("cors")
app.use(cors())
const app = express();
const mongoose = require("mongoose");

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

let PORT = process.env.PORT;
app.listen(PORT || 5000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
