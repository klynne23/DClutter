import React from "react";
import "./style.css";

function Categories(props) {
    return (
            <div className="categoryDiv">
                {props.selections.map((category) =>
                <span className="categorySpan text-center">

                        <button key={category} id={category} type="button" className="btn btn-outline-dark pickedCategoryButton">{category}                       

                        </button>
                         <span onClick={() => props.removeCategory(category)} className="btn btn-danger">
                            X
                         </span>
                </span>
                )}
        </div>
    );
}

export default Categories;