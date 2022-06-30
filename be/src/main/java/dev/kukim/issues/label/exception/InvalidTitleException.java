package dev.kukim.issues.label.exception;

public class InvalidTitleException extends IllegalArgumentException {

	public InvalidTitleException(int limitLength) {
		super("제목의 최대 길이를 넘었습니다. : " + limitLength + "이하");

	}
}
