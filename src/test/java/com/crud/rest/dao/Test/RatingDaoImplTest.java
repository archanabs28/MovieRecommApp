package com.crud.rest.dao.Test;

import java.util.List;

import org.aspectj.lang.annotation.Before;

import com.crud.rest.beans.Movie;
import com.crud.rest.beans.Rating;
import com.crud.rest.dao.RatingDao;
import com.crud.rest.dao.RatingDaoImpl;

import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.*;
import org.mockito.MockitoAnnotations;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import static org.junit.Assert.*;


public class RatingDaoImplTest extends RatingDaoImpl{
	@Mock
	private RatingDao dao;
	@Mock
	private Rating rating;
	
	@InjectMocks
	private RatingDaoImpl daoImpl;
	
	private MockMvc mockMvc;
	
	
	@org.junit.Before
	public void setupMock(){
		 MockitoAnnotations.initMocks(this);
		   mockMvc = MockMvcBuilders.standaloneSetup(daoImpl).build();
		   rating=mock(Rating.class);
		   dao=mock(RatingDao.class);
	}
	
	@Test
	public void testDao(){
	assertNotNull(rating);
	assertNotNull(dao);
	}
	
}
