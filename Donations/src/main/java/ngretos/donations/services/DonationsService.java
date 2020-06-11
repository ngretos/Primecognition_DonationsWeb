package ngretos.donations.services;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.OPTIONS;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import ngretos.donations.dao.DonationsDao;
import ngretos.donations.model.Donation;

@Path("/DonationsService")
public class DonationsService {
	ApplicationContext context = (ApplicationContext) new ClassPathXmlApplicationContext("spring.xml");

	DonationsDao donationDAO = (DonationsDao) this.context.getBean("donationsDAO");

	@GET
	@Path("/donations/count")
	@Produces(MediaType.APPLICATION_JSON)
	public Long getDonations() {
		Long c = this.donationDAO.count();
		return c;
	}

	@GET
	@Path("/donations/page")
	@Produces({ MediaType.APPLICATION_JSON })
//	@Consumes({ MediaType.APPLICATION_FORM_URLENCODED })
	public List<Donation> getDonations(@QueryParam("filter") String filter, @QueryParam("sortOrder") String sortOrder,
			@QueryParam("pageNumber") Byte pageNumber, @QueryParam("pageSize") Byte pageSize,
			@Context HttpServletResponse servletResponse) throws IOException {
		
		return this.donationDAO.fetchPage(filter, sortOrder, pageNumber, pageSize);
	}

	@POST
	@Path("/donations")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public String createDonation(Donation donation, @Context HttpServletResponse servletResponse) throws IOException {
		String result;
		try {
			this.donationDAO.save(donation);
			result = "{\"result\":\"success\"}";
		} catch (Exception e) {
			result = "{\"result\":\"failed\"}";
		}
		return result;
	}

	@OPTIONS
	@Path("/donations")
	@Produces({ MediaType.APPLICATION_JSON })
	public String getSupportedOperations() {
		return "<operations>GET, POST</operations>";
	}
}
