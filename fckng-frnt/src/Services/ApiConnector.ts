import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

/**
 * Type that describes available api urls in app
 */
export interface MovieDbApiUrls {
    getPopular?: string;
    getDetails?: string;
}

/**
 * Type for sending http requests to MovieDb API
 */
export class ApiConnector {

    /**
     * Method to send requests
     * @param config requests settings
     */
    public sendRequest<TResponse>(config?: AxiosRequestConfig): AxiosPromise<TResponse> {
        if (!config) {
            return Promise.reject();
        }

        return axios(config);
    }
}

/**
 * API key for passing auth
 */
export const API_KEY: string = '4204be35b1fd61a4a09a715dff99fbd6';

/**
 * MovieDb API string
 */
export const API_BASE_URL: string = 'https://api.themoviedb.org/3';

/**
 * Object with available API methods in fkng-frnt app to sending to MovieDb API
 */
export const AVAILABLE_API_METHODS: MovieDbApiUrls = {
    getPopular: '/movie/popular',
    getDetails: '/movie'
};