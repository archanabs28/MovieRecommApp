package com.crud.rest.beans;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


/**
 * @author Archana
 *
 */
@Entity
@Table(name="UserFavList")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })//very imp
public class UserFavList {
	
	@Id
	@Column
	private int userid;
	
	
	@Column
	private String type;
	
	@Column
	public int movieid;
	

	public UserFavList() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserFavList(int userid, int movieid, String type) {
		super();
		this.userid = userid;
		this.movieid = movieid;
		this.type = type;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public int getMovieid() {
		return movieid;
	}

	public void setMovieid(int movieid) {
		this.movieid = movieid;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	
	
	
	

}
