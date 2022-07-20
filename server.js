const dotenv = require("dotenv").config();
const app = require("./middleware/app");

require("./config/db");

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
