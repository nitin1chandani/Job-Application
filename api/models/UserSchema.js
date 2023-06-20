const moongoose = require("mongoose");
const { Schema, model } = moongoose;

const UserSchema = new Schema({
  fullName: { type: String, required: true, minLength: 5, maxLength: 20 },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true, minLength: 7, maxLength: 100 },
});

const UserModel = model("User", UserSchema);
module.exports = UserModel;
