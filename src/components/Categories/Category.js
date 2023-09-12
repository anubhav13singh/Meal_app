import React, {  useContext, useEffect} from 'react'
import { mycontext } from '../Context/Context';
import './Category.css'

function Category() {

const {fetchCategory,Categories} = useContext(mycontext);

useEffect(() =>{
  fetchCategory();
},[fetchCategory]);


  return (
    <div className='category'>
        {Categories.map((c) => 
          <div key={c.idCategory}>
            <img src={c.strCategoryThumb} alt="#"/>
            <h4>{c.strCategory}</h4>
           </div>
        )}
    </div>
  )
}

export default Category;