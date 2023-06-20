const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const EmployerSchema = new Schema({
  fullName: { type: String, required: true, minLength: 5, maxLength: 20 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 7, maxLength: 100 },
  companyName: { type: String, required: true, minLength: 5, maxLength: 20 },
});
const EmployerModel = model("Employer", EmployerSchema);
module.exports = EmployerModel;
