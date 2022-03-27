import React from 'react';
import Card from './Components/Card';
import { cardData } from './Card_data';
// import Card from './Card'

const data = cardData;
function App() {
  return (
  <div className = "App">
    
    {data.map((data) => (
        <Card 
        title = {data.title}
        imageUrl= {data.imageUrl}
        body= {data.body}
        />
      ))}
  </div>
  
  
  );
}

export default App;
