const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const filterRoute = require("./routes/filter");
const passwordRoute = require("./routes/password");
const authMiddleware = require("./middleware/authMiddleware");

dotenv.config();

// mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, ()=>{
//     console.log("Connected to MongoDB")
// });

mongoose.connect(process.env.MONGO_URL);

//middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// app.use(authMiddleware); //ovde koristimo globalni middleware

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/filter", filterRoute);
app.use("/api/password", passwordRoute);


app.listen(8800, ()=>{
    console.log("Backend server je pokrenut!")
} )