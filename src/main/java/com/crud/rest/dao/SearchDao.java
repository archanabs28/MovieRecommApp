package com.crud.rest.dao;

import java.util.List;

import com.crud.rest.beans.Movie;
import com.crud.rest.beans.Search;

/**
 * @author Archana
 *
 */
public interface SearchDao {
	
	List<String> getSearchword(int userid);
	
	List<Integer> getMovieId(int userid,String type);
	
	void saveSearch(Search searchData);
	
	boolean isSearchExist(Search search);
	
	Search findSearchData(Search search);
	
	List<Movie> getMovieDataFromSearchWord(String name);
	
	List<Movie> recommendedBasedonPrevSearch(int userid);
	
	List<Movie> recommendedBasedonUserFavorite(int userid);
	
	List<Movie> recommendedBasedonUserWatched(int userid);
	

}
