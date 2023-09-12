import React,{useEffect,useContext} from 'react'
import { mycontext } from '../Context/Context'
import './RandomMeal.css'

function RandomMeal() {

  const {randomcategory, randomMeal }= useContext(mycontext);
  useEffect(() => {
    randomcategory()
  }, [randomcategory])
  
  return (
    <div className='random'>
    {randomMeal.map((r) => 
        <div key={r.idMeal} className='random-grid' >

          <div className='random-grid-btn'>
            <img src={r.strMealThumb} alt= '#'/>
              <h4>{r.strMeal}</h4>
            <button className='button' onClick={randomcategory}>Generate another Meal</button>
          </div>

          <div className='random-instructrion'>
            <h4>Instructions</h4>
            <p>{r.strInstructions}</p>
          </div>
        </div>
    )}
</div>
  )
}

export default RandomMeal