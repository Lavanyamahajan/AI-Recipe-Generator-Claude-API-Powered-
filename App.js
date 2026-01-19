import { useState } from 'react';
import axios from 'axios';

function App() {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState(null);

  const generate = async () => {
    const res = await axios.post("http://localhost:5000/generate", {
      ingredients: ingredients.split(",")
    });
    setRecipe(res.data);
  };

  return (
    <div>
      <h1>AI Recipe Generator</h1>
      <input onChange={e => setIngredients(e.target.value)} />
      <button onClick={generate}>Generate</button>
      {recipe && <pre>{JSON.stringify(recipe, null, 2)}</pre>}
    </div>
  );
}

export default App;
