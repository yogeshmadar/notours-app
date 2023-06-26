const express = require("express");
const morgan = require("morgan");

const userRouter = require("./routes/userRoutes");

// Express App
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/users", userRouter);

app.all("*", (req, res, next) => {
  res.status(404).send(`Can't find  ${req.originalUrl}  on this server!`);
});

module.exports = app;
