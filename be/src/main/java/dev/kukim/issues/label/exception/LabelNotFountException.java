package dev.kukim.issues.label.exception;

import dev.kukim.issues.common.exception.ElementNotFoundException;

public class LabelNotFountException extends ElementNotFoundException {

	public LabelNotFountException() {
		super("마일스톤을 찾을 수 없습니다.");
	}
}
