/**
 * 
 */
package com.crud.rest.controller.test;

import java.io.File;
import java.nio.file.Files;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

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
import com.crud.rest.controllers.MovieController;
import com.crud.rest.library.Constants;
import com.crud.rest.library.DataProviderUtil;
import com.crud.rest.service.MovieService;
import com.fasterxml.jackson.databind.ObjectMapper;

import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * @author Archana
 *
 */

public class MovieControllerTest {

	@InjectMocks
	private MovieController controller;

	@Mock
	private MovieService movieService;

	private MockMvc mockMvc;

	@Spy
	private List<Map<String,String>> movieData= new ArrayList<Map<String,String>>();
	
	@Spy
	private List<Map<String,String>> movieByYearData= new ArrayList<Map<String,String>>();


	@Before
	public void setup() {
		MockitoAnnotations.initMocks(this);

		mockMvc = MockMvcBuilders.standaloneSetup(controller).build();

		movieData=DataProviderUtil.validateMovieData();
		
		movieByYearData=DataProviderUtil.validateMovieByYearData();
	}

	@Test
	public void getMovieTest() throws Exception {

		Movie movie ;
		List<Movie> moviesList= new ArrayList<Movie>();
		int mid = Integer.parseInt(movieData.get(0).get(Constants.MOVIEID));
		for(int k=0;k<movieData.size()-1;k++){
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
		when(movieService.findById(mid)).thenReturn(moviesList.get(0));
		String url = "/movie/"+mid;
		mockMvc.perform(get(url))
		.andDo(print())
		.andExpect(status().isOk());
	}

	@Test
	public void listAllMovieTest() throws Exception {

		Movie movie ;
		List<Movie> moviesList= new ArrayList<Movie>();
		int mid = Integer.parseInt(movieData.get(0).get(Constants.MOVIEID));
		for(int k=0;k<movieData.size()-1;k++){
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
		when(movieService.findAllMovie()).thenReturn(moviesList);
		String url = "/movies";
		mockMvc.perform(get(url))
		.andDo(print())
		.andExpect(status().isOk());
	}
	
	@Test
	public void listTopMovieByGenreTest() throws Exception {

		Movie movie ;
		List<Movie> moviesList= new ArrayList<Movie>();
		String genre="Action";
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
		when(movieService.top6Movie(genre)).thenReturn(moviesList);
		String url = "/movie/top6/"+genre;
		mockMvc.perform(get(url))
		.andDo(print())
		.andExpect(status().isOk());
	}

	
	@Test
	public void listMovieByGenreAndLanguageTest() throws Exception {

		Movie movie ;
		List<Movie> moviesList= new ArrayList<Movie>();
		String genre="Action";
		for(int k=0;k<36;k++){
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
		when(movieService.movieBasedonGenre(genre)).thenReturn(moviesList);
		String url = "/movie/genre/"+genre;
		mockMvc.perform(get(url))
		.andDo(print())
		.andExpect(status().isOk());
		
		String lang="en";
		when(movieService.allMovieBasedonLanguague(lang)).thenReturn(moviesList);
		String url1 = "/movie/language/"+lang;
		mockMvc.perform(get(url1))
		.andDo(print())
		.andExpect(status().isOk());
	}

	@Test
	public void popularAndRecentMovies() throws Exception {


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
		when(movieService.movieBasedonPopularity()).thenReturn(moviesList);
		String Url = "/movie/popular";
		mockMvc.perform(get(Url))
		.andDo(print())
		.andExpect(jsonPath("$", hasSize(6)))
		.andExpect(status().isOk());


		when(movieService.recentMovies()).thenReturn(moviesList);
		String Url1 = "/movie/recent";
		mockMvc.perform(get(Url1))
		.andDo(print())
		.andExpect(jsonPath("$", hasSize(6)))
		.andExpect(status().isOk());
		
		String lang="hi";
		
		when(movieService.movieBasedonLanguague(lang)).thenReturn(moviesList);
		String langUrl="/movie/top6/language/"+lang;
		mockMvc.perform(get(langUrl))
		.andDo(print())
		.andExpect(jsonPath("$", hasSize(6)))
		.andExpect(status().isOk());
	}

	@Test
	public void getMovieByYearData() throws Exception {
		Movie movie ;
		List<Movie> moviesList= new ArrayList<Movie>();
		for(int k=0;k<movieByYearData.size()-1;k++){
			movie=new Movie();
			int movieId = Integer.parseInt(movieByYearData.get(k).get(Constants.MOVIE_COUNT));
			movie.setMovieId(movieId);
			movie.setVote_count(Integer.parseInt(movieByYearData.get(k).get(Constants.MOVIE_YEAR)));
			moviesList.add(movie);
		}
		when(movieService.moviesByYear()).thenReturn(moviesList);
		mockMvc.perform(get("/moviesByYear"))
		.andDo(print())
		.andExpect(jsonPath("$", hasSize(moviesList.size())))
		.andExpect(status().isOk());
	}


}
