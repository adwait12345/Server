const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
  uniqueId: {
    type: String,
    required: true,
  },
  data: [
    {

      email: {
        type: String,
        required: true,
        unique:true
       
      },
      firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
     reason: {
        type: String,
        required: true,
      },
      status:{
        type:String,
      }
    }
  ],
});

module.exports = mongoose.model("subscriber", subscriberSchema);
