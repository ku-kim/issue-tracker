package dev.kukim.issues.label.domain;

import dev.kukim.issues.common.domain.BaseTimeEntity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter @Setter
public class Label extends BaseTimeEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String title;

	private String description;

	private String backgroundColor;

	private Label(Long id, String title, String description, String backgroundColor) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.backgroundColor = backgroundColor;
	}

	public static Label of(String title, String description, String backgroundColor) {
		return new Label(null, title, description, backgroundColor);
	}

	public void update(String title, String description, String backgroundColor) {
		// TODO 리팩토링 필요
		if (title != null) {
			this.title = title;
		}
		if (description != null) {
			this.description = description;
		}
		if (backgroundColor != null) {
			this.backgroundColor = backgroundColor;
		}
	}
}
