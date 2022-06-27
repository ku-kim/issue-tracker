package dev.kukim.issues.label.domain;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import dev.kukim.issues.label.exception.InvalidBackgroudColorException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.NullAndEmptySource;
import org.junit.jupiter.params.provider.ValueSource;

@DisplayName("BackgroudColorTest 클래스")
class BackgroundColorTest {

	@Nested
	@DisplayName("생성자")
	class Describe_constructor {

		@Nested
		@DisplayName("만약 유효한 RGB 문자열 값이 주어진다면")
		class Context_with_valid_RGB_String {

			@ParameterizedTest
			@ValueSource(strings = {"#FFFFFF", "FFFFFF"})
			@DisplayName("객체를 반환한다")
			void It_returns_a_valid_Object1(String hexString) {
				BackgroundColor backgroundColor = new BackgroundColor(hexString);

				assertThat(backgroundColor.getBackgroundColor()).isEqualTo("FFFFFF");
			}
		}

		@Nested
		@DisplayName("만약 유효하지 않은 RGB 문자열 값이 주어진다면")
		class Context_with_invalid_RGB_String {

			@ParameterizedTest
			@NullAndEmptySource
			@ValueSource(strings = {"#FFFFFFF", "#FF"})
			@DisplayName("예외를 발생시킨다")
			void It_throws(String hexString) {
				assertThatThrownBy(() -> new BackgroundColor("hexString")).isInstanceOf(
					InvalidBackgroudColorException.class);
			}

		}
	}
}
