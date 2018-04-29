package com.crud.rest.controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.crud.rest.beans.Movie;
import com.crud.rest.service.MovieService;
import com.crud.rest.service.MovieServiceImpl;


/**
 * @author Archana
 *
 */
@RestController
public class MovieController {
	
	@Autowired
	private MovieService movieService;

	//setter for MovieService
	public void setMovieService(MovieService movieService) {
		this.movieService = movieService;
	}

	// Add Movie
	@RequestMapping(value = "/movie/new", method = RequestMethod.POST)
	public ResponseEntity<Void> addMovie(@RequestBody Movie movie, UriComponentsBuilder ucb) {
		if (movieService.isMovieExist(movie)) {
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		} else {

			movieService.saveMovie(movie);
			HttpHeaders headers = new HttpHeaders();
			headers.setLocation(ucb.path("/movie/{id}").buildAndExpand(movie.getMovieId()).toUri());
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		}
	}

	// Get Single Movie
	@RequestMapping(value = "/movie/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Movie>> getMovie(@PathVariable("id") int id) {

		Movie movie = movieService.findById(id);
		List<Movie> movies = Arrays.asList(movie);
		if (movie == null) {
			return new ResponseEntity<List<Movie>>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Movie>>(movies, HttpStatus.OK);
	}

	// Get All Movie
	@RequestMapping(value = "/movies", method = RequestMethod.GET)
	public ResponseEntity<List<Movie>> listAllMovie() {
		List<Movie> movies = movieService.findAllMovie();
		if (movies.isEmpty()) {
			return new ResponseEntity<List<Movie>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Movie>>(movies, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/movie/top6/{genre}", method = RequestMethod.GET)
	public ResponseEntity<List<Movie>> listTopMovieByGenre(@PathVariable("genre") String genre) {
		List<Movie> movies = movieService.top6Movie(genre);
		if (movies.isEmpty()) {
			return new ResponseEntity<List<Movie>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Movie>>(movies, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/movie/genre/{genre}", method = RequestMethod.GET)
	public ResponseEntity<List<Movie>> listMovieByGenre(@PathVariable("genre") String genre) {
		List<Movie> movies = movieService.movieBasedonGenre(genre);
		if (movies.isEmpty()) {
			return new ResponseEntity<List<Movie>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Movie>>(movies, HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/movie/popular", method = RequestMethod.GET)
	public ResponseEntity<List<Movie>> listMovieByPopularity() {
		List<Movie> movies = movieService.movieBasedonPopularity();
		if (movies.isEmpty()) {
			return new ResponseEntity<List<Movie>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Movie>>(movies, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/movie/recent", method = RequestMethod.GET)
	public ResponseEntity<List<Movie>> recentMovies() {
		List<Movie> movies = movieService.recentMovies();
		if (movies.isEmpty()) {
			return new ResponseEntity<List<Movie>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Movie>>(movies, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/movie/top6/language/{lang}", method = RequestMethod.GET)
	public ResponseEntity<List<Movie>> listMovieByLanguage(@PathVariable("lang") String lang) {
		List<Movie> movies = movieService.movieBasedonLanguague(lang);
		if (movies.isEmpty()) {
			return new ResponseEntity<List<Movie>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Movie>>(movies, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/movie/language/{lang}", method = RequestMethod.GET)
	public ResponseEntity<List<Movie>> listAllMovieByLanguage(@PathVariable("lang") String lang) {
		List<Movie> movies = movieService.allMovieBasedonLanguague(lang);
		if (movies.isEmpty()) {
			return new ResponseEntity<List<Movie>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Movie>>(movies, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/moviesByYear", method = RequestMethod.GET)
	public ResponseEntity<List<Movie>> listofMovieCountByYear() {
		List<Movie> movies = movieService.moviesByYear();
		if (movies.isEmpty()) {
			return new ResponseEntity<List<Movie>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Movie>>(movies, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/trendingMovies", method = RequestMethod.GET)
	public ResponseEntity<List<Movie>> moviesByUserCount() {
		List<Movie> movies = movieService.trendingMovies();
		if (movies.isEmpty()) {
			return new ResponseEntity<List<Movie>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Movie>>(movies, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/topRatedMovies", method = RequestMethod.GET)
	public ResponseEntity<List<Movie>> topRatedMovies() {
		List<Movie> movies = movieService.topRatedMovies();
		if (movies.isEmpty()) {
			return new ResponseEntity<List<Movie>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Movie>>(movies, HttpStatus.OK);
	}
	
	
}

