import React from 'react';

function Rating (props) {
    return(
        <div className="rating">
            <span> <em className={
                props.rating>=1
                ?"fa fa-star"
                :props.rating>=0.5
                ?"fas fa-star-half-alt"
                :"fas fa-star-alt"
                }></em> 
            </span>
            <span> <em className={
                props.rating>=2
                ?"fa fa-star"
                :props.rating>=1.5
                ?"fas fa-star-half-alt"
                :"fas fa-star-alt"
                }></em> 
            </span>
            <span> <em className={
                props.rating>=3
                ?"fa fa-star"
                :props.rating>=2.5
                ?"fas fa-star-half-alt"
                :"fas fa-star-alt"
                }></em> 
            </span>
            <span> <em className={
                props.rating>=4
                ?"fa fa-star"
                :props.rating>=3.5
                ?"fas fa-star-half-alt"
                :"fas fa-star-alt"
                }></em> 
            </span>
            <span> <em className={
                props.rating>=5
                ?"fa fa-star"
                :props.rating>=4.5
                ?"fas fa-star-half-alt"
                :"fas fa-star-alt"
                }></em> 
            </span>
            <span>
                {props.numReviews+' reviews'} 
            </span>
        </div>
    );
}

export default Rating;