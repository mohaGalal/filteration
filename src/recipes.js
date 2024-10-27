import axios from "axios";
import React, { useEffect, useState } from "react";

import Card from 'react-bootstrap/Card';
function Recipes() {

    const[Recipes, setRecipes] = useState([]);

    useEffect(() =>{
        const getRecipe = async () => {
          let items = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast" ,{
            
            }) 
            // .then((res) => res.json())
            .then((items) => setRecipes(items.data.meals))
            .catch((err) => console.log(err));
        }
        
        getRecipe();
      },[]);

      const showRecipes = Recipes.map((recipe, index) => (
        <div key={recipe.idMeal}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={recipe.strMealThumb} />
                 <Card.Body>
                  <Card.Title>{recipe.strMeal}</Card.Title>
                   <Card.Text>
                    Some quick example text to build on the card title and make up the
                   bulk of the card's content.
                  </Card.Text>
                 </Card.Body>
                </Card>
        </div>
      )) 
    
      
    return (
        <div className="container section3">
            <h1> RECIPES</h1>
            <div className="recipes">
                {showRecipes}
                
            </div>
         <div className="btn"><button>CONTACT US</button></div>
        </div>
    )
}
export default Recipes