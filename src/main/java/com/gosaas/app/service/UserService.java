package com.gosaas.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.gosaas.app.model.User;

@Service
public class UserService {
	
	private List<User> usersList;
	
	public UserService() {
		usersList = new ArrayList<>();
		usersList.add(new User("Ali", "Fahad"));
	}
	
	public List<User> getUsersList() {
		return this.usersList;
	}
	
	public void addToUsersList(User user) {
		this.usersList.add(user);
	}

}
