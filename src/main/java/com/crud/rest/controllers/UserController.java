package com.crud.rest.controllers;

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

import com.crud.rest.beans.UserLogin;
import com.crud.rest.service.UserService;

/**
 * @author Archana
 *
 */
@RestController
public class UserController {
	@Autowired
	private UserService userService;

	//setter for UserService
	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	// Add User
	@RequestMapping(value = "/user/new", method = RequestMethod.POST)
	public ResponseEntity<Void> addUser(@RequestBody UserLogin user, UriComponentsBuilder ucb) {
		if (userService.isUserExist(user)) {
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		} else {

			userService.saveUser(user);
			HttpHeaders headers = new HttpHeaders();
			headers.setLocation(ucb.path("/user/{id}").buildAndExpand(user.getUserId()).toUri());
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		}
	}

	// Get Single User
	@RequestMapping(value = "/user/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<UserLogin> getUser(@PathVariable("id") int id) {

		UserLogin user = userService.findById(id);
		if (user == null) {
			return new ResponseEntity<UserLogin>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<UserLogin>(user, HttpStatus.OK);
	}

	@RequestMapping(value = "/user/email/{emailid}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<UserLogin> getUserByEMailid(@PathVariable("emailid") String emailid) {

		UserLogin user = userService.findByEmailId(emailid);
		if (user == null) {
			return new ResponseEntity<UserLogin>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<UserLogin>(user, HttpStatus.OK);
	}
	// Get All Users
	@RequestMapping(value = "/users", method = RequestMethod.GET)
	public ResponseEntity<List<UserLogin>> listAllUsers() {
		List<UserLogin> users = userService.findAllUser();
		if (users.isEmpty()) {
			return new ResponseEntity<List<UserLogin>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<UserLogin>>(users, HttpStatus.OK);
	}

	// Update User
	@RequestMapping(value = "/user/{id}", method = RequestMethod.PUT)
	public ResponseEntity<UserLogin> updateUser(@PathVariable("id") int id, @RequestBody UserLogin user) {

		UserLogin us = userService.findById(id);

		if (user == null) {
			return new ResponseEntity<UserLogin>(HttpStatus.NOT_FOUND);
		}

		us.setFirstName(user.getFirstName());
		us.setLastName(user.getLastName());
		us.setEmailId(user.getEmailId());
		us.setPassword(user.getPassword());
		us.setType(user.getType());
		
		userService.updateUser(us);
		return new ResponseEntity<UserLogin>(us, HttpStatus.OK);
	}


}
