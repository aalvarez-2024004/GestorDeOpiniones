import { Schema, model } from 'mongoose';

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, 'ES NECESARIO UN TITULO =8']
  },
  category: {
    type: String,
    required: [true, 'INGRESA UN CATEGORIA ;D']
  },
  content: {
    type: String,
    required: [true, 'Tu post no puede ir vacio ;C']
  },
  authorId: {
    type: String,
    required: true
  },
  authorEmail: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default model('Post', postSchema);
