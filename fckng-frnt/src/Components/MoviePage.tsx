import React from 'react';
import { MovieProvider } from './../Services/MovieProvider';
import { MovieComponent } from './Movie';

export class MoviePageComponent extends React.Component {
    constructor(private readonly movieProvider: MovieProvider) {
        super({});
        this.movieProvider = new MovieProvider();
    }

    render() {
        const movieComponents: MovieComponent[] = [];
        const movies = this.movieProvider.getMovies();

        movies.forEach(movie => {
            const movieComponent = new MovieComponent({
                adult: movie.adult,
                backdrop_path: movie.backdrop_path,
                genre_ids: movie.genre_ids,
                id: movie.id,
                original_language: movie.original_language,
                original_title: movie.original_title,
                overview: movie.overview,
                popularity: movie.popularity,
                poster_path: movie.poster_path,
                release_date: movie.release_date,
                title: movie.title,
                video: movie.video,
                vote_average: movie.vote_average,
                vote_count: movie.vote_count
            });

            movieComponents.push(movieComponent);
        });

        const markup = <div>{movieComponents.map((x, i) => <div key={i}>{x.render()}</div>)}</div>;

        return (markup);
    }
}