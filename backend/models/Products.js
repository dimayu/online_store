import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    price: {
      type: String,
      required: false,
    },
    article: {
      type: String,
      required: false,
    },
    brand: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    material: {
      type: String,
      required: false,
    },
    sizes: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
    season: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: false,
    },
    img: {
      type: String,
      required: false,
    },
  },
  {
    timestamp: true,
  },
);

export default mongoose.model('Product', ProductSchema);