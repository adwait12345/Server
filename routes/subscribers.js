const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");


// Create a model for the data
// const Data = require("../models/subscriber");

// Get data by unique ID
router.get('/:uniqueId', (req, res) => {
  const uniqueId = req.params.uniqueId;
  Subscriber.find({ uniqueId: uniqueId }, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
});

// Add data
router.post('/', (req, res) => {
  const uniqueId = req.body.uniqueId;
  const data = req.body.data;
  const newData = new Subscriber({
    uniqueId: uniqueId,
    data: data
  });
  newData.save((err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
});



// // getting all
// router.get("/", async (req, res) => {
//   try {
//     const subscribers = await Subscriber.find();
//     res.json(subscribers);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// //getting one
// router.get("/:id", getSubscriber, (req, res) => {
//   res.json(res.subscriber);
// });
// // Creating one
// router.post("/", async (req, res) => {
//   const subscriber = new Subscriber({
//     walletaddress: req.body.walletaddress, 
//     transactionhash: req.body.transactionhash,
//     transactiontype: req.body.transactiontype,
//     transactionreciver: req.body.transactionreciver,
//     currentNetwork: req.body.currentNetwork,
//     amount: req.body.amount,
//     time: req.body.time,
//   });
//   try {
//     const newSubscriber = await subscriber.save();
//     res.status(201).json(newSubscriber);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });
// // Updating one
// router.patch("/:id", getSubscriber, async (req, res) => {
//   if (req.body.walletaddress != null) {
//     res.subscriber.walletaddress = req.body.walletaddress;
//   }
//   if (req.body.transactionhash != null) {
//     res.subscriber.transactionhash = req.body.transactionhash;
//   }
//   if (req.body.transactiontype != null) {
//     res.subscriber.transactiontype = req.body.transactiontype;
//   }
//   if (req.body.amount != null) {
//     res.subscriber.amount = req.body.amount;
//   } 
//    if (req.body.time != null) {
//     res.subscriber.time = req.body.time;
//   }
//   try {
//     const updatedSubscriber = await res.subscriber.save();
//     res.json(updatedSubscriber);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });
// // Deleating one
// router.delete("/:id", getSubscriber, async (req, res) => {
//   try {
//     await res.subscriber.remove();
//     res.json({ message: "Deleted Subscriber" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// async function getSubscriber(req, res, next) {
//   let subscriber;
//   try {
//     subscriber = await Subscriber.findById(req.params.id);
//     if (subscriber == null) {
//       return res.status(404).json({ message: "Cannot find subscriber" });
//     }
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
//   res.subscriber = subscriber;
//   next();
// }

module.exports = router;
