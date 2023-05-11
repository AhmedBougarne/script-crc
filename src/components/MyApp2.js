import { useState } from 'react';

function MyApp2({ categories, choices }) {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const currentCategory = categories[currentCategoryIndex];
  const currentChoices = choices[currentCategory.id];

  function handleNextCategory() {
    setCurrentCategoryIndex((prevIndex) => prevIndex + 1);
  }

  return (
    <div>
      <h1>{currentCategory.title}</h1>
      <ul>
        {currentChoices.map((choice) => (
          <li key={choice.id}>
            <input type="radio" name="choice" value={choice.id} /> {choice.title}
          </li>
        ))}
      </ul>
      {currentCategoryIndex < categories.length - 1 && (
        <button onClick={handleNextCategory}>Suivant</button>
      )}
    </div>
  );
}

export default MyApp2;
