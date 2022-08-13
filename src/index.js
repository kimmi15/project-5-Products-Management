// ==+==+==+==+==+==+==+==+==+==[Requirements]==+==+==+==+==+==+==+==+==+==
const express = require("express");
const bodyParser = require("body-parser");
const route = require("./route/routes");
const mongoose = require("mongoose");
const app = express();
const multer = require('multer')

app.use(bodyParser.json());
app.use(multer().any());
app.use(bodyParser.urlencoded({extended : true}));

// ==+==+==+==+==+==+==+==+==+==[Connect DataBase]==+==+==+==+==+==+==+==+==+==
mongoose
  .connect(
    "mongodb+srv://Shrikant:shreyushri@cluster0.xjishte.mongodb.net/group19",
  
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err.message));


app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Port running on " + (process.env.PORT || 3000));
});
