package com.crud.rest.service.test;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.File;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.Spy;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.util.ResourceUtils;

import static org.junit.Assert.*;

import com.crud.rest.beans.Movie;
import com.crud.rest.beans.UserFavList;
import com.crud.rest.dao.UserFavListDao;
import com.crud.rest.library.Constants;
import com.crud.rest.library.DataProviderUtil;
import com.crud.rest.service.UserFavListServiceImpl;


public class UserFavListServiceImplTest {

	@Mock
	UserFavListDao dao;

	@InjectMocks
	UserFavListServiceImpl userFavListService;

	private MockMvc mockMvc;

	@Spy
	private List<Map<String,String>> movieData= new ArrayList<Map<String,String>>();


	@Spy
	private List<Map<String,String>> userPreData= new ArrayList<Map<String,String>>();



	@Before
	public void setUp() {
		MockitoAnnotations.initMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(userFavListService).build();
		movieData=DataProviderUtil.validateMovieData();
		userPreData=DataProviderUtil.validateUserPreferenceData();
	}

	@Test
	public void listUserFavoriteMovieTest() throws Exception{
		Movie movie ;
		List<Movie> moviesList= new ArrayList<Movie>();
		int userid=2;
		for(int k=0;k<6;k++){
			movie=new Movie();
			int movieId = Integer.parseInt(movieData.get(k).get(Constants.MOVIEID));
			movie.setMovieId(movieId);
			movie.setMovieName(movieData.get(k).get(Constants.MOVIENAME));
			movie.setBelongs_to_collection(Integer.parseInt(movieData.get(k).get(Constants.BELONGS_TO_COLLECTION)));
			movie.setGenres(movieData.get(k).get(Constants.GENRES));
			movie.setOriginal_language(movieData.get(k).get(Constants.ORIGINAL_LANGUAGE));
			movie.setOverview(movieData.get(k).get(Constants.OVERVIEW));
			movie.setPopularity(Float.parseFloat(movieData.get(k).get(Constants.POPULARITY)));
			movie.setPoster_path(movieData.get(k).get(Constants.POSTER_PATH));
			movie.setProductionID(movieData.get(k).get(Constants.PRODUCTIONID));
			movie.setRuntime(Integer.parseInt(movieData.get(k).get(Constants.RUNTIME)));
			movie.setVote_average(Float.parseFloat(movieData.get(k).get(Constants.VOTE_AVERAGE)));
			movie.setVote_count(Integer.parseInt(movieData.get(k).get(Constants.VOTE_COUNT)));
			moviesList.add(movie);
		}

		when(dao.getFavList(userid)).thenReturn(moviesList);
		assertEquals(userFavListService.getFavList(userid), moviesList);
	}

	@Test
	public void listUserWatchedMovieTest() throws Exception{
		Movie movie ;
		List<Movie> moviesList= new ArrayList<Movie>();
		int userid=2;
		for(int k=0;k<6;k++){
			movie=new Movie();
			int movieId = Integer.parseInt(movieData.get(k).get(Constants.MOVIEID));
			movie.setMovieId(movieId);
			movie.setMovieName(movieData.get(k).get(Constants.MOVIENAME));
			movie.setBelongs_to_collection(Integer.parseInt(movieData.get(k).get(Constants.BELONGS_TO_COLLECTION)));
			movie.setGenres(movieData.get(k).get(Constants.GENRES));
			movie.setOriginal_language(movieData.get(k).get(Constants.ORIGINAL_LANGUAGE));
			movie.setOverview(movieData.get(k).get(Constants.OVERVIEW));
			movie.setPopularity(Float.parseFloat(movieData.get(k).get(Constants.POPULARITY)));
			movie.setPoster_path(movieData.get(k).get(Constants.POSTER_PATH));
			movie.setProductionID(movieData.get(k).get(Constants.PRODUCTIONID));
			movie.setRuntime(Integer.parseInt(movieData.get(k).get(Constants.RUNTIME)));
			movie.setVote_average(Float.parseFloat(movieData.get(k).get(Constants.VOTE_AVERAGE)));
			movie.setVote_count(Integer.parseInt(movieData.get(k).get(Constants.VOTE_COUNT)));
			moviesList.add(movie);
		}
		when(dao.getWatchedList(userid)).thenReturn(moviesList);
		assertEquals(userFavListService.getWatchedList(userid), moviesList);

	}

	@Test
	public void listUserPreferenceMovieTest() throws Exception{
		UserFavList userFav;
		List<UserFavList> userFavList= new ArrayList<UserFavList>();
		int userid=Integer.parseInt(userPreData.get(0).get(Constants.USERID));
		for(int k=0;k<userPreData.size()-1;k++){
			userFav=new UserFavList();
			int movieid = Integer.parseInt(userPreData.get(k).get(Constants.MOVIE_COUNT));
			userFav.setMovieid(movieid);
			userFav.setUserid(Integer.parseInt(userPreData.get(k).get(Constants.USERID)));
			userFav.setType(userPreData.get(k).get(Constants.TYPE));
			userFavList.add(userFav);

		}
		when(dao.userPreferenceList(userid)).thenReturn(userFavList);
		assertEquals(userFavListService.userPreferenceList(userid), userFavList);

	}

}
