import React from 'react';
import { MovieProvider } from '../Services/MovieProvider';
import { MovieCardComponent } from './MovieCardComponent';
import { Movie } from '../Contracts/Movie';

export interface PopularMoviesComponentProps {

}

export interface PopularMoviesComponentState {
    movies?: Movie[];
    movieCardComponents?: MovieCardComponent[];
}

export class PopularMoviesComponent extends React.Component<PopularMoviesComponentProps, PopularMoviesComponentState> {
    private readonly movieProvider: MovieProvider;

    constructor(props: PopularMoviesComponentProps) {
        super(props);
        this.state = {};
        this.movieProvider = new MovieProvider();
    }

    private updateMoviesStateObject(movies: Movie[] | undefined) {
        if (movies) {
            const newState = { ...this.state, movies: movies };
            this.setState(newState);
        }
    }

    private updateMovieCardComonentStateObject(movieCardComponents: MovieCardComponent[] | undefined) {
        if (movieCardComponents && movieCardComponents.length) {
            const newState = { ...this.state, movieCardComponents: movieCardComponents };
            this.setState(newState);
        }
    }

    private getMovies() {
        this.movieProvider.getPopularMovies()
            .then(response => {
                const { results } = response.data;

                this.updateMoviesStateObject(results);
            })
            .catch(error => console.log(error));
    }

    private fillMovieCardComponents() {
        const movieComponents: MovieCardComponent[] = [];
        const { movies = [] } = this.state;

        for (let i = 0; i < movies.length; i++) {
            const movieComponent = new MovieCardComponent({ movie: movies[i] });
            movieComponents.push(movieComponent);
        }

        this.updateMovieCardComonentStateObject(movieComponents);
    }

    render() {
        if (!this.state.movies) {
            this.getMovies();
        }

        if (!this.state.movieCardComponents || !this.state.movieCardComponents.length) {
            this.fillMovieCardComponents();
        }

        const markup = <div>
            {this.state.movieCardComponents
                && this.state.movieCardComponents.map((x, i) => this.state.movies
                    && <div key={i}><MovieCardComponent movie={this.state.movies[i]} /></div>)}
        </div>;

        return (markup);
    }
}