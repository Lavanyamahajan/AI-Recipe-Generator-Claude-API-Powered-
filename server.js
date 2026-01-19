const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

const Recipe = require('./models/Recipe');

app.post('/generate', async (req, res) => {
  const recipe = new Recipe({
    ingredients: req.body.ingredients,
    steps: ["Step 1", "Step 2"],
    nutrition: { calories: 400, protein: 10, carbs: 60, fats: 8 }
  });
  await recipe.save();
  res.json(recipe);
});

app.listen(5000, () => console.log("Server running"));
