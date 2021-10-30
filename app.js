const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const apiRoutes = require("./backend/modules/routes/routes");

app.use(cors());

const url =
  "mongodb+srv://nkovalexceed:Th2UK3ntC@cluster0.1pxcu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
mongoose.connection.on("open", function (err, doc) {
  console.log("MongoDB connected");
});

app.use(bodyParser.json());
app.use("/", apiRoutes);

app.listen(8080, () => {
  console.log("Starting...");
});
