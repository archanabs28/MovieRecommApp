package com.crud.rest.service.test;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.Spy;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.util.ResourceUtils;

import com.crud.rest.beans.UserLogin;
import com.crud.rest.dao.UserDao;
import com.crud.rest.library.Constants;
import com.crud.rest.library.DataProviderUtil;
import com.crud.rest.service.UserServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;

import static org.junit.Assert.*;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class UserServiceImplTest {

	@Mock
	UserDao dao;

	@InjectMocks
	UserServiceImpl userService;

	@Spy
	private List<Map<String,String>> userData= new ArrayList<Map<String,String>>();

	private MockMvc mockMvc;

	@Before
	public void setUp() {
		MockitoAnnotations.initMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(userService).build();
		userData=DataProviderUtil.validateUserData();
	}

	@Test
	public void getUserServiceTest() {
		UserLogin user=new UserLogin();
		int userid=Integer.parseInt(userData.get(0).get(Constants.USERID));
		user.setUserId(userid);
		user.setFirstName(userData.get(0).get(Constants.FIRSTNAME));
		user.setLastName(userData.get(0).get(Constants.LASTNAME));
		user.setEmailId(userData.get(0).get(Constants.EMAILID));
		user.setPassword(userData.get(0).get(Constants.PASSWORD));
		user.setType(userData.get(0).get(Constants.TYPE));

		when(dao.findById(userid)).thenReturn(user);
		assertEquals(userService.findById(userid), user);

	}

	@Test
	public void getUserServiceByEMailidTest()  {
		UserLogin user=new UserLogin();
		int userid=Integer.parseInt(userData.get(1).get(Constants.USERID));
		user.setUserId(userid);
		user.setFirstName(userData.get(1).get(Constants.FIRSTNAME));
		user.setLastName(userData.get(1).get(Constants.LASTNAME));
		user.setEmailId(userData.get(1).get(Constants.EMAILID));
		user.setPassword(userData.get(1).get(Constants.PASSWORD));
		user.setType(userData.get(1).get(Constants.TYPE));

		String email = StringUtils.substringBefore(userData.get(1).get(Constants.EMAILID), "@");

		when(dao.findByEmailId(email)).thenReturn(user);
		assertEquals(userService.findByEmailId(email), user);

	}


	@Test
	public void listOfUsersdata() {
		List<UserLogin> userList=new ArrayList<UserLogin>();
		UserLogin user;

		for(int k=0;k<userData.size()-1;k++){
			user = new UserLogin();
			String uid = userData.get(k).get(Constants.USERID);
			int id = Integer.parseInt(uid);
			user.setUserId(id);
			user.setFirstName(userData.get(k).get(Constants.FIRSTNAME));
			user.setLastName(userData.get(k).get(Constants.LASTNAME));
			user.setEmailId(userData.get(k).get(Constants.EMAILID));
			user.setPassword(userData.get(k).get(Constants.PASSWORD));
			user.setType(userData.get(k).get(Constants.PASSWORD));
			userList.add(user);
		}
		when(userService.findAllUser()).thenReturn(userList);
		
		assertEquals(userService.findAllUser(), userList);
	}
	
	@Test
	public void updateUserServiceTest()  {

		UserLogin user = new UserLogin();
		int userid=Integer.parseInt(userData.get(1).get(Constants.USERID));
		user.setUserId(userid);
		user.setFirstName(userData.get(1).get(Constants.FIRSTNAME));
		user.setLastName(userData.get(1).get(Constants.LASTNAME));
		user.setEmailId(userData.get(1).get(Constants.EMAILID));
		user.setPassword(userData.get(1).get(Constants.PASSWORD));
		user.setType(userData.get(1).get(Constants.TYPE));
		
		when(userService.findById(user.getUserId())).thenReturn(user);
	//	doNothing().when(userService).updateUser(user);
		assertEquals(userService.findById(user.getUserId()), user);

	}
	
	@Test
	public void isUserServiceExistTest(){
		
		UserLogin user=new UserLogin();
		int userid=Integer.parseInt(userData.get(1).get(Constants.USERID));
		user.setUserId(userid);
		user.setFirstName(userData.get(1).get(Constants.FIRSTNAME));
		user.setLastName(userData.get(1).get(Constants.LASTNAME));
		user.setEmailId(userData.get(1).get(Constants.EMAILID));
		user.setPassword(userData.get(1).get(Constants.PASSWORD));
		user.setType(userData.get(1).get(Constants.TYPE));

		String email = StringUtils.substringBefore(userData.get(1).get(Constants.EMAILID), "@");

		when(dao.isUserExist(user)).thenReturn(true);
		assertEquals(userService.isUserExist(user), true);

	}


}
