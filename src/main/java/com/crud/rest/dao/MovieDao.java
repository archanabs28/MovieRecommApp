package com.crud.rest.dao;

import java.util.List;

import com.crud.rest.beans.Movie;



/**
 * @author Archana
 *
 */
public interface MovieDao {
	
	Movie findById(int id);

	Movie findByName(String name);

	void saveMovie(Movie movie);

	void updateMovie(Movie movie);

	List<Movie> findAllMovie();

	boolean isMovieExist(Movie movie);
	
	List<Movie> top6Movie(String genre);
	
	List<Movie> movieBasedonGenre(String genre);

	List<Movie> recentMovies();
	
	List<Movie> movieBasedonLanguague(String language);
	
	List<Movie> allMovieBasedonLanguague(String language);
	
	List<Movie> movieBasedonPopularity();
	
	List<Movie> moviesByYear();
	
	List<Movie> trendingMovies();

	List<Movie> topRatedMovies();
}
