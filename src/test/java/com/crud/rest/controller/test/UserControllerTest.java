/**
 * 
 */
package com.crud.rest.controller.test;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.mockito.Mockito.doNothing;

import java.io.File;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.Spy;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.util.ResourceUtils;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import static org.hamcrest.Matchers.*;

import com.crud.rest.beans.UserLogin;
import com.crud.rest.controllers.UserController;
import com.crud.rest.library.Constants;
import com.crud.rest.library.DataProviderUtil;
import com.crud.rest.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;



/**
 * @author Archana
 *
 */
public class UserControllerTest {

	@InjectMocks
	private UserController userController;

	@Mock
	private UserService userService;

	private MockMvc mockMvc;

	@Spy
	private List<Map<String,String>> userData= new ArrayList<Map<String,String>>();

	@Before
	public void setup() {
		MockitoAnnotations.initMocks(this);

		mockMvc = MockMvcBuilders.standaloneSetup(userController).build();
		userData=DataProviderUtil.validateUserData();
	}

	@Test
	public void getUserTest() throws Exception {
		UserLogin user=new UserLogin();
		int userid=Integer.parseInt(userData.get(0).get(Constants.USERID));
		user.setUserId(userid);
		user.setFirstName(userData.get(0).get(Constants.FIRSTNAME));
		user.setLastName(userData.get(0).get(Constants.LASTNAME));
		user.setEmailId(userData.get(0).get(Constants.EMAILID));
		user.setPassword(userData.get(0).get(Constants.PASSWORD));
		user.setType(userData.get(0).get(Constants.TYPE));

		when(userService.findById(userid)).thenReturn(user);
		String url="/user/"+userid;
		mockMvc.perform(get(url))
		.andDo(print())
		.andExpect(status().isOk());
	}

	@Test
	public void getUserByEMailidTest() throws Exception {
		UserLogin user=new UserLogin();
		int userid=Integer.parseInt(userData.get(1).get(Constants.USERID));
		user.setUserId(userid);
		user.setFirstName(userData.get(1).get(Constants.FIRSTNAME));
		user.setLastName(userData.get(1).get(Constants.LASTNAME));
		user.setEmailId(userData.get(1).get(Constants.EMAILID));
		user.setPassword(userData.get(1).get(Constants.PASSWORD));
		user.setType(userData.get(1).get(Constants.TYPE));

		String email = StringUtils.substringBefore(userData.get(1).get(Constants.EMAILID), "@");

		when(userService.findByEmailId(email)).thenReturn(user);
		String url="/user/email/"+email;
		mockMvc.perform(get(url))
		.andDo(print())
		.andExpect(jsonPath("$.userId",is(userid)))
		.andExpect(status().isOk());
	}

	@Test
	public void listAllUsersTest() throws Exception{

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

		mockMvc.perform(get("/users"))
		.andDo(print())
		.andExpect(jsonPath("$", hasSize(userList.size())))
		.andExpect(status().isOk());
	}

	@Test
	public void updateUserTest() throws Exception {

		UserLogin user = new UserLogin();
		int userid=Integer.parseInt(userData.get(1).get(Constants.USERID));
		user.setUserId(userid);
		user.setFirstName(userData.get(1).get(Constants.FIRSTNAME));
		user.setLastName(userData.get(1).get(Constants.LASTNAME));
		user.setEmailId(userData.get(1).get(Constants.EMAILID));
		user.setPassword(userData.get(1).get(Constants.PASSWORD));
		user.setType(userData.get(1).get(Constants.TYPE));
		
		when(userService.findById(user.getUserId())).thenReturn(user);
		doNothing().when(userService).updateUser(user);

		String json = new ObjectMapper().writeValueAsString(user);
		String url="/user/"+userid;
		mockMvc.perform(
				(put(url).contentType(MediaType.APPLICATION_JSON))
				.content(json))
				.andDo(print())
				.andExpect(status().isOk());
	}

	@Test
	public void getUserByEMailidTest_NOTFound() throws Exception {
		
		String email= "dummy";
		String url="/user/email/"+email;
		mockMvc.perform(get(url))
		.andDo(print())
		.andExpect(status().isNotFound());
	}
	
	@Test
	public void getUserTest_NOTFOUND() throws Exception {
		int listSize=userData.size()-2;
		System.out.println(userData.size()+"\n"+userData.get(listSize));
		int userid=Integer.parseInt(userData.get(listSize).get(Constants.USERID));
		String url="/user/"+(userid+1);
		mockMvc.perform(get(url))
		.andDo(print())
		.andExpect(status().isNotFound());
	}
}
