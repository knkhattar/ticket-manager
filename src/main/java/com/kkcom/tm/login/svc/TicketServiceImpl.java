package com.kkcom.tm.login.svc;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kkcom.tm.login.model.AuthStatus;
import com.kkcom.tm.login.model.Ticket;

@Service
public class TicketServiceImpl implements TicketService {

	private static Map<String, Ticket> tickets = new HashMap<String, Ticket>();

	static {
		Ticket ticket1 = new Ticket();
		ticket1.setId("1");
		ticket1.setSummary("Test Summary");
		ticket1.setDescription("Test Description");
		tickets.put("1", ticket1);

		Ticket ticket2 = new Ticket();
		ticket2.setId("2");
		ticket2.setSummary("Test Summary 2");
		ticket2.setDescription("Test Description 2");
		tickets.put("2", ticket2);

		Ticket ticket3 = new Ticket();
		ticket3.setId("3");
		ticket3.setSummary("Test Summary 3");
		ticket3.setDescription("Test Description 3");
		tickets.put("3", ticket3);

	}

	public Ticket getTicketDetail(String ticketId) {
		return TicketServiceImpl.tickets.get(ticketId);
	}

	public List<Ticket> getTickets(String userId) {
		List<Ticket> list = new ArrayList<Ticket>(TicketServiceImpl.tickets.values());
		return list;

	}

	@Override
	public void addTicket(Ticket ticket) {
		// TODO Auto-generated method stub
		TicketServiceImpl.tickets.put(ticket.getId(), ticket);

	}

	@Override
	public void updateTicket(Ticket ticket) {
		// TODO Auto-generated method stub
		TicketServiceImpl.tickets.put(ticket.getId(), ticket);

	}

	@Override
	public void deleteTicket(String ticketId) {
		// TODO Auto-generated method stub
		TicketServiceImpl.tickets.remove(ticketId);

	}
}
