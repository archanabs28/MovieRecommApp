package com.crud.rest.service.test;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.File;
import java.nio.file.Files;
import java.sql.Date;
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

import com.crud.rest.beans.Movie;
import com.crud.rest.beans.Rating;
import com.crud.rest.dao.RatingDao;
import com.crud.rest.library.Constants;
import com.crud.rest.library.DataProviderUtil;
import com.crud.rest.service.RatingServiceImpl;

import static org.junit.Assert.*;


public class RatingServiceImplTest {


	@Mock
	RatingDao dao;

	@InjectMocks
	RatingServiceImpl ratingService;

	@Spy
	private List<Map<String,String>> ratingData= new ArrayList<Map<String,String>>();

	@Spy
	private List<Map<String,String>> cosineData= new ArrayList<Map<String,String>>();

	@Spy
	private List<Map<String,String>> userStat= new ArrayList<Map<String,String>>();


	@Spy
	private List<Map<String,String>> movieStat= new ArrayList<Map<String,String>>();

	@Spy
	private List<Map<String,String>> languageStat= new ArrayList<Map<String,String>>();

	@Spy
	private List<Map<String,String>> movieData= new ArrayList<Map<String,String>>();


	private MockMvc mockMvc;

	@Before
	public void setUp() {
		MockitoAnnotations.initMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(ratingService).build();
		ratingData=DataProviderUtil.validateRatingData();
		cosineData=DataProviderUtil.validateCosineData();
		userStat = DataProviderUtil.validateUserStatData();
		movieStat=DataProviderUtil.validateMovieStatData();
		languageStat=DataProviderUtil.validateLanguageTrendStatData();
		movieData=DataProviderUtil.validateMovieData();
	}


	@Test
	public void listMovieByRecommendationTest() throws Exception {

		Movie movie ;
		List<Movie> moviesList= new ArrayList<Movie>();
		int userid=2;
		for(int k=0;k<cosineData.size()-1;k++){
			movie=new Movie();
			int movieId = Integer.parseInt(cosineData.get(k).get(Constants.MOVIEID));
			movie.setMovieId(movieId);
			movie.setMovieName(cosineData.get(k).get(Constants.MOVIENAME));
			movie.setBelongs_to_collection(Integer.parseInt(cosineData.get(k).get(Constants.BELONGS_TO_COLLECTION)));
			movie.setGenres(cosineData.get(k).get(Constants.GENRES));
			movie.setOriginal_language(cosineData.get(k).get(Constants.ORIGINAL_LANGUAGE));
			movie.setOverview(cosineData.get(k).get(Constants.OVERVIEW));
			movie.setPopularity(Float.parseFloat(cosineData.get(k).get(Constants.POPULARITY)));
			movie.setPoster_path(cosineData.get(k).get(Constants.POSTER_PATH));
			movie.setProductionID(cosineData.get(k).get(Constants.PRODUCTIONID));
			movie.setRuntime(Integer.parseInt(cosineData.get(k).get(Constants.RUNTIME)));
			movie.setVote_average(Float.parseFloat(cosineData.get(k).get(Constants.VOTE_AVERAGE)));
			movie.setVote_count(Integer.parseInt(cosineData.get(k).get(Constants.VOTE_COUNT)));
			moviesList.add(movie);
		}
		when(dao.cosineSimilarity(userid)).thenReturn(moviesList);
		assertEquals(ratingService.cosineSimilarity(userid), moviesList);
	}
	
	@Test
	public void listMoviedbyUserTest() throws Exception {

		Movie movie ;
		List<Movie> moviesList= new ArrayList<Movie>();
		int userid=2;
		for(int k=0;k<ratingData.size()-1;k++){
			movie=new Movie();
			int movieId = Integer.parseInt(ratingData.get(k).get(Constants.MOVIEID));
			int uid= Integer.parseInt(ratingData.get(k).get(Constants.USERID));
			if(uid==userid){
			movie.setMovieId(movieId);
			movie.setMovieName(ratingData.get(k).get(Constants.MOVIENAME));
			movie.setBelongs_to_collection(Integer.parseInt(ratingData.get(k).get(Constants.BELONGS_TO_COLLECTION)));
			movie.setGenres(ratingData.get(k).get(Constants.GENRES));
			movie.setOriginal_language(ratingData.get(k).get(Constants.ORIGINAL_LANGUAGE));
			movie.setOverview(ratingData.get(k).get(Constants.OVERVIEW));
			movie.setPopularity(Float.parseFloat(ratingData.get(k).get(Constants.POPULARITY)));
			movie.setPoster_path(ratingData.get(k).get(Constants.POSTER_PATH));
			movie.setProductionID(ratingData.get(k).get(Constants.PRODUCTIONID));
			movie.setRuntime(Integer.parseInt(ratingData.get(k).get(Constants.RUNTIME)));
			movie.setVote_average(Float.parseFloat(ratingData.get(k).get(Constants.VOTE_AVERAGE)));
			movie.setVote_count(Integer.parseInt(ratingData.get(k).get(Constants.VOTE_COUNT)));
			moviesList.add(movie);
			}
		}
		when(dao.findRatingByUserid(userid)).thenReturn(moviesList);
		assertEquals(ratingService.findRatingByUserid(userid), moviesList);
	}
	
	@Test
	public void countNumberofUsersRateMovieTest() throws Exception{
		Rating rating;
		List<Rating> listRatings= new ArrayList<Rating>();
		
		int movieid= Integer.parseInt(movieStat.get(0).get(Constants.MOVIEID));
		for(int i=0;i<movieStat.size()-1;i++){
			rating=new Rating();
			rating.setUserid(Integer.parseInt(movieStat.get(i).get(Constants.USERID)));		
			rating.setRating(Float.parseFloat(movieStat.get(i).get(Constants.RATING)));		
			rating.setMovieid(Integer.parseInt(movieStat.get(i).get(Constants.MOVIEID)));
			listRatings.add(rating);
		}
		
		when(dao.numberofUsersRatedMovie(movieid)).thenReturn(listRatings);
		assertEquals(ratingService.numberofUsersRatedMovie(movieid), listRatings);
	}

	@Test
	public void countUsersRatedMovieTest() throws Exception {

		Movie movie ;
		List<Movie> moviesList= new ArrayList<Movie>();
		int userid=3;
		for(int k=0;k<userStat.size()-1;k++){
			movie=new Movie();
			int uid= Integer.parseInt(userStat.get(k).get(Constants.USERID));
			movie.setMovieId(uid);
			movie.setMovieName(userStat.get(k).get(Constants.MOVIENAME));
			movie.setRuntime(Integer.parseInt(userStat.get(k).get(Constants.RATING)));
			moviesList.add(movie);
		}
		when(dao.numberofMoviesUserRated(userid)).thenReturn(moviesList);
		assertEquals(ratingService.numberofMoviesUserRated(userid), moviesList);
	}
	
	@Test
	public void trendMovieByLanguageTest() throws Exception {

		Movie movie ;
		List<Movie> moviesList= new ArrayList<Movie>();
		int userid=2;
		for(int k=0;k<languageStat.size()-1;k++){
			movie=new Movie();
			movie.setOriginal_language(languageStat.get(k).get(Constants.ORIGINAL_LANGUAGE));
			movie.setVote_count(Integer.parseInt(languageStat.get(k).get(Constants.USER_COUNT)));
			moviesList.add(movie);
		}
		when(dao.trendingMovieByLanguage()).thenReturn(moviesList);
		assertEquals(ratingService.trendingMovieByLanguage(), moviesList);
	}
	
	
	@Test
	public void listtopRatedMovieTest() throws Exception {

		Movie movie ;
		List<Movie> moviesList= new ArrayList<Movie>();
		System.out.println(movieData.size());
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
		when(dao.topRatedMovies()).thenReturn(moviesList);
		assertEquals(ratingService.topRatedMovies(), moviesList);
	}

}
