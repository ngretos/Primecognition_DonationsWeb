package ngretos.donations.model;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

import org.hibernate.annotations.NamedQueries;
import org.hibernate.annotations.NamedQuery;

@Entity
@Table(name = "\"Donation\"")
@NamedQueries({@NamedQuery(name = Donation.FETCH_ALL, query = "SELECT d FROM Donation d"), 
				@NamedQuery(name = Donation.COUNT, query = "SELECT count(d) FROM Donation d")})

@XmlRootElement(name = "donation")
public class Donation implements Serializable {
  private static final long serialVersionUID = 1L;
  
  public static final String FETCH_ALL = "fetchAll";
  public static final String COUNT = "count";
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "\"Id\"")
  private Long id;
  
  @Column(name = "\"Name\"")
  private String name;
  
  @Column(name = "\"Surname\"")
  private String surname;
  
  @Column(name = "\"Amount\"")
  private BigDecimal amount;
  
  @Column(name = "\"Currency\"")
  private Byte currency;
  
  public Donation() {}
  
  public Donation(String name, String surname, BigDecimal amount, Byte currency) {
    this.amount = amount;
    this.currency = currency;
    this.name = name;
    this.surname = surname;
  }
  
  public Long getId() {
    return this.id;
  }
  
  @XmlElement
  public void setId(Long id) {
    this.id = id;
  }
  
  public String getName() {
    return this.name;
  }
  
  @XmlElement
  public void setName(String name) {
    this.name = name;
  }
  
  public String getSurname() {
    return this.surname;
  }
  
  @XmlElement
  public void setSurname(String surname) {
    this.surname = surname;
  }
  
  public BigDecimal getAmount() {
    return this.amount;
  }
  
  @XmlElement
  public void setAmount(BigDecimal amount) {
    this.amount = amount;
  }
  
  public Byte getCurrency() {
    return this.currency;
  }
  
  @XmlElement
  public void setCurrency(Byte currency) {
    this.currency = currency;
  }
}
