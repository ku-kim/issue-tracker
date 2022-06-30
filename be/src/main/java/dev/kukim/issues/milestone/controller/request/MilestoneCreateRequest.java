package dev.kukim.issues.milestone.controller.request;


import java.time.LocalDate;
import javax.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@Getter @Setter
public class MilestoneCreateRequest {

	@NotEmpty
	private String title;

	private String description;

	private LocalDate dueDate;

	public MilestoneCreateRequest(String title, String description, LocalDate dueDate) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
	}
	
}
