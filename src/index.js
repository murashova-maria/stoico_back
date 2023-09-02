const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 8000
const server = http.createServer(app);

const MONGO_URL = process.env.MONGODB_URL

mongoose.connection.once("open", () => console.log("Connected to MongoDB"));

mongoose.connection.on("error", (e) => console.error(e));

async function startServer() {
  await mongoose.connect(MONGO_URL);
  server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
  });
}

startServer();
