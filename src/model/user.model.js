// import mongoose from "mongoose";
// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//   id: Object,
//   name: String,
//   email: String,
//   phone: Number,
// });

// const User = mongoose.model("User", UserSchema);

// export default User;

import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, trim: true },
  phone: { type: Number },
});
export const User = mongoose.model("User", userSchema);
