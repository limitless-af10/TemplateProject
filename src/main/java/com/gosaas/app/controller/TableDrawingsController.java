package com.gosaas.app.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
import com.gosaas.app.util.ResponseBuilder;

@CrossOrigin
@RestController
public class TableDrawingsController {
	private final Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@RequestMapping(method = RequestMethod.POST, value = "/executeJob")
	public ResponseEntity<GenericResponse> executeJob(@RequestHeader("Authorization") String authorization,
			@RequestBody RequestBodyModel body) throws Exception {
		Object data = null;
		HttpStatus statusCode = HttpStatus.OK;

		//TODO 
		//data = your service();
		GenericResponse genericResponse = ResponseBuilder.generateResponse(data, true);
		ResponseEntity<GenericResponse> response = new ResponseEntity<GenericResponse>(genericResponse, statusCode);

		return response;

	}
}
