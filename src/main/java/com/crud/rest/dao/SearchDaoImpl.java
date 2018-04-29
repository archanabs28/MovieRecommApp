package com.crud.rest.dao;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;


import com.crud.rest.beans.Movie;
import com.crud.rest.beans.Search;


/**
 * @author Archana
 *
 */
public class SearchDaoImpl implements SearchDao{


	@Autowired
	private SessionFactory sessionFactory;

	//setter for sessionFactory
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Override
	public List<String> getSearchword(int userid) {
		// TODO Auto-generated method stub

		List<String> searchWord = new ArrayList<String>();
		Session session = sessionFactory.openSession();
	//	searchWord = session.createQuery("From com.crud.rest.beans.Search where userid="+userid+" order by time desc").list();
		
		String sql = "select s.searchword from Search s where s.userid= :userid and s.searchword is not null order by time desc";
	     SQLQuery query = session.createSQLQuery(sql);
	     query.setParameter("userid", userid);
	     
	     searchWord = query.setMaxResults(5).list();
	     session.close();
		return searchWord;

	}

	@Override
	public void saveSearch(Search searchData) {
		// TODO Auto-generated method stub

		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		if (searchData != null) {
			try {
				session.save(searchData);
				transaction.commit();
			} catch (Exception e) {
				transaction.rollback();
				session.close();
			}

		}

	}

	@Override
	public boolean isSearchExist(Search search) {
		// TODO Auto-generated method stub
		return findSearchData(search)!=null;
	}

	@Override
	public Search findSearchData(Search search) {
		// TODO Auto-generated method stub
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		Search word= new Search(search.getUserid(), search.getsearchWord(),search.getTime());
		String hql = "from com.crud.rest.beans.Search where userid = "+word.getUserid()+" and searchword like ?";
		try {
			
			Query query = session.createQuery(hql);
			query.setParameter(0, word.getsearchWord());
			word = (Search) query.uniqueResult();
			transaction.commit();
			session.close();
		} catch (Exception e) {
			transaction.rollback();
			session.close();
		}
		return word;
	}

	@Override
	public List<Movie> getMovieDataFromSearchWord(String name) {
		// TODO Auto-generated method stub
		
		List<Movie> movie = new ArrayList<Movie>();
		Session session = sessionFactory.openSession();
		String moviename = name.toLowerCase();
		movie = session.createQuery("From com.crud.rest.beans.Movie where lower(moviename) like '%"+moviename+"%'").list();
		  session.close();
		return movie;
		
	}

	@Override
	public List<Movie> recommendedBasedonPrevSearch(int userid) {
		// TODO Auto-generated method stub
		List<Movie> movieRecommended = new ArrayList<Movie>();
		List<String> searchWords = getSearchword(userid);
		int listSize=searchWords.size();
		String sql;
		if(listSize >0){
		if(listSize == 1){
			//TO_CHAR(m.release_date, 'YYYY-MM-DD')
			 sql="select distinct m.movieid,m.moviename,m.belongs_to_collection,m.genres,m.original_language,m.overview,m.poster_path,m.popularity,m.productionID, DATE_FORMAT(m.release_date, \"%d-%m-%Y\") as release_date,m.runtime,m.vote_average,m.vote_count from prophet2018spring.Movie m, prophet2018spring.Search s  where s.userid="+userid+" and  searchword is not null and lower(moviename) like '%"+searchWords.get(0).toLowerCase()+"%' order by rand()";
		}else{
		 sql = "select distinct m.movieid,m.moviename,m.belongs_to_collection,m.genres,m.original_language,m.overview,m.poster_path,m.popularity,m.productionID, DATE_FORMAT(m.release_date, \"%d-%m-%Y\") as release_date,m.runtime,m.vote_average,m.vote_count from prophet2018spring.Movie m, prophet2018spring.Search s  where s.userid="+userid+" and  searchword is not null and ";
		for(int i=0;i<searchWords.size()-1;i++){
			sql+=" lower(moviename) like '%"+searchWords.get(i).toLowerCase()+"%' or ";
		}
		System.out.println(sql);
		sql+="lower(moviename) like '%"+searchWords.get(searchWords.size()-1).toLowerCase()+"%' order by rand() ";
		}
		
		Session session = sessionFactory.openSession();
	    SQLQuery query = session.createSQLQuery(sql);
	     query.setResultTransformer(Criteria.ALIAS_TO_ENTITY_MAP);
	     movieRecommended = query.setMaxResults(6).list();
	     session.close();
		}
		else{
			/*Session session = sessionFactory.openSession();
			String sql="select distinct  m.movieid,m.moviename,m.genres,m.overview,m.belongs_to_collection,m.original_language,m.popularity,m.poster_path,m.productionID,m.release_date,m.runtime,m.vote_average,m.vote_count from Movie m where  m.runtime <> 0 and m.runtime < 10 order by rand()";
			SQLQuery query = session.createSQLQuery(sql);
			movieRecommended = query.setMaxResults(6).list();
			  session.close();*/
		}
		
		return movieRecommended;
	}
	
	@Override
	public List<Integer> getMovieId(int userid, String type) {
		// TODO Auto-generated method stub
		
		List<Integer> movieIDs = new ArrayList<Integer>();
		Session session = sessionFactory.openSession();
	//	searchWord = session.createQuery("From com.crud.rest.beans.Search where userid="+userid+" order by time desc").list();
		
		String sql = "select movieid from prophet2018spring.UserFavList  where userid= :userid and type = :type";
	     SQLQuery query = session.createSQLQuery(sql);
	     query.setParameter("userid", userid);
	     query.setParameter("type", type);
	     movieIDs = query.setMaxResults(6).list();
	     session.close();
		return movieIDs;
	
	}

	@Override
	public List<Movie> recommendedBasedonUserFavorite(int userid) {
		// TODO Auto-generated method stub
		List<Movie> movieRecommended = new ArrayList<Movie>();
		List<String> listofGenre = new ArrayList<String>();
		String type ="F";
		List<Integer> movieidList = getMovieId(userid, type);
		int listSize=movieidList.size();
		if(listSize >0){
		String sql1="Select distinct m.genres from prophet2018spring.Movie m,prophet2018spring.UserFavList u  where u.userid="+userid+" and ";
		for(int i=0;i<movieidList.size()-1;i++){
			sql1+=" m.movieid = "+movieidList.get(i)+" or ";
		}
		sql1+="m.movieid = "+movieidList.get(listSize-1)+"";
		System.out.println(sql1);
		Session session = sessionFactory.openSession();
	    SQLQuery query = session.createSQLQuery(sql1);
	    listofGenre = query.list();
	   for(String s: listofGenre){
		   System.out.print(s+"\t\t");
	   }
			
		String sql = "select distinct m.movieid,m.moviename,m.belongs_to_collection,m.genres,m.original_language,m.popularity,m.overview,m.poster_path,m.productionID, DATE_FORMAT(m.release_date, \"%d-%m-%Y\") as release_date ,m.runtime,m.vote_average,m.vote_count from prophet2018spring.Movie m  where  ";
		for(int i=0;i<listofGenre.size()-1;i++){
			sql+=" m.genres like '%"+listofGenre.get(i)+"%' or ";
		}
		sql+="m.genres like '%"+listofGenre.get(listofGenre.size()-1)+"%' order by rand() ";
		System.out.println(sql);
		Session session1 = sessionFactory.openSession();
	    SQLQuery query1 = session.createSQLQuery(sql);
	     query1.setResultTransformer(Criteria.ALIAS_TO_ENTITY_MAP);
	     movieRecommended = query1.setMaxResults(6).list();
	     
	     System.out.println(Arrays.asList(movieRecommended.toArray()));
	     session.close();
		}
		else{
		/*	Session session = sessionFactory.openSession();
			String sql="select distinct  m.movieid,m.moviename,m.genres,m.overview,m.belongs_to_collection,m.original_language,m.popularity,m.poster_path,m.productionID,m.release_date,m.runtime,m.vote_average,m.vote_count from Movie m where m.productionid is not null order by rand()";
			SQLQuery query = session.createSQLQuery(sql);
			movieRecommended = query.setMaxResults(6).list();
			  session.close();*/
		}
		return movieRecommended;
	}

	@Override
	public List<Movie> recommendedBasedonUserWatched(int userid) {
		List<Movie> movieRecommended = new ArrayList<Movie>();
		
		// TODO Auto-generated method stub
		//List<Movie> movieRecommended = new ArrayList<Movie>();
		List<String> productions= new ArrayList<String>();
		String type ="W";
		List<Integer> movieidList = getMovieId(userid, type);
		int listSize=movieidList.size();
		if(listSize >0){
			String sql1="Select distinct m.productionid from prophet2018spring.Movie m, prophet2018spring.UserFavList u  where u.userid="+userid+" and ";
			for(int i=0;i<movieidList.size()-1;i++){
				sql1+=" m.movieid = "+movieidList.get(i)+" or ";
			}
			sql1+="m.movieid = "+movieidList.get(listSize-1)+"";
			System.out.println(sql1);
			Session session = sessionFactory.openSession();
		    SQLQuery query = session.createSQLQuery(sql1);
		    productions = query.list();
		   for(String s: productions){
			   System.out.print(s+"\t\t");
		   }
				
			String sql = "select distinct m.movieid,m.moviename,m.belongs_to_collection,m.genres,m.original_language,m.overview,m.poster_path,m.productionID,m.popularity, DATE_FORMAT(m.release_date, \"%d-%m-%Y\") as release_date ,m.runtime,m.vote_average,m.vote_count from prophet2018spring.Movie m  where  ";
			for(int i=0;i<productions.size()-1;i++){
				sql+=" m.productionid like '%"+productions.get(i)+"%' or ";
			}
			sql+="m.productionid like '%"+productions.get(productions.size()-1)+"%' order by rand() ";
			System.out.println(sql);
			Session session1 = sessionFactory.openSession();
		    SQLQuery query1 = session.createSQLQuery(sql);
		     query1.setResultTransformer(Criteria.ALIAS_TO_ENTITY_MAP);
		     movieRecommended = query1.setMaxResults(6).list();
		     
		     System.out.println(Arrays.asList(movieRecommended.toArray()));
		     session.close();
			}
			else{
			/*	Session session = sessionFactory.openSession();
				String sql=  "select distinct m.movieid,m.moviename,m.belongs_to_collection,m.genres,m.original_language,m.overview,m.popularity,m.poster_path,m.productionID, DATE_FORMAT(m.release_date, \"%d-%m-%Y\") as release_date ,m.runtime,m.vote_average,m.vote_count from Movie m  where belongs_to_collection <>0 order by rand()";
				SQLQuery query = session.createSQLQuery(sql);
				
				movieRecommended = query.setMaxResults(6).list();
				  session.close();*/
			
			}
			return movieRecommended;
		
	//	return movieRecommended;
	}
	
	

	

}
