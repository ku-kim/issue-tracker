package dev.kukim.issues.label.domain;

import dev.kukim.issues.label.exception.InvalidBackgroudColorException;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Embeddable
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class BackgroundColor {

	@Column
	private String backgroundColor;

	public BackgroundColor(String hex) {
		try {
			checkNull(hex);
			backgroundColor = hexToColor(hex);
		} catch (IllegalArgumentException e) {
			throw new InvalidBackgroudColorException();
		}
	}

	private void checkNull(String hex) {
		if (Objects.isNull(hex) || hex.isBlank()) {
			throw new InvalidBackgroudColorException();
		}
	}

	/**
	 * 16진수 문자열이 RGB 컬러의 유효범위인지 체크하고 문자열을 리턴합니다.
	 * @param hex (i.e. #FFFFFF or FFFFFF)
	 * @return "FFFFFF"
	 */
	private String hexToColor(String hex) {
		hex = hex.replace("#", "");
		if (hex.length() != 6) {
			throw new IllegalArgumentException();
		}

		checkColor(Integer.valueOf(hex.substring(0, 2), 16),
			Integer.valueOf(hex.substring(2, 4), 16),
			Integer.valueOf(hex.substring(4, 6), 16));
		return hex;
	}

	private void checkColor(Integer red, Integer green, Integer blue) {
		if (red < 0 || red > 255 ||
			green < 0 || green > 255 ||
			blue < 0 || blue > 255) {
			throw new IllegalArgumentException();
		}
	}
}
