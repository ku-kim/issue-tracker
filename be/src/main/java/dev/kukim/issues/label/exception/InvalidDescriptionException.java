package dev.kukim.issues.label.exception;

public class InvalidDescriptionException extends IllegalArgumentException{

	public InvalidDescriptionException(int limitLength) {
		super("설명이 최대 길이를 넘었습니다. : " + limitLength + "이하");
	}

}

