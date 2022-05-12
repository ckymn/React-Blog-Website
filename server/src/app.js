const express = require("express");
const log = require("./api/v1/utils/logger");
const pino = require("pino-http")();
const app = express();

app.use(pino);

const PORT = 3000;
app.listen(PORT, () => {
  log.info("Server is running");
});
