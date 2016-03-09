package com.kkcom.tm.login.svc;

import java.util.List;

import com.kkcom.tm.login.model.AuthStatus;
import com.kkcom.tm.login.model.Ticket;


public interface TicketService {

	public Ticket getTicketDetail(String ticketId);
	public List<Ticket> getTickets(String userId);
	public void addTicket(Ticket ticket);
	public void updateTicket(Ticket ticket);
	public void deleteTicket(String ticketId);

}
