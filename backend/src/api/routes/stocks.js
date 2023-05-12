
import  express from 'express'
const router = express.Router();

let Stock = require ("../models/Stock");

//http://localhost:8090/stock/add

router.route("/add").post((req,res)=>{
    const itemId =(req.body.itemId);
    const item_code =(req.body.item_code);
    const item_name =(req.body.item_name);
    const quantity =(req.body.quantity);
    const cost_price =(req.body.cost_price);

    const newStock = new Stock({   //model
            itemId,
            item_code,
            item_name,
            quantity,
            cost_price,

    }) 
    newStock.save().then(()=>{
        res.json("Item Added")

    }).catch((err)=>{
        console.log(err);
    })
    //http://localhost:8090/stock
router.route("/").get((req,res)=>{
    Stock.find().then((stocks)=>{
        res.json(stocks)
    }).catch((err)=>{
        console.log(err)
    })

})
http://localhost:8090/stock/update/00125
router.route("/update/:id").put(async(req,res)=>{
        let itemId = req.params.id;
        const {item_code,item_name,quantity,cost_price} = req.body;

        const updateStock = {
            itemId,
            item_code,
            item_name,
            quantity,
            cost_price
        }
        const update = await Stock.findByIdAndUpdate(itemId,updateStock).then(()=>{
            
            res.status(200).send({status:"Item Updated", item: update})
        }).catch((err)=>{
            console.log(err);
        })
})
http://localhost:8090/stock/delete/00125

router.route("/delete/:id").delete(async(req,res)=>{
        let itemId = req.params.id;
        await Stock.findByIdAndDelete(itemId)
        .then(()=>{
            res.status(200).send({status: "Item Deteted"});
        }).catch((err)=>{
            console.log(err.message);

        })
})

})



module.exports = router; 