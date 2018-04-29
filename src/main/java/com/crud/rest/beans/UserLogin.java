package com.crud.rest.beans;

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
@Table(name="Users")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })//very imp
public class UserLogin {

	/**
	 * @param args
	 */
	@Id
	@GeneratedValue
	@Column
	private int userId;
	
	@Column
	private String firstName;
	
	@Column
	private String lastName;
	
	@Column
	private String emailId;
	
	@Column 
	private String password;
	
	@Column
	private String type;

	
		public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

		public UserLogin(){
		super();
	}

	public UserLogin(int userId, String firstName,String lastName, String emailid, String password,String type){
		super();
		this.userId=userId;
		this.firstName=firstName;
		this.lastName=lastName;
		this.emailId=emailid;
		this.password=password;
		this.type=type;
	}
}
