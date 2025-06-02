import mongoose, { Schema } from 'mongoose';

const TaskSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: String,
  description: String,
  isCompleted: { type: Boolean, default: false },
  dueDate: Date,
  createdAt: { type: Date, default: Date.now }
});

export const Task = mongoose.models.Task || mongoose.model('Task', TaskSchema);