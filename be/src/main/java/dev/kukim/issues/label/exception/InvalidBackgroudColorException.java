package dev.kukim.issues.label.exception;


public class InvalidBackgroudColorException extends IllegalArgumentException {

	public InvalidBackgroudColorException() {
		super("유효한 배경색상이 아닙니다.");
	}
}
