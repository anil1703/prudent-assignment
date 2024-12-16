import mongoose from "mongoose";
import express from "express";
import { routes } from "../Routes/routes.js";
import cors from "cors"
import serverless from 'serverless-http'

const app = express();
app.use(express.json());
app.use(cors());




const mongoose_url = "mongodb+srv://anilcherry1714:Mongo123@cluster0.juxytxs.mongodb.net/Prudent";


mongoose.connect(mongoose_url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

const database = mongoose.connection;



database.on("error", (err) => {
    console.error("Error connecting to MongoDB:", err);
});

database.once("connected", () => {
    console.log("Connected to MongoDB");
});


app.use('/.netlify/functions/api', routes);

// Export the handler for Netlify
export const handler = serverless(app);