import  express from "express";

//components
import Connection from "./database/db.js";

const app = express();
const PORT=8000;
app.listen(PORT, () => console.log(`server is running succesfully over the port ${PORT}`));
console.log("me yaha hu yaha hu yaha hu yaha");