import express from "express";
import cors from "cors";
import logger from "./utils/logger";
import 'dotenv/config';
import { connect } from "./utils/database.connection";
import { required } from "nodemon/lib/config";
import StockRouter from "./api/routes/stocks";


const app = express();
const PORT = process.env.PORT || "8090";

app.use(cors());
app.use(express.json({limit: "20mb"}));

app.get("/", (req , res , next) => {

    res.send("<h2> Inventory Management System</h2>");
    next();
});

app.use("/Stock",StockRouter);



app.listen(PORT, ()=> {

    logger.info(`server is running on PORT ${PORT}`);
    connect();
    
});


