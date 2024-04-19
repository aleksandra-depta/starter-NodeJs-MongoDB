const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Init Express
dotenv.config({ path: "./config.env" });
const app = require("./app");

//DB Connection
const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
  })
  .then((con) => {
    console.log(con.connections);
    console.log("DB connection successful");
  });

// START SERVER
const port = process.env.PORT || 6500;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
