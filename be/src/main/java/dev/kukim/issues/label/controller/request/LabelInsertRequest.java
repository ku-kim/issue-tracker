package dev.kukim.issues.label.controller.request;

import javax.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LabelInsertRequest {

	@NotEmpty
	private String title;

	private String description;

	@NotEmpty
	private String backgroundColor;

}
