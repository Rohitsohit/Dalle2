
import { useState } from 'react';
import './App.css';



function App() {

  const [inputValue, setInputValue] = useState('');
  const [url, seturl] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  
  const handleButtonClick = () => {
    const OPENAI_API_KEY ="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";
    console.log(inputValue);
    fetch('https://api.openai.com/v1/images/generations', {
      method: "POST",
      body: JSON.stringify({
        "prompt": inputValue,
        "n": 1,
        "size": "1024x1024"
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer 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 ` // Use your API key
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.data[0].url)
      seturl(data.data[0].url);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div class="container">
      <input
        type="text"
        id="input"
        width="200" height="150"
        
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Submit</button>
      <div>

      
      {
        !url ?(<>Loading</>):(<>
        
        <img src={url} width="500" height="550" alt="Image Description"/>

        </>)
      }
      </div>
    </div>
  );
}

export default App;
