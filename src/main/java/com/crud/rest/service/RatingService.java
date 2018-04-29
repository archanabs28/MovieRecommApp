
/**
 * 
 */
package com.crud.rest.service;

import java.util.List;

import com.crud.rest.beans.Movie;
import com.crud.rest.beans.Rating;

/**
 * @author Archana
 *
 */
public interface RatingService {

	List<Movie> findRatingByUserid(int userid);
	
//	List<Movie> findRatingByMovieId(int movieid);
	
	void saveRating(Rating rating);
	
	void updateRating(Rating rating);

	List<Movie> topRatedMovies();
	
	boolean isRatingExist(Rating rating);
	
	Rating getRatingData(Rating rating);
	
//	Rating findRatingByIds(int userid,int movieid);
	
	List<Movie> cosineSimilarity(int userid);
	
/*	List<Integer> listofUniqueUserid();
	
	List<Integer> listofUniqueMovieid();
	
	Float[][] generateMatrix(List<Integer> users,List<Integer> Movies);
	
	int getUserPositioninMatrix(int userid,List<Integer> userids);*/
	
	List<Movie> getRecommendedMovies(int cosinePosition,int userid, List<Integer> userids);
	
	List<Rating> numberofUsersRatedMovie(int movieid);
	
	List<Movie> numberofMoviesUserRated(int userid);
	
	List<Movie> trendingMovieByLanguage();
	
	
}
