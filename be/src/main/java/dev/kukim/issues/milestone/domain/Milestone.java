package dev.kukim.issues.milestone.domain;

import dev.kukim.issues.common.domain.BaseTimeEntity;
import dev.kukim.issues.issue.domain.Issue;
import java.time.LocalDate;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter @Setter
@Entity
public class Milestone extends BaseTimeEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String title;
	private String description;
	private LocalDate dueDate;
	private boolean isOpen;

	@OneToMany(mappedBy = "milestone")
	private List<Issue> issues;

	public Milestone(Long id, String title, String description, LocalDate dueDate, boolean isOpen) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.isOpen = isOpen;
	}

	public Milestone(String title, String description, LocalDate dueDate) {
		this(null, title, description, dueDate, true);
	}

	public void update(String title, String description, LocalDate dueDate, Boolean open) {
		if (title != null) {
			this.title = title;
		}
		if (description != null) {
			this.description = description;
		}
		if (dueDate != null) {
			this.dueDate = dueDate;
		}
		if (open != null) {
			this.isOpen = open;
		}
	}
}
