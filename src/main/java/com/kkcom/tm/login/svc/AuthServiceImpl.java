package com.kkcom.tm.login.svc;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kkcom.tm.login.model.AuthStatus;

@Service
public class AuthServiceImpl implements AuthService {

	private static Map<String, String> users = new HashMap<String, String>();

	static {
		users.put("testuser", "testpass");
		users.put("testuser1", "testpass1");
		users.put("testuser2", "testpass2");
	}

	public AuthStatus authenticate(String username, String password) {

		System.out.println("Inside AuthServiceImpl authenticate ::");

		AuthStatus authStatus = new AuthStatus();

		if (users.containsKey(username) && users.get(username).equals(password)) {
			authStatus.setAuthenticated(true);
		} else {
			authStatus.setAuthenticated(false);
		}

		return authStatus;
	}
}
