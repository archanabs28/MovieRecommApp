package com.crud.rest.beans;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


/**
 * @author Archana
 *
 */
@Entity
@Table(name="Search")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })//very imp
public class Search {
	
	@Id
	@Column
	private int userid;
	
	@Column
	private String searchWord;
	
	@GeneratedValue
	@Column
	private Timestamp time;

	public Search() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Search(int userid, String searchWord, Timestamp time) {
		super();
		this.userid = userid;
		this.searchWord = searchWord;
		this.time = time;
	}

	public Timestamp getTime() {
		return time;
	}

	public void setTime(Timestamp time) {
		this.time = time;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getsearchWord() {
		return searchWord;
	}

	public void setsearchWord(String searchWord) {
		this.searchWord = searchWord;
	}
	
	

}
