import mongoose, {connection} from "mongoose";
const Schema = mongoose.Schema;
const stockSchema = new Schema(
    {
        itemId:{type : String,
            required : false,
        },
        item_code:{
            type:String,
            required:false
        },
        item_name:{
            type:String,
            required:false
        },
        quantity:{
            type:String,
            required:false
        },
        cost_price:{
            type:String,
            required:false
        }
        
    }
);
const Stock = mongoose.model("Stock",stockSchema);
module.exports = Stock