package com.crud.rest.service;

import java.util.List;

import com.crud.rest.beans.UserLogin;

/**
 * @author Archana
 *
 */
public interface UserService {
	UserLogin findById(int id);
	
	UserLogin findByEmailId(String emailid);

	UserLogin findByName(String name);

	void saveUser(UserLogin user);

	void updateUser(UserLogin user);


	List<UserLogin> findAllUser();


	boolean isUserExist(UserLogin user);

}
