import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'iyUA19N2TKAISPNJiayPn53fizQjyAM3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ''
    }
    
    handleFormChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${URL}${this.state.searchTerm}`)
        .then(res => res.json())
        .then(reviewsData => {
            this.setState({reviews: reviewsData.results})
        })

    }
    

    render(){
        return (
            <div className='searchable-movie-reviews'>
                <form onChange={this.handleFormChange} onSubmit={this.handleSubmit}>
                    <input name='input' />
                    <button type='submit'>Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
