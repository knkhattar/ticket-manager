package com.kkcom.tm.login.svc;

import com.kkcom.tm.login.model.AuthStatus;

public interface AuthService {

	public AuthStatus authenticate(String username, String password);

}
