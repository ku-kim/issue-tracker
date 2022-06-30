package dev.kukim.issues.label.domain;

import dev.kukim.issues.label.exception.InvalidTitleException;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Embeddable
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Title {

	public static final int LIMIT_LENGTH = 250;

	@Column(length = LIMIT_LENGTH)
	private String title;

	public Title(String title) {
		if (Objects.isNull(title) ||
			title.isBlank() ||
			title.length() > LIMIT_LENGTH) {
			throw new InvalidTitleException(LIMIT_LENGTH);
		}
		this.title = title;
	}

}
