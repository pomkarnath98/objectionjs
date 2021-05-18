const setupDb = require("./db/db-setup");
const express = require("express");
const router = require("./routes");

setupDb();

const app = express();
app.use(express.json());
app.use(router);

app.listen(9000, (err) => {
  if (err) console.error(err);
  else console.log("The Server is running in PORT 9000");
});
