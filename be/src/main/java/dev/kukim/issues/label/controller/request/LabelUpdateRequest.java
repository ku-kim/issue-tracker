package dev.kukim.issues.label.controller.request;

import lombok.Getter;

@Getter
public class LabelUpdateRequest {

	private final String title;

	private final String description;

	private final String backgroundColor;

	public LabelUpdateRequest(String title, String description, String backgroundColor) {
		this.title = title;
		this.description = description;
		this.backgroundColor = backgroundColor;
	}
}
