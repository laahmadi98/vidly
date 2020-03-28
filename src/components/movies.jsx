import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import Like from './common/like';




class Movies extends Component {
    state = { 
        movies : getMovies(),
     }

     handleDelete = (id) => {
       const movies =  this.state.movies.filter(movie => movie._id !== id);
        return this.setState({movies});
     };

     handleLiked = (movie) => {
         const movies = [...this.state.movies];
         const index = movies.indexOf(movie);
         movies[index] = {...movie};
         movies[index].liked = !(movies[index].liked);
         this.setState({movies})

     };
   
    render() { 
        const {length : count} = this.state.movies;
        
        if (count === 0)
        return <p>There are no movie in the database</p>
        
     
        
        return (
            <React.Fragment>
                <h6>Showing {count} movies in the database</h6>
                <table className="table">
                    <thead>
                        <tr >
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                     { this.state.movies.map(movie =>
                          <tr key={movie._id}>
                              <td>{movie.title}</td>
                              <td>{movie.genre.name}</td>
                              <td>{movie.numberInStock}</td>
                              <td>{movie.dailyRentalRate}</td>
                              <td>
                                  <Like liked = {movie.liked} onClick={() => this.handleLiked(movie)}/>
                              </td>
                              <td>
                                  <button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(movie._id)}>Delete</button>
                              </td>
                              
                          </tr>)}
                    </tbody>
                </table>
    
            </React.Fragment>
          );
    }
}
 
export default Movies;