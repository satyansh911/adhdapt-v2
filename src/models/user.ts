import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: String,
  avatar: String,
  googleId: String,
  createdAt: { type: Date, default: Date.now }
});

export const User = mongoose.models.User || mongoose.model('User', UserSchema);