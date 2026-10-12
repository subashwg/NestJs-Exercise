import { Injectable } from '@nestjs/common';
import { movies, Movie } from './FakeDatabase.js';
import { UndefinedForwardRefException } from '@nestjs/core/internal';


@Injectable()
export class MoviesService {
  getAllMovies() {
    return movies;
  }

  findById(movieId: number): Movie | undefined {
    return movies.find((movie) => movie.id === movieId);
  }

  create(movie: Partial<Movie>): Movie | undefined {
    const newID = movies[movies.length - 1].id + 1;
    movies.push({ id: newID, ...movie })
  }
}
