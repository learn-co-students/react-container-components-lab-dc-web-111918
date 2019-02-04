import React from 'react'

const MovieReviews = ({reviews}) => (
    <div className='review-list'>
        {reviews.map((review, index) => Review(review, index))}
     </div>
)

const Review = ({display_title, summary_short}, index) => (
    <div key={index} className='review'>
         <h3>{display_title}</h3>
         <p>{summary_short}</p>
     </div>
)

export default MovieReviews
