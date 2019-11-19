import React from 'react';
import './../Styles/AppStyles.css';
import { Movie } from '../Contracts/Movie';
import { Link } from 'react-router-dom';

export interface MovieCardComponentProps {
    movie?: Movie;
}

export class MovieCardComponent extends React.Component<MovieCardComponentProps> {
    render() {
        const { movie = {} } = this.props;

        return (<div className='item poster card'>
            <div className='image_content'>
                <Link to={`/movie/${movie.id}`}>Here will be poster</Link>
            </div>
            <div className='info'>
                <div className='wrapper'>
                    <div className='consensus tight'>
                        <div className='outer_ring'>
                            <div className='user_score_chart'>
                                <div className='percent'>
                                    <span className='icon'>
                                        Here will be icon
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <Link className='title result' to={`/movie/${movie.id}`}>{movie.original_title}</Link>
                        <span style={{ display: 'block' }}>{movie.release_date}</span>
                    </div>
                </div>
                <p className='overview' style={{ overflow: 'hidden' }}>
                    {movie.overview && movie.overview.length > 200 ? movie.overview.substring(0, 200) + '...' : movie.overview}
                </p>
                <p className='view_more'>
                    <Link className='result' to={`/movie/${movie.id}`}>{'More info'}</Link>
                </p>
            </div>
        </div>);
    }
}