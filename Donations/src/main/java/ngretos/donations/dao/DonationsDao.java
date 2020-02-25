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
    TypedQuery<Donation> donationsQuery = this.em.createNamedQuery("findAll", Donation.class);
    return donationsQuery.getResultList();
  }
  
  public void save(Donation donation) {
    this.em.persist(donation);
  }
}
