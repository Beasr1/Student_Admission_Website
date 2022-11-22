const mongoose = require("mongoose");

const undergraduateSchema = mongoose.Schema(
  {
    personalDetails:{
        AdmissionYear: { type: Number, required: true },
        BirthPlace: { type: String, required: true },
        City: { type: String, required: true },
        ContactAddress: { type: String, required: true },
        ContactNo: { type: Number, required: true },
        email: { type: String, required: true },
        Dob: { type: String, required: true },
        uploadFiles: { type: String, required: true },
        State: { type: String, required: true }, 
        gender: { type: String, required: true },
        fullname: { type: String, required: true },

        percentile:{ type:Number,required: true},
        prefBranch:{ type:[String],required: true}
    },
    
    major: {type:Number,required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Undergraduate", undergraduateSchema);