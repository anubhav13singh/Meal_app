import React, {createContext, useState, useCallback} from 'react'
import axios from 'axios';
import App from '../../App';

export const mycontext = createContext();

export const Appcontext = () =>{
    const [meals, Setmeals] = useState([]);
    const [Categories, Setcategories] = useState([]);
    const [randomMeal, SetrandomMeal] = useState([]);


    const fetchHomepageMeals = (searchTerm) =>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
       .then(res =>{
        // console.log(res.data.meals);
        Setmeals(res.data.meals);
       }
        )
    }

    const fetchCategory = () => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(res =>{
            // console.log(res.data.categories);
            Setcategories(res.data.categories);
        })
    }

    const randomcategory = useCallback(() =>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
       .then(res =>{
        // console.log(res.data.meals);
        SetrandomMeal(res.data.meals);
       }
        )
    }, [])
        
        return (
            <mycontext.Provider value={{fetchHomepageMeals,meals,fetchCategory,Categories,randomcategory,randomMeal}}>
        <App/>
    </mycontext.Provider>
    )
    
    
}
