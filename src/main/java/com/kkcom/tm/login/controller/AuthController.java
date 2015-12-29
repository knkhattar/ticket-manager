package com.kkcom.tm.login.controller;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kkcom.tm.login.model.AuthStatus;
import com.kkcom.tm.login.svc.AuthService;
import com.kkcom.tm.login.svc.AuthServiceImpl;

@Controller
@RequestMapping("/auth")
public class AuthController {

	@Autowired
	AuthService authService;
	
	public AuthService getAuthService() {
		return authService;
	}

	public void setAuthService(AuthService authService) {
		this.authService = authService;
	}

	@RequestMapping(value = "{name}/{password}", method = RequestMethod.GET)
	public @ResponseBody
	AuthStatus getAuthStatusInJSON(@PathVariable String name,
			@PathVariable String password) {
		
		System.out.println("Inside getAuthStatusInJSON ::");

		return authService.authenticate(name, password);

	}

	@PostConstruct
	public void init() {
		System.out.println("AuthController initialized ::");
	}

}