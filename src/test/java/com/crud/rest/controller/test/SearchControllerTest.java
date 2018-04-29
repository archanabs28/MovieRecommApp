/**
 * 
 */
package com.crud.rest.controller.test;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.File;
import java.nio.file.Files;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Map;
import java.sql.Date;
import java.util.List;

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
import com.crud.rest.beans.Search;
import com.crud.rest.controllers.SearchController;
import com.crud.rest.library.Constants;
import com.crud.rest.library.DataProviderUtil;
import com.crud.rest.service.SearchService;



/**
 * @author Archana
 *
 */
public class SearchControllerTest {
	
	@InjectMocks
    private SearchController searchController;

    @Mock
    private SearchService searchService;

    private MockMvc mockMvc;
    
	@Spy
	private List<Map<String,String>> movieData= new ArrayList<Map<String,String>>();


    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);

        mockMvc = MockMvcBuilders.standaloneSetup(searchController).build();
        
        movieData=DataProviderUtil.validateMovieData();
    }
    
    
    @Test
   	public void recommendedMovieBasedonPrevSearchTest() throws Exception {
    	Movie movie ;
		List<Movie> moviesList= new ArrayList<Movie>();
		int userid=3;
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
		
   		when(searchService.recommendedBasedonPrevSearch(userid)).thenReturn(moviesList);
			String url="/recommend/presearch/"+userid;
			mockMvc.perform(get(url))
			.andDo(print())
			.andExpect(status().isOk());
   		
   	}
    
    @Test
   	public void recommendedMovieBasedonWatchedTest() throws Exception {
    	Movie movie ;
		List<Movie> moviesList= new ArrayList<Movie>();
		int userid=3;
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
		
   		when(searchService.recommendedBasedonUserWatched(userid)).thenReturn(moviesList);
			String url="/recommend/watched/"+userid;
			mockMvc.perform(get(url))
			.andDo(print())
			.andExpect(status().isOk());
   		
   	}
    
    @Test
   	public void recommendedMovieBasedonFavoriteTest() throws Exception {
    	Movie movie ;
		List<Movie> moviesList= new ArrayList<Movie>();
		int userid=3;
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
		
   		when(searchService.recommendedBasedonUserFavorite(userid)).thenReturn(moviesList);
			String url="/recommend/favorite/"+userid;
			mockMvc.perform(get(url))
			.andDo(print())
			.andExpect(status().isOk());
   		
   	}
    
    @Test
   	public void listMovieBasedonSearchTest() throws Exception {
    	Movie movie ;
		List<Movie> moviesList= new ArrayList<Movie>();
		String key="Lucia";
		for(int k=0;k<5;k++){
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
		
   		when(searchService.getMovieDataFromSearchWord(key)).thenReturn(moviesList);
			String url="/search-movie/"+key;
			mockMvc.perform(get(url))
			.andDo(print())
			.andExpect(status().isOk());
   		
   	}
    

}
