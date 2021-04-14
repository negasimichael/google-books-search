const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const morgan = require ("morgan")
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'))
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

  .then(() => console.log('mongodb connected'))
  .catch(error => console.log('mongodb connection', error));


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});