package com.crud.rest.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import com.crud.rest.beans.UserLogin;

/**
 * @author Archana
 *
 */
public class UserDaoImpl implements UserDao{


	@Autowired
	private SessionFactory sessionFactory;

	//setter for sessionFactory
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	@Override
	public UserLogin findById(int id) {
		// TODO Auto-generated method stub
		Session session = sessionFactory.openSession();
		//Transaction transaction = session.beginTransaction();
		UserLogin userLogin = new UserLogin();
		try {
			userLogin = (UserLogin) session.get(UserLogin.class, id);
			//transaction.commit();
			session.close();
		} catch (Exception e) {
			//transaction.rollback();
			session.close();
		}
		return userLogin;
	}

	@Override
	public UserLogin findByName(String name) {
		// TODO Auto-generated method stub
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		UserLogin userLogin = new UserLogin();
		String hql = "from com.crud.rest.beans.UserLogin where firstName = ?";
		try {
			Query query = session.createQuery(hql);
			query.setParameter(0, name);
			userLogin = (UserLogin) query.uniqueResult();
			transaction.commit();
			session.close();
		} catch (Exception e) {
			transaction.rollback();
			session.close();
		}
		return userLogin;
	}

	@Override
	public void saveUser(UserLogin user) {
		// TODO Auto-generated method stub
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		if (user != null) {
			try {
				session.save(user);
				transaction.commit();
			} catch (Exception e) {
				transaction.rollback();
				session.close();
			}

		}
	}

	@Override
	public void updateUser(UserLogin user) {
		// TODO Auto-generated method stub
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		if (user != null) {
			try {
				session.update(user);
				transaction.commit();
			} catch (Exception e) {
				transaction.rollback();
				session.close();
			}

		}
	}


	@Override
	public List<UserLogin> findAllUser() {
		// TODO Auto-generated method stub
		List<UserLogin> user = new ArrayList<UserLogin>();
		Session session = sessionFactory.openSession();
		user = session.createQuery("From com.crud.rest.beans.UserLogin").list();
		  session.close();
		return user;
	}


	@Override
	public boolean isUserExist(UserLogin user) {
		// TODO Auto-generated method stub
		return ((findByEmailId(user.getEmailId())!=null));
	}

	/* (non-Javadoc)
	 * @see com.crud.rest.dao.UserDao#findByEmailId(java.lang.String)
	 */
	@Override
	public UserLogin findByEmailId(String emailid) {
		// TODO Auto-generated method stub
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		UserLogin user= new UserLogin();
		
		String hql = "from com.crud.rest.beans.UserLogin where emailid like '%"+emailid+"%'";
		
		try {
			Query query = session.createQuery(hql);
			user = (UserLogin) query.uniqueResult();
			transaction.commit();
			session.close();
		} catch (Exception e) {
			transaction.rollback();
			session.close();
		}
		return user;
	}

}
