package dev.kukim.issues.error.controller;

import dev.kukim.issues.common.exception.ElementNotFoundException;
import dev.kukim.issues.common.exception.InvalidSearchRequestParamException;
import dev.kukim.issues.error.controller.response.ErrorResponse;
import dev.kukim.issues.user.auth.exception.AuthorizationException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionControllerAdvice {

	@ExceptionHandler(AuthorizationException.class)
	@ResponseStatus(HttpStatus.UNAUTHORIZED)
	public ErrorResponse authorizationExceptionHandler(
		AuthorizationException authorizationException) {
		return new ErrorResponse(HttpStatus.UNAUTHORIZED,
			authorizationException.getMessage());
	}

	@ExceptionHandler(InvalidSearchRequestParamException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public ErrorResponse invalidSearchRequestParamException(
		InvalidSearchRequestParamException invalidSearchRequestParamException) {
		return new ErrorResponse(HttpStatus.BAD_REQUEST,
			invalidSearchRequestParamException.getMessage());
	}

	@ExceptionHandler(ElementNotFoundException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public ErrorResponse elementNotFoundException(
		ElementNotFoundException elementNotFoundException) {
		return new ErrorResponse(HttpStatus.BAD_REQUEST,
			elementNotFoundException.getMessage());
	}

	@ExceptionHandler(IllegalArgumentException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public ErrorResponse illegalArgumentException(
		IllegalArgumentException illegalArgumentException) {
		return new ErrorResponse(HttpStatus.BAD_REQUEST,
			illegalArgumentException.getMessage());
	}

}
