import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from "../components/moviesTable";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { Paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = id => {
    const movies = this.state.movies.filter(movie => movie._id !== id);
    return this.setState({ movies });
  };

  handleLiked = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      currentPage,
      pageSize,
      movies: allMovies,
      genres,
      selectedGenre
    } = this.state;

    console.log(selectedGenre);

    const filterd =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre.name === selectedGenre.name)
        : allMovies;

    const movies = Paginate(filterd, currentPage, pageSize);

    if (count === 0) return <p>There are no movie in the database</p>;

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={selectedGenre}
          />
        </div>

        <div className="col">
          <h6>Showing {filterd.length} movies in the database</h6>
          <MoviesTable
            movies={movies}
            onLike={this.handleLiked}
            onDelete={this.handleDelete}
          />

          <Pagination
            itemCount={filterd.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
