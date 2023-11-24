import React from "react";
import {Link} from "react-router-dom";

const IngredientList = ({ingredients}) => {
    return (
        <div className={'row'}>
            {
                ingredients.map((ingredient, idx) =>
                    <div className="col-4" key={idx + ingredient}>
                        <div className={"box"}>
                            <h5>
                                <Link to={`/ingredient/${ingredient}`}>
                                    {ingredient}
                                </Link>
                            </h5>
                            <img className={"ingredient_img"}
                                 src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`} alt=""/>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default IngredientList;