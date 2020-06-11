package ngretos.donations.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import ngretos.donations.model.Donation;

@Transactional(propagation = Propagation.REQUIRED)
public class DonationsDao {
	@PersistenceContext
	EntityManager em;

	public List<Donation> fetchAll() {
		TypedQuery<Donation> donationsQuery = this.em.createNamedQuery(Donation.FETCH_ALL, Donation.class);
		return donationsQuery.getResultList();
	}

	public List<Donation> fetchPage(String filter, String orderBy, byte pageNumber, byte pageSize) {
		String sql = "select d from Donation d";
		
		if(!filter.isEmpty())
			sql += " where " + filter;
		
		if(!orderBy.isEmpty())
			sql += " " + orderBy; 

		TypedQuery<Donation> donationsQuery = this.em.createQuery(sql, Donation.class);
		donationsQuery.setFirstResult((pageNumber - 1)*pageSize + 1);
		donationsQuery.setMaxResults(pageSize);
		
		return donationsQuery.getResultList();
	}

	public void save(Donation donation) {
		this.em.persist(donation);
	}

	public Long count() {
		TypedQuery<Long> countQuery = this.em.createNamedQuery(Donation.COUNT, Long.class);
		
		return countQuery.getSingleResult();
	}
}
