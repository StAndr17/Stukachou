import { Movie } from "../Contracts/Movie";
import * as FakeData from '../Contracts/FakeData';

export class MovieProvider {
    public getMovies() : Movie[] {
        return FakeData.default.results;
    }
}