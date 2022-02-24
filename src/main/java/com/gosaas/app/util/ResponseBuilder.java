package com.gosaas.app.util;

import java.time.Instant;

import org.springframework.stereotype.Component;

import com.gosaas.app.model.ErrorModel;
import com.gosaas.app.model.GenericResponse;


@Component
public class ResponseBuilder {

	private ResponseBuilder() {

	}

	public static GenericResponse generateResponse(Object data, boolean isSuccess) {
		GenericResponse response = new GenericResponse();
		response.setSuccess(isSuccess);
		response.setTimestamp(Instant.now());
		response.setData(data);
		return response;
	}

	public static GenericResponse generateResponse(ErrorModel error, boolean isSuccess) {
		GenericResponse response = new GenericResponse();
		response.setSuccess(isSuccess);
		response.setTimestamp(Instant.now());
		response.setError(error);
		return response;
	}

}
