const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () =>
  console.log("MongoDB Database Connection Established Successfully!!")
);

// First route - Welcome on Heroku
// app.get("/", (req, res) => res.send("API Running"));

// routes
const studentRoutes = require("./routes/students");
const userRoutes = require("./routes/users");
const undergraduateRoutes = require("./routes/undergraduates");
const authRoutes = require("./routes/auth");

app.use("/api/students", studentRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/undergraduates", undergraduateRoutes);

// DEPLOY - Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running in PORT ${PORT}`));
