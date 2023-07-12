let express = require("express");

let app = express();

app.get("/", (request, response) => {
  response.send("Express JS");
});

module.exports = app;

//app.listen(3000);
