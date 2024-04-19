const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Product = require("../models/productModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true
  })
  .then((con) => {
    // console.log(con.connections);
    console.log("DB connection successful");
  });

// READ JSON FILE
const products = JSON.parse(
  fs.readFileSync(`${__dirname}/products.json`, "utf-8")
);

//IMPORT DATA INTO BD
const importData = async () => {
  try {
    await Product.create(products, { validateBeforeSave: true });

    console.log("Data successfully loaded");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//DELETE ALL DATA FROM COLLECTION
const deleteData = async () => {
  try {
    await Product.deleteMany();

    console.log("Data successfully deleted");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
// console.log(process.argv);
// node dev-data/import-dev-data.js --delete
// node dev-data/import-dev-data.js --import
