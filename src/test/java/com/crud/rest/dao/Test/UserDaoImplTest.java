package com.crud.rest.dao.Test;

import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.mock;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.crud.rest.beans.UserLogin;
import com.crud.rest.dao.UserDao;
import com.crud.rest.dao.UserDaoImpl;



public class UserDaoImplTest extends UserDaoImpl{
	@Mock
	private UserDao dao;
	@Mock
	private UserLogin user;
	
	@InjectMocks
	private UserDaoImpl daoImpl;
	
	private MockMvc mockMvc;
	
	
	@Before
	public void setupMock(){
		 MockitoAnnotations.initMocks(this);
		   mockMvc = MockMvcBuilders.standaloneSetup(daoImpl).build();
		   user=mock(UserLogin.class);
		   dao=mock(UserDao.class);
	}
	
	@Test
	public void testDao(){
	assertNotNull(user);
	assertNotNull(dao);
	}

}
