package com.kkcom.tm.login.controller;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/users")
public class UserController {

	@RequestMapping(value = "/getUser/{userId}", method = RequestMethod.GET)
	public @ResponseBody String getUser(@PathVariable String userId) {

		return "{'test':'test'}";

	}
	
	@PostConstruct
	public void init() {
		System.out.println("UserController initialized ::");
	}
	
}