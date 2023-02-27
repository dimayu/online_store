import mongoose from 'mongoose';

const CountrySchema = new mongoose.Schema({
    country: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  },
);

export default mongoose.model('Country', CountrySchema);