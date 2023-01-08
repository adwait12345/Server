const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
  uniqueId: {
    type: String,
    required: true,
  },
  data: [
    {

      transactionhash: {
        type: String,
        required: true,
        unique:true
       
      },
      currentNetwork: {
        type: String,
        required: true,
      },
      transactionreciver: {
        type: String,
        required: true,
      },
      transactiontype: {
        type: String,
        required: true,
      },
      amount: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
    }
  ],
});

module.exports = mongoose.model("subscriber", subscriberSchema);
