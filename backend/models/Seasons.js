import mongoose from 'mongoose';

const SeasonSchema = new mongoose.Schema({
    season: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  },
);

export default mongoose.model('Season', SeasonSchema);