import mongoose, { Schema, model } from 'mongoose';

const todoCardSchema = new Schema(
  {
    title: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Todo',
      //   required: [true, 'Title is required'],
      trim: true,
    },
    todosCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const TodoCard = model('TodoCard', todoCardSchema);
