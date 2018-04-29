package com.crud.rest.dao;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import com.crud.rest.beans.Movie;
import com.crud.rest.beans.Rating;
import com.crud.rest.beans.UserFavList;

/**
 * @author Archana
 *
 */
public class UserFavListDaoImpl implements UserFavListDao{

	
	@Autowired
	private SessionFactory usersessionFactory;

	//setter for sessionFactory
	public void setsessionFactory(SessionFactory usersessionFactory) {
		this.usersessionFactory = usersessionFactory;
	}
	

	
	@Override
	public List<Movie> getFavList(int userid) {
		// TODO Auto-generated method stub
		List<Movie> userFavList = new ArrayList<Movie>();
		Session session = usersessionFactory.openSession();
		//userFavList = session.createQuery("From com.crud.rest.beans.UserFavList where type='F' and userid="+userid+"").list();
		
		String sql = "select  m.movieid,m.moviename,m.genres,m.overview,m.belongs_to_collection,m.original_language,m.popularity,m.poster_path,m.productionID,m.release_date,m.runtime,m.vote_average,m.vote_count,u.userid,u.type from prophet2018spring.Movie m,prophet2018spring.UserFavList u where u.movieid=m.movieid and u.type = 'F' and u.userid= :userid";
	     SQLQuery query = session.createSQLQuery(sql);
	     query.setParameter("userid", userid);
	     query.setResultTransformer(Criteria.ALIAS_TO_ENTITY_MAP);
	     userFavList = query.list();
	    // return query.list();
	     session.close();
		return userFavList;
	}

	@Override
	public List<Movie> getWatchedList(int userid) {
		// TODO Auto-generated method stub
		List<Movie> userWatchedList = new ArrayList<Movie>();
		Session session = usersessionFactory.openSession();
		//userFavList = session.createQuery("From com.crud.rest.beans.UserFavList where type='F' and userid="+userid+"").list();
		
		String sql = "select  m.movieid,m.moviename,m.genres,m.overview,m.belongs_to_collection,m.original_language,m.popularity,m.poster_path,m.productionID,m.release_date,m.runtime,m.vote_average,m.vote_count,u.userid,u.type from prophet2018spring.Movie m,prophet2018spring.UserFavList u where u.movieid=m.movieid and u.type = 'W' and u.userid= :userid";
	     SQLQuery query = session.createSQLQuery(sql);
	     query.setParameter("userid", userid);
	     query.setResultTransformer(Criteria.ALIAS_TO_ENTITY_MAP);
	     userWatchedList = query.list();
	    // return query.list();
	     session.close();
		return userWatchedList;
	}

	@Override
	public void saveUserPreference(UserFavList favList) {
		// TODO Auto-generated method stub
		Session session = usersessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		if (favList != null) {
			try {
				session.save(favList);
				transaction.commit();
			} catch (Exception e) {
				transaction.rollback();
				session.close();
			}

		}
	}



	@Override
	public List<UserFavList> userPreferenceList(int userid) {
		// TODO Auto-generated method stub
		List<UserFavList> userPreferenceList = new ArrayList<UserFavList>();
		Session session = usersessionFactory.openSession();
		String sql = "select userid,'Favorites' type,count(movieid) as moviecount from prophet2018spring.UserFavList where type='F' and userid="+userid+" group by userid,type  UNION select userid,'Watched' type,count(movieid) as moviecount from prophet2018spring.UserFavList where type='W' and userid="+userid+" group by userid,type UNION select userid,'Rated'type,count(movieid) as moviecount from prophet2018spring.Rating where rating is not null and userid="+userid+" group by userid,type order by userid,type";
	     SQLQuery query = session.createSQLQuery(sql);
	     query.setResultTransformer(Criteria.ALIAS_TO_ENTITY_MAP);
	     userPreferenceList = query.list();
	     session.close();
		return userPreferenceList;
	}



	

}
