/**
 * 
 */
package com.crud.rest.controller.test;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.File;
import java.nio.file.Files;
import java.sql.Date;
import java.text.SimpleDateFormat;
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
import com.crud.rest.controllers.RatingController;
import com.crud.rest.library.Constants;
import com.crud.rest.library.DataProviderUtil;
import com.crud.rest.service.RatingService;


/**
 * @author Archana
 *
 */
public class RatingControllerTest {

	@InjectMocks
	private RatingController ratingController;

	@Mock
	private RatingService ratingService;

	private MockMvc mockMvc;

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

	@Before
	public void setup() {
		MockitoAnnotations.initMocks(this);

		mockMvc = MockMvcBuilders.standaloneSetup(ratingController).build();

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
		when(ratingService.cosineSimilarity(userid)).thenReturn(moviesList);
		String url = "/cosine/"+userid;
		mockMvc.perform(get(url))
		.andDo(print())
		.andExpect(jsonPath("$", hasSize(moviesList.size())))
		.andExpect(status().isOk());
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
		when(ratingService.findRatingByUserid(userid)).thenReturn(moviesList);
		String url = "/rating/user/"+userid;
		mockMvc.perform(get(url))
		.andDo(print())
		.andExpect(jsonPath("$", hasSize(moviesList.size())))
		.andExpect(status().isOk());
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
		
		when(ratingService.numberofUsersRatedMovie(movieid)).thenReturn(listRatings);
		String url = "/moviestat/"+movieid;
		mockMvc.perform(get(url))
		.andDo(print())
		.andExpect(jsonPath("$", hasSize(listRatings.size())))
		.andExpect(status().isOk());
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
		when(ratingService.numberofMoviesUserRated(userid)).thenReturn(moviesList);
		String url = "/userstat/"+userid;
		mockMvc.perform(get(url))
		.andDo(print())
		.andExpect(jsonPath("$", hasSize(moviesList.size())))
		.andExpect(status().isOk());
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
		when(ratingService.trendingMovieByLanguage()).thenReturn(moviesList);
		String url = "/language_trend";
		mockMvc.perform(get(url))
		.andDo(print())
		.andExpect(jsonPath("$", hasSize(moviesList.size())))
		.andExpect(status().isOk());
	}
	
	
	@Test
	public void listtopRatedMovieTest() throws Exception {

		Movie movie ;
		List<Movie> moviesList= new ArrayList<Movie>();
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
		when(ratingService.topRatedMovies()).thenReturn(moviesList);
		String url = "/recommeded/topRatedMovies";
		mockMvc.perform(get(url))
		.andDo(print())
		.andExpect(status().isOk());
	}
}
