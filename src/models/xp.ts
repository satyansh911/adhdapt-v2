import mongoose, { Schema } from 'mongoose';

const XpSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  points: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  lastUpdated: { type: Date, default: Date.now }
});

export const Xp = mongoose.models.Xp || mongoose.model('Xp', XpSchema);
