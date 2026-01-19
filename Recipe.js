const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  ingredients: [String],
  steps: [String],
  nutrition: {
    calories: Number,
    protein: Number,
    carbs: Number,
    fats: Number
  },
  isFavorite: { type: Boolean, default: false }
});

module.exports = mongoose.model('Recipe', RecipeSchema);
