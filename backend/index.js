import mongoose from "mongoose";
import express from "express";
import { routes } from "./Routes/routes.js";
import cors from "cors"

const app = express();
const port = 5000;

app.use(cors({
    origin: ["http://localhost:3000", "https://prudent-assignment-by-anil-thota.netlify.app"], // Array of allowed origins
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    credentials: true, // If your frontend sends cookies or other credentials
}));


app.use(express.json());
app.use(routes);

const mongoose_url = "mongodb+srv://anilcherry1714:Mongo123@cluster0.juxytxs.mongodb.net/Prudent";


mongoose.connect(mongoose_url, { useNewUrlParser: true, useUnifiedTopology: true });

const database = mongoose.connection;

database.on("connected", () => {
    console.log("Connected to MongoDB");
});

database.on("error", (err) => {
    console.error("Error connecting to MongoDB:", err);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
