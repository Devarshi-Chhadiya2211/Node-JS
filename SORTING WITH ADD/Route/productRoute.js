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


// ProductRouter.get("/allPro", async (req, res) => {
//     const sort  = req.query.sort;
    
    
//     try {

//         if (sort === 'asc') {
//             proModel.find((a, b) => a.price - b.price);
//         } else if (sort === 'desc') {
//             proModel.find((a, b) => b.price - a.price);
//         }
      

//         // const data = await proModel.find().sort({ price: 1 });
//         res.status(200).send(data);
//     } catch (error) {
//         res.status(500).send({ msg: error.message });
//     }
// });


ProductRouter.get("/allPro", async (req, res) => {
    const sort = req.query.sort;

    try {
        let data;
        if (sort === 'asc') {
            data = await proModel.find().sort({ price: 1 }); // Ascending order
        } else if (sort === 'desc') {
            data = await proModel.find().sort({ price: -1 }); // Descending order
        } else {
            data = await proModel.find(); // Default case, no sorting
        }

        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ msg: error.message });
    }
});

module.exports = ProductRouter;
