package com.crud.rest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.crud.rest.beans.UserLogin;

import com.crud.rest.dao.UserDao;

/**
 * @author Archana
 *
 */
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserDao userDao;
	
	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}


	@Override
	public UserLogin findById(int id) {
		// TODO Auto-generated method stub
		return userDao.findById(id);
	}

	@Override
	public UserLogin findByName(String name) {
		// TODO Auto-generated method stub
		return userDao.findByName(name);
	}

	@Override
	public void saveUser(UserLogin user) {
		// TODO Auto-generated method stub
		userDao.saveUser(user);
	}

	@Override
	public void updateUser(UserLogin user) {
		// TODO Auto-generated method stub
		userDao.updateUser(user);
	}


	@Override
	public List<UserLogin> findAllUser() {
		// TODO Auto-generated method stub
		return userDao.findAllUser();
	}


	@Override
	public boolean isUserExist(UserLogin user) {
		// TODO Auto-generated method stub
		return userDao.isUserExist(user);
	}


	/* (non-Javadoc)
	 * @see com.crud.rest.service.UserService#findByEmailId(java.lang.String)
	 */
	@Override
	public UserLogin findByEmailId(String emailid) {
		// TODO Auto-generated method stub
		return userDao.findByEmailId(emailid);
	}
	

}
