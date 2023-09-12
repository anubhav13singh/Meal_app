import React , {useState} from 'react'
import './ingridents.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './ingridents.css'
import { useNavigate } from 'react-router-dom'


function Ingridients() {
    const navigate = useNavigate();

  const [item, setitem] = useState([]);
  const {id} = useParams();
  if(id!=""){
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res=>{
      setitem(res.data.meals[0]);
    })
  }
  return (
    
    <div className='recipe'>
        {
          (!item)?"" : 
          <div>
          <div className='container'>
             <div className='image'>
              <img src= {item.strMealThumb} alt='%' />
             <div className='image-tag'>
               <h2>{item.strMeal}</h2>
               <h3>{item.strArea} dish</h3>
               <h4>{item.strCategory} </h4>
            </div> 
             
            </div>

              <div className='ingridents'> 
                  <h3>{item.strIngredient1}: {item.strMeasure1} </h3>
                  <h3>{item.strIngredient2}:  {item.strMeasure2} </h3>
                  <h3>{item.strIngredient3}:  {item.strMeasure3} </h3>
                  <h3>{item.strIngredient4}:  {item.strMeasure4} </h3>
                  <h3>{item.strIngredient5}:  {item.strMeasure5} </h3>
                  <h3>{item.strIngredient6}:  {item.strMeasure6} </h3>
                  <h3>{item.strIngredient7}:  {item.strMeasure7} </h3>
                  <h3>{item.strIngredient8}:  {item.strMeasure8} </h3>
                  <h3>{item.strIngredient9}:  {item.strMeasure9} </h3>
                  <h3>{item.strIngredient10}:  {item.strMeasure10} </h3>
                  <h3>{item.strIngredient11}:  {item.strMeasure11} </h3>
                  <h3>{item.strIngredient12}:  {item.strMeasure12} </h3>
                  <h3>{item.strIngredient13}:  {item.strMeasure13} </h3>
                  <h3>{item.strIngredient14}:  {item.strMeasure14} </h3>
                
              </div>

              </div>
              
              <div className='instruction'>
                <h2>instruction</h2>
                {item.strInstructions} 
                <div>
              <button className='btn' onClick={()=>{navigate(-1)}}>Go back</button>
              </div>
              </div>
          </div>

        
        




        }
    </div>
    
  )
      }
export default Ingridients