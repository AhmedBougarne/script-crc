import React, { useState, useEffect } from 'react';

function MyApp() {
  const [categories, setCategories] = useState([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentChoices, setCurrentChoices] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch('http://localhost:3001/categories');
      const data = await response.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchChoices() {
      const response = await fetch('http://localhost:3001/choices');
      const data = await response.json();
      setCurrentChoices(data.filter(choice => choice.category_id === categories[currentCategoryIndex].id));
    }
    fetchChoices();
  }, [categories, currentCategoryIndex]);

  function handleNext() {
    setCurrentCategoryIndex(currentCategoryIndex + 1);
  }

  return (
    <div>
      <h1>{categories[currentCategoryIndex]?.name}</h1>
      {currentChoices.map(choice => (
        <div key={choice.id}>
          <input type="radio" name="choice" value={choice.id} />
          <label>{choice.name}</label>
        </div>
      ))}
      <button onClick={handleNext}>Suivant</button>
    </div>
  );
}

export default MyApp;