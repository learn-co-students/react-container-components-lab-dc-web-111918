import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'iyUA19N2TKAISPNJiayPn53fizQjyAM3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

   componentDidMount(){
       fetch(URL)
       .then(res => res.json())
       .then(reviewsData => {
           this.setState({reviews: reviewsData.results})
       })
   }

    render(){
        return <div className='latest-movie-reviews'>
            <MovieReviews reviews={this.state.reviews}/>
        </div>
    }
}

export default LatestMovieReviewsContainer
