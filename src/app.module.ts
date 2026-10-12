import { Module } from '@nestjs/common';
import { MoviesController } from './app.controller.js';
import { MoviesService } from './app.service.js';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule { }
