package dev.kukim.issues.label.controller.request;

import javax.validation.constraints.NotEmpty;
import lombok.Getter;

@Getter
public class LabelInsertRequest {

	@NotEmpty
	private final String title;

	private final String description;

	@NotEmpty
	private final String backgroundColor;

	public LabelInsertRequest(String title, String description, String backgroundColor) {
		this.title = title;
		this.description = description;
		this.backgroundColor = backgroundColor;
	}
}
