const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const userRoutes = require("./routes/userRoutes");
const carRoutes = require("./routes/carRoutes");
const cors = require("cors");

app.use(cors());
dbConnect();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/cars", carRoutes);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
