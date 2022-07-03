const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')
// getting all
router.get('/',async (req,res)=>{
  try{
    const subscribers = await Subscriber.find()
    res.json(subscribers)
  } catch (err){
    res.status(500).json({message: err.message})
  }
})
//getting one
router.get('/:id',getSubscriber,(req,res)=>{
      res.json(res.subscriber)
})
// Creating one 
router.post('/', async (req,res)=>{
  const subscriber = new Subscriber({
    email:req.body.email,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    address:req.body.address,
  })
  try {
    const newSubscriber = await subscriber.save()
    res.status(201).json(newSubscriber)
  } catch (err) {
    res.status(400).json({message: err.message})
  }
})
// Updating one
router.patch('/:id',getSubscriber,async(req,res)=>{
    if(req.body.email != null){
        res.subscriber.email = req.body.email
    }
        if(req.body.firstname != null){
        res.subscriber.firstname = req.body.firstname
    }  
      if(req.body.lastname != null){
        res.subscriber.lastname = req.body.lastname
    }   
     if(req.body.address != null){
        res.subscriber.address = req.body.address
    }
    try {
        const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)
    } catch (err) {
        res.status(400).json({message:err.message})
    }
})
// Deleating one
router.delete('/:id',getSubscriber,async(req,res)=>{
  try {
     await res.subscriber.remove()
     res.json({message:'Deleted Subscriber'})
  } catch (err) {
    res.status(500).json({message: err.message})

  }
})

async function getSubscriber(req,res, next){
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null){
            return res.status(404).json({message:'Cannot find subscriber'})
        }
    } catch (err) {
        res.status(500).json({message: err.message})

    }
    res.subscriber = subscriber
    next()
}

module.exports = router