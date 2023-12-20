/*Dictionary server*/
const express = require("express");
const cors = require("cors"); 
const dotenv = require("dotenv");
const dictionary = require("./routes/route");
const morgan = require("morgan");

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan());
}

app.use("/service/wap/dictionary", dictionary);

const server = app.listen(PORT, () => {
  console.log(
    `Wap Dictionary Server is running  on port ${PORT}`
  );
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
