import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const hobbySchema = new Schema({
  hobby: {
    type: String,
    required: true
  },
  difficultyLevel: {
    type: String,
    required: true,
    enum: ['Easy', 'Medium', 'Hard', 'Varies', 'Easy to Medium', 'Medium to Hard','Easy to Hard'] // Adjust based on your requirements
  },
  description: {
    type: String,
    required: true
  },
  equipmentNeeded: [{
    type: String
  }],
  healthBenefits: {
    type: String
  },
  timeInvestment: {
    type: String
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

const hobbiesData = model('hobbiesData', hobbySchema);

export default hobbiesData;
