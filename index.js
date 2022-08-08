import "dotenv/config";

import express from "express";
import path from "path";
import routers from "./routes/routers.js";
import mongoose from "mongoose";

import Post from './models/Post.js'


const app = express();

app.use(express.json());

app.use(routers);


const DB_URL = process.env.MONGO_CONNECTION_URL;
const PORT = process.env.PORT;
const __dirname = path.resolve();



async function start() {
  try {
    await mongoose.connect(DB_URL.toString(), {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    console.log("[+] Mongo connection succes");

    app.listen(PORT, () => {
      console.log(`Server been started - http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

start();
