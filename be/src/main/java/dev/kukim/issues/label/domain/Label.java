package dev.kukim.issues.label.domain;

import dev.kukim.issues.common.domain.BaseTimeEntity;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Label extends BaseTimeEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Embedded
	private Title title;

	@Embedded
	private Description description;

	@Embedded
	private BackgroundColor backgroundColor;

	public Label(Long id, String title, String description, String backgroundColor) {
		this.id = id;
		this.title = new Title(title);
		this.description = new Description(description);
		this.backgroundColor = new BackgroundColor(backgroundColor);
	}

	public Label(String title, String description, String backgroundColor) {
		this(null, title, description, backgroundColor);
	}

	public Long getId() {
		return id;
	}

	public String getTitle() {
		return title.getTitle();
	}

	public String getDescription() {
		return description.getDescription();
	}

	public String getBackgroundColor() {
		return backgroundColor.getBackgroundColor();
	}


	public void update(String title, String description, String backgroundColor) {
		// TODO 리팩토링 필요
		if (title != null) {
			this.title = new Title(title);
		}
		if (description != null) {
			this.description = new Description(description);
		}
		if (backgroundColor != null) {
			this.backgroundColor = new BackgroundColor(backgroundColor);
		}
	}
}
