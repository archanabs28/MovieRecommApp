package com.crud.rest.dao;

import java.util.List;

import org.hibernate.SessionFactory;


import com.crud.rest.beans.UserLogin;

/**
 * @author Archana
 *
 */
public interface UserDao {
	
	UserLogin findById(int id);

	UserLogin findByEmailId(String emailid);
	
	UserLogin findByName(String name);

	void saveUser(UserLogin user);

	void updateUser(UserLogin user);


	List<UserLogin> findAllUser();


	boolean isUserExist(UserLogin user);


}
