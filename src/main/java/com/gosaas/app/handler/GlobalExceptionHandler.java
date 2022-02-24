package com.gosaas.app.handler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.gosaas.app.constants.ProjectConstants;
import com.gosaas.app.model.ErrorModel;
import com.gosaas.app.model.GenericResponse;
import com.gosaas.app.util.ResponseBuilder;


@RestControllerAdvice
public class GlobalExceptionHandler {

    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @ExceptionHandler(value = Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public GenericResponse handleInternalServerError(Exception ex) {
        log.error("Error: ", ex);
        ErrorModel error = new ErrorModel();
        error.setDetails(ex.getMessage());
        error.setMessage(ProjectConstants.INTERNAL_SERVER_ERROR_MESSAGE);
        error.setErrorCode(500);
        log.error(ProjectConstants.ERROR_MESSAGE, ex);
        return ResponseBuilder.generateResponse(error, false);

    }
}
