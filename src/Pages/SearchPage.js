import React, {useEffect, useState} from "react";
import Header from "../Components/Header";
import axios from "axios";
import MealList from "../Components/MealList";

const SearchPage = () => {
    const [searchInput, setSearchInput] = useState('')
    const [searchMeals, setSearchMeals] = useState([])

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSubmit = () => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
            .then(({data}) => {
                setSearchMeals(data.meals)

            })
    };

    return (
        <div>
            <Header/>
            <h1>Search page</h1>
            <input onChange={handleInputChange} type="text" placeholder={'введите название'}/>
            <button onClick={handleSubmit}>Search</button>
            <MealList meals={searchMeals}/>
        </div>
    )
}

export default SearchPage;