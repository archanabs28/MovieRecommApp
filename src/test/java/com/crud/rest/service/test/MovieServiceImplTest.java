package com.crud.rest.service.test;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;


import static org.junit.Assert.*;

import org.junit.Assert;
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
import com.crud.rest.dao.MovieDao;
import com.crud.rest.library.Constants;
import com.crud.rest.library.DataProviderUtil;
import com.crud.rest.service.MovieServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;



public class MovieServiceImplTest {
	
	@Mock
	MovieDao dao;
	
	@InjectMocks
	MovieServiceImpl movieService;
	
	@Spy
	private List<Map<String,String>> movieData= new ArrayList<Map<String,String>>();
	
	@Spy
	private List<Map<String,String>> movieByYearData= new ArrayList<Map<String,String>>();

	
	private MockMvc mockMvc;
	
	@Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(movieService).build();

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
		when(dao.findById(mid)).thenReturn(moviesList.get(0));
		assertEquals(movieService.findById(mid), moviesList.get(0));
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
		when(dao.findAllMovie()).thenReturn(moviesList);
		assertEquals(movieService.findAllMovie(), moviesList);
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
		when(dao.top6Movie(genre)).thenReturn(moviesList);
		assertEquals(movieService.top6Movie(genre), moviesList);
	}

	
	@Test
	public void listMovieByGenreTest() throws Exception {

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
		when(dao.movieBasedonGenre(genre)).thenReturn(moviesList);
		assertEquals(movieService.movieBasedonGenre(genre), moviesList);
		
		String lang="en";
		when(dao.allMovieBasedonLanguague(lang)).thenReturn(moviesList);
		assertEquals(movieService.allMovieBasedonLanguague(lang), moviesList);
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
		when(dao.movieBasedonPopularity()).thenReturn(moviesList);
		assertEquals(movieService.movieBasedonPopularity(), moviesList);


		when(dao.recentMovies()).thenReturn(moviesList);
		assertEquals(movieService.recentMovies(), moviesList);
		
		
		String lang="hi";
		
		when(dao.movieBasedonLanguague(lang)).thenReturn(moviesList);
		assertEquals(movieService.movieBasedonLanguague(lang), moviesList);
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
		when(dao.moviesByYear()).thenReturn(moviesList);
		assertEquals(movieService.moviesByYear(), moviesList);
	}


}
