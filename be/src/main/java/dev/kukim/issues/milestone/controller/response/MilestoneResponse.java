package dev.kukim.issues.milestone.controller.response;

import dev.kukim.issues.milestone.domain.Milestone;
import java.time.LocalDate;
import java.time.LocalDateTime;
import lombok.Getter;

@Getter
public class MilestoneResponse {

	private final Long id;
	private final String title;
	private final String description;
	private final LocalDateTime createdAt;
	private final LocalDateTime updatedAt;
	private final LocalDate dueDate;
	private final boolean isOpen;

	private MilestoneResponse(Long id, String title, String description,
		LocalDateTime createdAt, LocalDateTime updatedAt, LocalDate dueDate,
		boolean isOpen) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.dueDate = dueDate;
		this.isOpen = isOpen;
	}

	public static MilestoneResponse from(Milestone milestone) {
		return new MilestoneResponse(milestone.getId(),
			milestone.getTitle(), milestone.getDescription(), milestone.getCreatedAt(),
			milestone.getUpdatedAt(),
			milestone.getDueDate(), milestone.isOpen());
	}
}
