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
import com.crud.rest.service.UserFavListService;


/**
 * @author Archana
 *
 */
@RestController
public class UserFavListController {
	
	@Autowired
	private UserFavListService userFavListService;

	public void setUserFavListService(UserFavListService userFavListService) {
		this.userFavListService = userFavListService;
	}
	
	@RequestMapping(value = "/userfav/{userid}", method = RequestMethod.GET)
	public ResponseEntity<List<Movie>> listUserFavoriteMovie(@PathVariable("userid") int userid) {
		List<Movie> userFavList = userFavListService.getFavList(userid);
		if (userFavList.isEmpty()) {
			return new ResponseEntity<List<Movie>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Movie>>(userFavList, HttpStatus.OK);
	}

	
	@RequestMapping(value = "/userwat/{userid}", method = RequestMethod.GET)
	public ResponseEntity<List<Movie>> listUserWatchedMovie(@PathVariable("userid") int userid) {
		List<Movie> userFavList = userFavListService.getWatchedList(userid);
		if (userFavList.isEmpty()) {
			return new ResponseEntity<List<Movie>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Movie>>(userFavList, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/userfav/new", method = RequestMethod.POST)
	public ResponseEntity<Void> addUserPreference(@RequestBody UserFavList userFav, UriComponentsBuilder ucb) {
		
			userFavListService.saveUserPreference(userFav);
			HttpHeaders headers = new HttpHeaders();
			headers.setLocation(ucb.path("/userfav/{id}").buildAndExpand(userFav.getUserid()+"/"+userFav.getMovieid()).toUri());
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		
	}
	
	@RequestMapping(value = "/userprefer/{userid}", method = RequestMethod.GET)
	public ResponseEntity<List<UserFavList>> listUserPreferenceMovie(@PathVariable("userid") int userid) {
		List<UserFavList> userFavList = userFavListService.userPreferenceList(userid);
		if (userFavList.isEmpty()) {
			return new ResponseEntity<List<UserFavList>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<UserFavList>>(userFavList, HttpStatus.OK);
	}
	
	
}
