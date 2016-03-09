package com.kkcom.tm.login.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kkcom.tm.login.model.Ticket;
import com.kkcom.tm.login.svc.TicketService;
import com.kkcom.tm.login.svc.TicketServiceImpl;

@Controller
@RequestMapping("/ticket")
public class TicketController {

	@RequestMapping(value = "/getTicket/{ticketId}", method = RequestMethod.GET)
	public @ResponseBody Ticket getTicket(@PathVariable String ticketId) {

		TicketService ticketService = new TicketServiceImpl();

		return ticketService.getTicketDetail(ticketId);

	}

	@RequestMapping(value = "/getTickets/{userId}", method = RequestMethod.GET)
	public @ResponseBody List<Ticket> getTickets(@PathVariable String userId) {

		TicketService ticketService = new TicketServiceImpl();

		return ticketService.getTickets(userId);

	}

	@RequestMapping(value = "/deleteTicket/{ticketId}", method = RequestMethod.GET)
	public @ResponseBody boolean deleteTicket(@PathVariable String ticketId) {

		TicketService ticketService = new TicketServiceImpl();
		ticketService.deleteTicket(ticketId);

		return true;

	}

	@RequestMapping(value = "/updateTicket/{ticketId}/{summary}/{description}", method = RequestMethod.GET)
	public @ResponseBody boolean updateTicket(@PathVariable String ticketId, @PathVariable String summary,
			@PathVariable String description) {

		Ticket myTicket = new Ticket();
		myTicket.setId(ticketId);
		myTicket.setSummary(summary);
		myTicket.setDescription(description);
		TicketService ticketService = new TicketServiceImpl();
		ticketService.updateTicket(myTicket);

		return true;

	}

	@RequestMapping(value = "/addTicket/{ticketId}/{summary}/{description}", method = RequestMethod.GET)
	public @ResponseBody boolean addTicket(@PathVariable String ticketId, @PathVariable String summary,
			@PathVariable String description) {

		Ticket myTicket = new Ticket();
		myTicket.setId(ticketId);
		myTicket.setSummary(summary);
		myTicket.setDescription(description);
		TicketService ticketService = new TicketServiceImpl();
		ticketService.updateTicket(myTicket);

		return true;

	}

}