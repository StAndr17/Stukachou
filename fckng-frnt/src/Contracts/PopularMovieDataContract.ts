import { Movie } from "./Movie";

export interface PopularMovieDataContract {
    page?: number;
    total_results?: number;
    total_pages?: number;
    results?: Movie[]
}