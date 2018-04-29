package com.crud.rest.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 *
 * @author Archana
 */
@Entity
@Table(name="Rating")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })//very imp
public class Rating {

	@Id
	@Column
	private int userid;
	
	
	@Column
	private float rating;
	
	@Column
	private int movieid;

	/**
	 * 
	 */
	public Rating() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @return the userid
	 */
	public int getUserid() {
		return userid;
	}

	/**
	 * @param userid the userid to set
	 */
	public void setUserid(int userid) {
		this.userid = userid;
	}

	/**
	 * @return the rating
	 */
	public float getRating() {
		return rating;
	}

	/**
	 * @param rating the rating to set
	 */
	public void setRating(float rating) {
		this.rating = rating;
	}

	/**
	 * @return the movieid
	 */
	public int getMovieid() {
		return movieid;
	}

	/**
	 * @param movieid the movieid to set
	 */
	public void setMovieid(int movieid) {
		this.movieid = movieid;
	}



}
