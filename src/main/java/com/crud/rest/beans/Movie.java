package com.crud.rest.beans;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.SecondaryTable;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * @author Archana
 *
 */
@Entity
@Table(name="Movie")

@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })//very imp
public class Movie {
	
	@Id
	@GeneratedValue
	@Column
	private int movieId;
	
	@Column
	private String movieName;
	
	@Column
	private int	belongs_to_collection;
	
	@Column
	private String genres;
	
	@Column
	private String original_language;
	
	@Column
	private String overview;
	
	@Column
	private float popularity;
	
	@Column
	private String poster_path;
	
	@Column 
	private String productionID;
	
	@Column
	private Date release_date;
	
	@Column
	private int runtime;
	
	@Column
	private float vote_average;
	
	@Column
	private int vote_count;
	
	
	/*@OneToOne(mappedBy="Movie")
	public UserFavList userFavList;
	
	
	public UserFavList getUserFavList() {
		return userFavList;
	}

	public void setUserFavList(UserFavList userFavList) {
		this.userFavList = userFavList;
	}*/

	public Movie(){
		super();
	}

	public Movie(int movieId, String movieName, int belongs_to_collection,
			String genres, String original_language, String overview,
			float popularity, String poster_path, String productionID,
			Date release_date, int runtime, float vote_average, int vote_count) {
		super();
		this.movieId = movieId;
		this.movieName = movieName;
		this.belongs_to_collection = belongs_to_collection;
		this.genres = genres;
		this.original_language = original_language;
		this.overview = overview;
		this.popularity = popularity;
		this.poster_path = poster_path;
		this.productionID = productionID;
		this.release_date = release_date;
		this.runtime = runtime;
		this.vote_average = vote_average;
		this.vote_count = vote_count;
	}

	public int getMovieId() {
		return movieId;
	}

	public void setMovieId(int movieId) {
		this.movieId = movieId;
	}

	public String getMovieName() {
		return movieName;
	}

	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}

	public int getBelongs_to_collection() {
		return belongs_to_collection;
	}

	public void setBelongs_to_collection(int belongs_to_collection) {
		this.belongs_to_collection = belongs_to_collection;
	}

	public String getGenres() {
		return genres;
	}

	public void setGenres(String genres) {
		this.genres = genres;
	}

	public String getOriginal_language() {
		return original_language;
	}

	public void setOriginal_language(String original_language) {
		this.original_language = original_language;
	}

	public String getOverview() {
		return overview;
	}

	public void setOverview(String overview) {
		this.overview = overview;
	}

	public float getPopularity() {
		return popularity;
	}

	public void setPopularity(float popularity) {
		this.popularity = popularity;
	}

	public String getPoster_path() {
		return poster_path;
	}

	public void setPoster_path(String poster_path) {
		this.poster_path = poster_path;
	}

	public String getProductionID() {
		return productionID;
	}

	public void setProductionID(String productionID) {
		this.productionID = productionID;
	}

	public Date getRelease_date() {
		return release_date;
	}

	public void setRelease_date(Date release_date) {
		this.release_date = release_date;
	}

	public int getRuntime() {
		return runtime;
	}

	public void setRuntime(int runtime) {
		this.runtime = runtime;
	}

	public float getVote_average() {
		return vote_average;
	}

	public void setVote_average(float vote_average) {
		this.vote_average = vote_average;
	}

	public int getVote_count() {
		return vote_count;
	}

	public void setVote_count(int vote_count) {
		this.vote_count = vote_count;
	}
	
	
	
	

}
