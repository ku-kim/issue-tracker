package dev.kukim.issues.label.controller.response;

import dev.kukim.issues.label.domain.Label;
import java.time.LocalDateTime;
import lombok.Getter;

@Getter
public class LabelResponse {

	private final Long id;
	private final String title;
	private final String description;
	private final String backgroundColor;
	private final LocalDateTime createdAt;
	private final LocalDateTime updatedAt;

	public static LabelResponse from(Label label) {
		return new LabelResponse(label.getId(),
			label.getTitle(),
			label.getDescription(),
			label.getBackgroundColor(),
			label.getCreatedAt(),
			label.getUpdatedAt());
	}

	public LabelResponse(Long id, String title, String description, String backgroundColor,
		LocalDateTime createdAt, LocalDateTime updatedAt) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.backgroundColor = backgroundColor;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
}
