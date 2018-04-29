package com.crud.rest.dao.Test;

import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.mock;

import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.crud.rest.beans.Movie;
import com.crud.rest.dao.MovieDao;
import com.crud.rest.dao.MovieDaoImpl;


public class MovieDaoImplTest extends MovieDaoImpl{
	
	@Mock
	private MovieDao dao;
	@Mock
	private Movie movie;
	
	@InjectMocks
	private MovieDaoImpl daoImpl;
	
	private MockMvc mockMvc;
	
	
	@org.junit.Before
	public void setupMock(){
		 MockitoAnnotations.initMocks(this);
		   mockMvc = MockMvcBuilders.standaloneSetup(daoImpl).build();
		   movie=mock(Movie.class);
		   dao=mock(MovieDao.class);
	}
	
	@Test
	public void testDao(){
	assertNotNull(movie);
	assertNotNull(dao);
	}

}
