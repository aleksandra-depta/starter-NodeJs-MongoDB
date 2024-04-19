const express = require("express");
const productRouter = require("./routes/productRoutes");

const cors = require("cors");

const app = express();

app.use(
  cors({
    // origin:'http://localhost:3000',
    // credentials:true
  })
);

app.use(
  express.json({
    limit: "10kb",
  })
);

// ROUTERS
app.use("/api/v1/products", productRouter);

module.exports = app;
