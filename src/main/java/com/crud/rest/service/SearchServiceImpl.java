package com.crud.rest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.crud.rest.beans.Movie;
import com.crud.rest.beans.Search;

import com.crud.rest.dao.SearchDao;

/**
 * @author Archana
 *
 */
public class SearchServiceImpl implements SearchService{

	@Autowired
	private SearchDao searchDao;
	
	public void setSearchDao(SearchDao searchDao) {
		this.searchDao = searchDao;
	}

	@Override
	public List<String> getSearchword(int userid) {
		// TODO Auto-generated method stub
		return searchDao.getSearchword(userid);
	}

	@Override
	public void saveSearch(Search searchData) {
		// TODO Auto-generated method stub
		searchDao.saveSearch(searchData);
	}

	@Override
	public boolean isSearchExist(Search search) {
		// TODO Auto-generated method stub
		return searchDao.isSearchExist(search);
	}

	@Override
	public Search findSearchData(Search search) {
		// TODO Auto-generated method stub
		return searchDao.findSearchData(search);
	}

	@Override
	public List<Movie> getMovieDataFromSearchWord(String name) {
		// TODO Auto-generated method stub
		return searchDao.getMovieDataFromSearchWord(name);
	}

	@Override
	public List<Movie> recommendedBasedonPrevSearch(int userid) {
		// TODO Auto-generated method stub
		return searchDao.recommendedBasedonPrevSearch(userid);
	}

	@Override
	public List<Movie> recommendedBasedonUserFavorite(int userid) {
		// TODO Auto-generated method stub
		return searchDao.recommendedBasedonUserFavorite(userid);
	}
	
	@Override
	public List<Integer> getMovieId(int userid, String type) {
		// TODO Auto-generated method stub
		return searchDao.getMovieId(userid, type);
	}
	
	@Override
	public List<Movie> recommendedBasedonUserWatched(int userid) {
		// TODO Auto-generated method stub
		return searchDao.recommendedBasedonUserWatched(userid);
	}

}
