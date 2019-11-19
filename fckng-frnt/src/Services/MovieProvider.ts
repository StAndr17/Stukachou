import { AxiosRequestConfig, AxiosPromise } from "axios";
import { API_BASE_URL, AVAILABLE_API_METHODS, API_KEY, ApiConnector } from "./ApiConnector";
import { PopularMovieDataContract } from "../Contracts/PopularMovieDataContract";
import { Movie } from "../Contracts/Movie";

/**
 * Movie provider for getting data for using it in app
 */
export class MovieProvider {
    private readonly apiConnector: ApiConnector;

    constructor() {
        this.apiConnector = new ApiConnector();
    }

    /**
     * Method for getting popular movies
     */
    public getPopularMovies(): AxiosPromise<PopularMovieDataContract> {
        const requestSettings: AxiosRequestConfig = {
            method: 'GET',
            baseURL: API_BASE_URL,
            url: AVAILABLE_API_METHODS.getPopular,
            params: {
                api_key: API_KEY
            }
        };

        return this.apiConnector.sendRequest<PopularMovieDataContract>(requestSettings);
    }

    /**
     * Method for getting movie details
     * @param movieId requesting movie id
     */
    public getMovieDetails(movieId: number): AxiosPromise<Movie> {
        if (!movieId) {
            return Promise.reject();
        }

        const requestSettings: AxiosRequestConfig = {
            method: 'GET',
            baseURL: API_BASE_URL,
            url: AVAILABLE_API_METHODS.getDetails + `/${movieId}`,
            params: {
                api_key: API_KEY
            }
        };

        return this.apiConnector.sendRequest<Movie>(requestSettings);
    }
}