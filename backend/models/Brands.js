import mongoose from 'mongoose';

const BrandSchema = new mongoose.Schema({
    brand: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  },
);

export default mongoose.model('Brand', BrandSchema);