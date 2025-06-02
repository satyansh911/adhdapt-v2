import mongoose, { Schema } from 'mongoose';

const CommunityPostSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: String,
  createdAt: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  comments: [{
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
    createdAt: Date
  }]
});

export const CommunityPost = mongoose.models.CommunityPost || mongoose.model('CommunityPost', CommunityPostSchema);