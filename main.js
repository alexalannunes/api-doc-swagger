const express = require("express");
const swaggerUI = require("swagger-ui-express");
const { router } = require("./routes");
const swaggerDocument = require("./swagger.json");
const app = express();

app.use(router);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(3999);
