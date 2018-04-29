/**
 * 
 */
package com.crud.rest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.crud.rest.beans.Movie;
import com.crud.rest.beans.Rating;
import com.crud.rest.dao.RatingDao;

/**
 * @author Archana
 *
 */
public class RatingServiceImpl implements RatingService {

	@Autowired
	private RatingDao ratingDao;
	
	
	/**
	 * @param ratingDao the ratingDao to set
	 */
	public void setRatingDao(RatingDao ratingDao) {
		this.ratingDao = ratingDao;
	}


	@Override
	public List<Movie> findRatingByUserid(int userid) {
		// TODO Auto-generated method stub
		return ratingDao.findRatingByUserid(userid);
	}

	
	/*@Override
	public List<Movie> findRatingByMovieId(int movieid) {
		// TODO Auto-generated method stub
		return ratingDao.findRatingByMovieId(movieid);
	}*/

	@Override
	public void saveRating(Rating rating) {
		// TODO Auto-generated method stub
		ratingDao.saveRating(rating);
	}

	
	@Override
	public void updateRating(Rating rating) {
		// TODO Auto-generated method stub
		ratingDao.updateRating(rating);
	}

	
	@Override
	public List<Movie> topRatedMovies() {
		// TODO Auto-generated method stub
		return ratingDao.topRatedMovies();
	}

	@Override
	public boolean isRatingExist(Rating rating) {
		// TODO Auto-generated method stub
		return ratingDao.isRatingExist(rating);
	}


	@Override
	public Rating getRatingData(Rating rating) {
		// TODO Auto-generated method stub
		return ratingDao.getRatingData(rating);
	}


	/*@Override
	public Rating findRatingByIds(int userid, int movieid) {
		// TODO Auto-generated method stub
		return ratingDao.findRatingByIds(userid, movieid);
	}*/


	
	@Override
	public List<Movie> cosineSimilarity(int userid) {
		// TODO Auto-generated method stub
		return ratingDao.cosineSimilarity(userid);
	}


/*	
	@Override
	public List<Integer> listofUniqueUserid() {
		// TODO Auto-generated method stub
		return ratingDao.listofUniqueUserid();
	}


	 (non-Javadoc)
	 * @see com.crud.rest.service.RatingService#listofUniqueMovieid()
	 
	@Override
	public List<Integer> listofUniqueMovieid() {
		// TODO Auto-generated method stub
		return ratingDao.listofUniqueMovieid();
	}


	 (non-Javadoc)
	 * @see com.crud.rest.service.RatingService#generateMatrix(java.util.List, java.util.List)
	 
	@Override
	public Float[][] generateMatrix(List<Integer> users, List<Integer> Movies) {
		// TODO Auto-generated method stub
		return ratingDao.generateMatrix(users, Movies);
	}


	 (non-Javadoc)
	 * @see com.crud.rest.service.RatingService#getUserPositioninMatrix(int, java.util.List)
	 
	@Override
	public int getUserPositioninMatrix(int userid, List<Integer> userids) {
		// TODO Auto-generated method stub
		return ratingDao.getUserPositioninMatrix(userid, userids);
	}*/


	/* (non-Javadoc)
	 * @see com.crud.rest.service.RatingService#getRecommendedMovies(int, java.util.List)
	 */
	@Override
	public List<Movie> getRecommendedMovies(int cosinePosition,int userid,
			List<Integer> userids) {
		// TODO Auto-generated method stub
		return ratingDao.getRecommendedMovies(cosinePosition, userid,userids);
	}


	@Override
	public List<Rating> numberofUsersRatedMovie(int movieid) {
		// TODO Auto-generated method stub
		return ratingDao.numberofUsersRatedMovie(movieid);
	}


	@Override
	public List<Movie> numberofMoviesUserRated(int userid) {
		// TODO Auto-generated method stub
		return ratingDao.numberofMoviesUserRated(userid);
	}


	@Override
	public List<Movie> trendingMovieByLanguage() {
		// TODO Auto-generated method stub
		return ratingDao.trendingMovieByLanguage();
	}



}
