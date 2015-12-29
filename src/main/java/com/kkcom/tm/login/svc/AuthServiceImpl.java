package com.kkcom.tm.login.svc;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kkcom.tm.login.model.AuthStatus;

@Service
public class AuthServiceImpl implements AuthService {

	@Autowired
	AuthStatus authStatus;
	public AuthStatus authenticate(String username, String password) {

		System.out.println("Inside AuthServiceImpl authenticate ::");
		
		if (username.equals("testuser") && password.equals("testpass")) {
			authStatus.setAuthenticated(true);
		} else {
			authStatus.setAuthenticated(false);
		}

		 return authStatus;
	}
}
