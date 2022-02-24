package com.gosaas.app.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gosaas.app.model.GenericResponse;
import com.gosaas.app.model.RequestBodyModel;
import com.gosaas.app.model.User;
import com.gosaas.app.service.UserService;
import com.gosaas.app.util.ResponseBuilder;

@CrossOrigin
@RestController
public class UserController {
	
private final Logger log = LoggerFactory.getLogger(this.getClass());

	@Autowired
	UserService userService;
	
	@RequestMapping(method = RequestMethod.POST, value = "/users")
	public ResponseEntity<GenericResponse> fetchUsers(@RequestHeader("Authorization") String authorization,
			@RequestBody RequestBodyModel body) throws Exception {
		Object data = null;
		HttpStatus statusCode = HttpStatus.OK;

		//TODO 
		data = userService.getUsersList();
		GenericResponse genericResponse = ResponseBuilder.generateResponse(data, true);
		ResponseEntity<GenericResponse> response = new ResponseEntity<GenericResponse>(genericResponse, statusCode);

		return response;

	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/addusers")
	public ResponseEntity<GenericResponse> addUsers(@RequestHeader("Authorization") String authorization,
			@RequestBody RequestBodyModel body) throws Exception {
		Object data = null;
		HttpStatus statusCode = HttpStatus.OK;
		System.out.println(body.getAdditionalProperties());
		
		userService.addToUsersList(new User("Muhammad", "Ahmad"));

		//TODO 
		data = null;
		GenericResponse genericResponse = ResponseBuilder.generateResponse(data, true);
		ResponseEntity<GenericResponse> response = new ResponseEntity<GenericResponse>(genericResponse, statusCode);

		return response;

	}

}
