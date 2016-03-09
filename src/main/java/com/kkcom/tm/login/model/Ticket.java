package com.kkcom.tm.login.model;

import org.springframework.stereotype.Component;

@Component
public class Ticket {
	String id;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getSummary() {
		return summary;
	}
	public void setSummary(String summary) {
		this.summary = summary;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getAssignedToId() {
		return assignedToId;
	}
	public void setAssignedToId(String assignedToId) {
		this.assignedToId = assignedToId;
	}
	String summary;
	String description;
	String assignedToId;
}
