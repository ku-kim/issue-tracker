package dev.kukim.issues.milestone.controller.request;

import java.time.LocalDate;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter @Setter
public class MilestoneUpdateRequest {

	private String title;

	private String description;

	private LocalDate dueDate;

	private Boolean open;

	private MilestoneUpdateRequest(String title, String description, LocalDate dueDate,
		Boolean open) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.open = open;
	}

	public static MilestoneUpdateRequest of(String title, String description, LocalDate dueDate, Boolean open) {
		return new MilestoneUpdateRequest(title, description, dueDate, open);
	}
}
