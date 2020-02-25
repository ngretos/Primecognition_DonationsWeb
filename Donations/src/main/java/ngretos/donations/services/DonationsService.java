package ngretos.donations.services;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.OPTIONS;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import ngretos.donations.dao.DonationsDao;
import ngretos.donations.model.Donation;

@Path("/DonationsService")
public class DonationsService {
  ApplicationContext context = (ApplicationContext)new ClassPathXmlApplicationContext("spring.xml");
  
  DonationsDao donationDAO = (DonationsDao)this.context.getBean("donationsDAO");
  
  @GET
  @Path("/donations")
  @Produces({"application/xml"})
  public List<Donation> getDonations() {
    return this.donationDAO.fetchAll();
  }
  
  @POST
  @Path("/donations")
  @Produces({"application/xml"})
  @Consumes({"application/x-www-form-urlencoded"})
  public String createDonation(@FormParam("name") String name, @FormParam("surname") String surname, @FormParam("amount") BigDecimal amount, @FormParam("currency") String currency, @Context HttpServletResponse servletResponse) throws IOException {
    String result;
    try {
      Donation donation = new Donation(name, surname, amount, currency);
      this.donationDAO.save(donation);
      result = "<result>success</result>";
    } catch (Exception e) {
      result = "<result>failure</result>";
    } 
    return result;
  }
  
  @OPTIONS
  @Path("/users")
  @Produces({"application/xml"})
  public String getSupportedOperations() {
    return "<operations>GET, POST</operations>";
  }
}
