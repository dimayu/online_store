import mongoose from 'mongoose';

const GenderSchema = new mongoose.Schema({
    gender: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  },
);

export default mongoose.model('Gender', GenderSchema);