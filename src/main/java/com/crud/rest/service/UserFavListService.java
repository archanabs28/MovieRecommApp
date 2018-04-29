package com.crud.rest.service;

import java.util.List;

import com.crud.rest.beans.Movie;
import com.crud.rest.beans.Rating;
import com.crud.rest.beans.UserFavList;

/**
 * @author Archana
 *
 */
public interface UserFavListService {

	List<Movie> getFavList(int userid);

	List<Movie> getWatchedList(int userid);

	void saveUserPreference(UserFavList favList);

	List<UserFavList> userPreferenceList(int userid);
}
