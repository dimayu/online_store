import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    sizes: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    season: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  },
);

export default mongoose.model('Product', ProductSchema);