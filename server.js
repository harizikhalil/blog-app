const express = require("express");
const connectDB = require("./config/connectDB");
const userRoute = require("./routes/api/user-route");
const app = express();

//Connect Database
connectDB();

app.use(express.json());
app.use("/uploads", express.static("uploads"));
//routes
app.use("/api/user", userRoute);
app.use("/api/blog", require("./routes/api/blog-route"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
