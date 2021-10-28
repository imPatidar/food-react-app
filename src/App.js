import './App.css';
import {useEffect, useState} from "react";
import Recipes from "./Recipes";

const App = () => {



    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    useEffect(() => {
        getRecipes()
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log('asdasd')
    }

    const updateSearch = e =>{
        setSearch(e.target.value)
        console.log(search)
    }

  const getSearch = e =>{
        e.preventDefault();
        setQuery(search)
  }

    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button type="submit" className="search-button" >Search</button>
            </form>
            <div className="recipes">

            {recipes.map(recipes => (
                <Recipes
                    key={recipes.recipe.label}
                    title={recipes.recipe.label}
                    calories={recipes.recipe.calories}
                    image={recipes.recipe.image}
                    ingredients={recipes.recipe.ingredients}
                />
            ))}

            </div>
        </div>
    )
}

export default App;