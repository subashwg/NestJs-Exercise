import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { MoviesService } from './app.service.js';
import type { Movie } from './FakeDatabase.ts';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) { }

  @Get()
  getAllMovies(): Movie[] {
    return this.moviesService.getAllMovies();
  }

  @Get(':id')
  getMovieById(@Param('id') id: string): Movie | undefined {
    const movieID = +id;
    const movie = this.moviesService.findById(movieID);
    if (!movie) {
      throw new NotFoundException(`Movie not found with ID:${movieID}`);
    }
    return movie;
  }

  @Post()
  addMovie(@Body() movie: Partial<Movie>): Movie {
    const movieData = movie;
    return this.moviesService.create(movieData);
  }
}
