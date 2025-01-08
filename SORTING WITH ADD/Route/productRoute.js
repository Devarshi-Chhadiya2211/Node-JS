const { Router } = require("express");
const proModel = require("../Model/addProModel");
const ProductRouter = Router();

ProductRouter.post("/add", async (req, res) => {
    try {
        const data = await proModel.create(req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ msg: error.message });
    }
});


ProductRouter.get("/allPro", async (req, res) => {
    try {
        const data = await proModel.find().sort({ price: 1 });
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ msg: error.message });
    }
});

// ProductRouter.get('/allPro', (req, res) => {
//     const { sort } = req.query;
  
//     // let sortedProducts = [...products]; 
//     // Create a copy of the array
  
//     if (sort === 'price_asc') {
//         proModel.sort((a, b) => a.price - b.price);
//     } else if (sort === 'price_desc') {
//         proModel.sort((a, b) => b.price - a.price);
//     }
  
//     // res.json(sortedProducts);
//   });

module.exports = ProductRouter;
