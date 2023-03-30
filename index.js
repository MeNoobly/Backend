import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = 5000;
const DB_URL =
    "mongodb+srv://84956743974:3R0ak6VaDZouhFx9@cluster0.82hvvnt.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        app.listen(PORT, () => {
            console.log(`SERVER STARTED ON PORT ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

startApp();
