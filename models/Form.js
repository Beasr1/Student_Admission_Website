const { string } = require("joi");
const mongoose = require("mongoose");

const formSchema = mongoose.Schema(
  {
    AdmissionYear: { type: Number, required: true },
    BirthPlace: { type: String, required: true },
     City: { type: String, required: true },
    ContactAddress: { type: String, required: true },
    ContactNo: { type: Number, required: true },
    email: { type: String, required: true },
    Dob: { type: String, required: true },
    // uploadFiles: { type: Buffer, required: true },
     State: { type: String, required: true }, 
    gender: { type: String, required: true },
    fullname: { type: String, required: true },
  },
);

module.exports = mongoose.model("Form", formSchema);