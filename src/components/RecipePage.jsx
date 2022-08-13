import React,{ useState } from 'react'
import Axios from "axios";
import Recipe from "./Recipe";
import Alert from "./Alert";
import { v4 as uuidv4 } from 'uuid';

const RecipePage = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");
  
    const APP_ID = "b7ff5401";
    const APP_KEY = "1799db1ef71012a5193b32fb123705c9";
  
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
    const getData = async () => {
      if (query !== "") {
        const result = await Axios.get(url);
        if (!result.data.more) {
          return setAlert("No food with such name");
        }
        console.log(result);
        setRecipes(result.data.hits);
        setQuery("");
        setAlert("");
      } else {
        setAlert("Please fill the form");
      }
    };
  
    const onChange = e => setQuery(e.target.value);
  
    const onSubmit = e => {
      e.preventDefault();
      getData();
    };
  
    return (
      <div className=''>
        <h2>Enter almost one ingredient</h2>
        
        <div className='d-flex justify-contend-center'>
        <form onSubmit={onSubmit}>
          {alert !== "" && <Alert alert={alert} />}
          <input
            type="text"
            name="query"
            onChange={onChange}
            value={query}
            autoComplete="off"
            placeholder="Ingredients"
            className='form-control input mb-2'
          />
          <input type="submit" value="Search" />
        </form>
        </div>

        <div className="recipes">
          {recipes !== [] &&
            recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
        </div>
        
      </div>
    );
}

export default RecipePage