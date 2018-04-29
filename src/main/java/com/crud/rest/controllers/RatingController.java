package com.crud.rest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.crud.rest.beans.Movie;
import com.crud.rest.beans.Rating;
import com.crud.rest.beans.UserFavList;
import com.crud.rest.service.RatingService;


/**
 * @author Archana
 *
 */

@RestController
public class RatingController {

	/**
	 * @param args
	 */
	@Autowired
	private RatingService ratingService;

	/**
	 * @param ratingService the ratingService to set
	 */
	public void setRatingService(RatingService ratingService) {
		this.ratingService = ratingService;
	}


	// Add Movie
		@RequestMapping(value = "/rating/new", method = RequestMethod.POST)
		public ResponseEntity<Void> addMovie(@RequestBody Rating rating, UriComponentsBuilder ucb) {
			if (ratingService.isRatingExist(rating)) {
				return new ResponseEntity<Void>(HttpStatus.CONFLICT);
			} else {

				ratingService.saveRating(rating);
				HttpHeaders headers = new HttpHeaders();
				headers.setLocation(ucb.path("/rating/{rating}").buildAndExpand(rating.getRating()).toUri());
				return new ResponseEntity<Void>(HttpStatus.CREATED);
			}
		}
		
		@RequestMapping(value = "/recommeded/topRatedMovies", method = RequestMethod.GET)
		public ResponseEntity<List<Movie>> listtopRatedMovie() {
			List<Movie> movies = ratingService.topRatedMovies();
			if (movies.isEmpty()) {
				return new ResponseEntity<List<Movie>>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<List<Movie>>(movies, HttpStatus.OK);
		}
		
		@RequestMapping(value = "/rating/user/{userid}", method = RequestMethod.GET)
		public ResponseEntity<List<Movie>> listMoviedbyUser(@PathVariable("userid") int userid) {
			List<Movie> movies = ratingService.findRatingByUserid(userid);
			//List<Movie> movies = ratingService.cosineSimilarity(userid);
			if (movies.isEmpty()) {
				return new ResponseEntity<List<Movie>>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<List<Movie>>(movies, HttpStatus.OK);
		}
				
		@RequestMapping(value = "/cosine/{userid}", method = RequestMethod.GET)
		public ResponseEntity<List<Movie>> listMovieByRecommendation(@PathVariable("userid") int userid) {
			List<Movie> movies = ratingService.cosineSimilarity(userid);
			if (movies.isEmpty()) {
				return new ResponseEntity<List<Movie>>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<List<Movie>>(movies, HttpStatus.OK);
		}
		

		@RequestMapping(value = "/moviestat/{movieid}", method = RequestMethod.GET)
		public ResponseEntity<List<Rating>> countNumberofUsersRateMovie(@PathVariable("movieid") int movieid) {
			List<Rating> userRating = ratingService.numberofUsersRatedMovie(movieid);
			if (userRating.isEmpty()) {
				return new ResponseEntity<List<Rating>>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<List<Rating>>(userRating, HttpStatus.OK);
		}
		
		@RequestMapping(value = "/userstat/{userid}", method = RequestMethod.GET)
		public ResponseEntity<List<Movie>> countUsersRatedMovie(@PathVariable("userid") int userid) {
			List<Movie> userRating = ratingService.numberofMoviesUserRated(userid);
			if (userRating.isEmpty()) {
				return new ResponseEntity<List<Movie>>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<List<Movie>>(userRating, HttpStatus.OK);
		}
		
		@RequestMapping(value = "/language_trend", method = RequestMethod.GET)
		public ResponseEntity<List<Movie>> trendMovieByLanguage() {
			List<Movie> trendLanguage = ratingService.trendingMovieByLanguage();
			if (trendLanguage.isEmpty()) {
				return new ResponseEntity<List<Movie>>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<List<Movie>>(trendLanguage, HttpStatus.OK);
		}
		
		
}
