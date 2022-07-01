package dev.kukim.issues.label.controller.request;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LabelUpdateRequest {

	private String title;

	private String description;

	private String backgroundColor;

}
