import mongoose, { Schema } from 'mongoose';

const JournalSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: String,
  content: String,
  mood: String,
  createdAt: { type: Date, default: Date.now }
});

export const Journal = mongoose.models.Journal || mongoose.model('Journal', JournalSchema);
