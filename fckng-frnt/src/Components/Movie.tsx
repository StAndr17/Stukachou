import React from 'react';
import './../Styles/AppStyles.css';

export interface MovieComponentProps {
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
}

export class MovieComponent extends React.Component<MovieComponentProps> {
    constructor(props: MovieComponentProps) {
        super(props);
    }

    render() {
        return (<div className='item poster card'>
            <div className='image_content'>
                <a>Here will be poster</a>
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
                        <a className='title result'>{this.props.original_title}</a>
                        <span style={{display: 'block'}}>{this.props.release_date}</span>
                    </div>
                </div>
                <p className='overview' style={{overflow: 'hidden'}}>
                    {this.props.overview.length > 200 ? this.props.overview.substring(0, 200) + '...' : this.props.overview}
                </p>
                <p className='view_more'>
                    <a className='result'>
                        More info
                    </a>
                </p>
            </div>
        </div>);
    }
}