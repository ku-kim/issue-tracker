package dev.kukim.issues.label.domain;


import dev.kukim.issues.label.exception.InvalidDescriptionException;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Embeddable
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Description {

	public static final int LIMIT_LENGTH = 500;

	@Column(length = LIMIT_LENGTH)
	private String description;

	public Description(String description) {
		if (description.length() > LIMIT_LENGTH) {
			throw new InvalidDescriptionException(LIMIT_LENGTH);
		}
		this.description = description;
	}

}
