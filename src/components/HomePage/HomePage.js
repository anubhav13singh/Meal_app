import React, { useState, useContext, useEffect } from "react";
import "./HomePage.css";
import { mycontext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

import AlphaMeal from "./AlphaMeal";

function HomePage() {
  let navigate = useNavigate();

  const [searchTerm, SetsearchTerm] = useState("");

  const { fetchHomepageMeals, meals } = useContext(mycontext);

  const fetchMealsHandler = useEffect(() => {
    fetchHomepageMeals(searchTerm);
  }, [searchTerm]);

  return (
    <>
      {
        <div className="home">
          <div className="home-search">
            <input
              type={"text"}
              placeholder="Type a Meal name...."
              value={searchTerm}
              onChange={(e) => SetsearchTerm(e.target.value)}
            />

            <button onClick={fetchMealsHandler}>Search Meal</button>
          </div>

          <div className="home-meals-grid">
            {meals ? (
              meals.map((m) => (
                <div className="home-meals" key={m.idMeal}>
                  <img className="img" src={m.strMealThumb} alt="$" />
                  <h4>{m.strMeal}</h4>

                  <button
                    key={m.idMeal}
                    className="home-meals"
                    onClick={() => {
                      navigate(`/${m.idMeal}`);
                    }}
                  >
                    Ingridients
                  </button>
                </div>
              ))
            ) : (
              <h2>No meals found! Try another meal...</h2>
            )}
          </div>
          <AlphaMeal />
        </div>
      }
    </>
  );
}

export default HomePage;
