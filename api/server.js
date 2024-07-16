require("dotenv").config();
const express = require("express");
const connectDb = require("./src/config/mongodb.config");
const app = express();

const cors = require("cors");

const blogRouter = require("./src/routes/blog.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use("/api/v1/blog", blogRouter);

connectDb();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
