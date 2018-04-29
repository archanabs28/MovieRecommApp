package com.crud.rest.controllers;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
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
import com.crud.rest.beans.Search;
import com.crud.rest.service.SearchService;


/**
 * @author Archana
 *
 */
@RestController
public class SearchController {
	
	@Autowired
	private SearchService searchService;
	
	
	
	// Add Searchword
		@RequestMapping(value = "/search/new", method = RequestMethod.POST)
		public ResponseEntity<Void> addSearchData(@RequestBody Search search, UriComponentsBuilder ucb) {
			if (searchService.isSearchExist(search)) {
				return new ResponseEntity<Void>(HttpStatus.CONFLICT);
			} else {
				Timestamp timestamp = new Timestamp(System.currentTimeMillis());
				search.setTime(timestamp);
				searchService.saveSearch(search);
				HttpHeaders headers = new HttpHeaders();
				headers.setLocation(ucb.path("/search/{word}").buildAndExpand(search.getsearchWord()).toUri());
				return new ResponseEntity<Void>(HttpStatus.CREATED);
			}
		}

		@RequestMapping(value = "/search-movie/{keyword}", method = RequestMethod.GET)
		public ResponseEntity<List<Movie>> listMovieBasedonSearch(@PathVariable("keyword") String keyword) {
			List<Movie> movies = searchService.getMovieDataFromSearchWord(keyword);
			if (movies.isEmpty()) {
				return new ResponseEntity<List<Movie>>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<List<Movie>>(movies, HttpStatus.OK);
		}
		
		@RequestMapping(value = "/recommend/presearch/{userid}", method = RequestMethod.GET)
		public ResponseEntity<List<Movie>> recommendedMovieBasedonPrevSearch(@PathVariable("userid") int userid) {
			List<Movie> movies = searchService.recommendedBasedonPrevSearch(userid);
			if (movies.isEmpty()) {
				return new ResponseEntity<List<Movie>>(HttpStatus.NO_CONTENT);
				
			}
			return new ResponseEntity<List<Movie>>(movies, HttpStatus.OK);
		}
		
		@RequestMapping(value = "/recommend/favorite/{userid}", method = RequestMethod.GET)
		public ResponseEntity<List<Movie>> recommendedMovieBasedonFavorite(@PathVariable("userid") int userid) {
			List<Movie> movies = searchService.recommendedBasedonUserFavorite(userid);
			if (movies.isEmpty()) {
				return new ResponseEntity<List<Movie>>(HttpStatus.NO_CONTENT);
				
			}
			return new ResponseEntity<List<Movie>>(movies, HttpStatus.OK);
		}
		
		@RequestMapping(value = "/recommend/watched/{userid}", method = RequestMethod.GET)
		public ResponseEntity<List<Movie>> recommendedMovieBasedonWatched(@PathVariable("userid") int userid) {
			List<Movie> movies = searchService.recommendedBasedonUserWatched(userid);
			if (movies.isEmpty()) {
				return new ResponseEntity<List<Movie>>(HttpStatus.NO_CONTENT);
				
			}
			return new ResponseEntity<List<Movie>>(movies, HttpStatus.OK);
		}
}
