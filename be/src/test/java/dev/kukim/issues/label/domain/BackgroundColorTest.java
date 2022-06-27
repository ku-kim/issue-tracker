package dev.kukim.issues.label.domain;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import dev.kukim.issues.label.exception.InvalidBackgroudColorException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

@DisplayName("BackgroudColorTest 클래스")
class BackgroundColorTest {

	@Nested
	@DisplayName("생성자")
	class Describe_constructor {

		@Nested
		@DisplayName("만약 유효한 RGB 문자열 값이 주어진다면")
		class Context_with_valid_RGB_String {

			@Test
			@DisplayName("객체를 반환한다")
			void It_returns_a_valid_Object1() {
				BackgroundColor backgroundColor = new BackgroundColor("#FFFFFF");

				assertThat(backgroundColor.getBackgroundColor()).isEqualTo("FFFFFF");
			}

			@Test
			@DisplayName("객체를 반환한다")
			void It_returns_a_valid_Object2() {
				BackgroundColor backgroundColor = new BackgroundColor("FFFFFF");

				assertThat(backgroundColor.getBackgroundColor()).isEqualTo("FFFFFF");
			}
		}

		@Nested
		@DisplayName("만약 null이 주어진다면")
		class Context_with_null {

			@Test
			@DisplayName("예외를 발생시킨다")
			void It_throws() {
				assertThatThrownBy(() -> new BackgroundColor(null)).isInstanceOf(
					InvalidBackgroudColorException.class);
			}
		}

		@Nested
		@DisplayName("만약 유효하지 않은 RGB 문자열 값이 주어진다면")
		class Context_with_invalid_RGB_String {

			@Test
			@DisplayName("예외를 발생시킨다")
			void It_throws1() {
				assertThatThrownBy(() -> new BackgroundColor("#FFFFFFFF")).isInstanceOf(
					InvalidBackgroudColorException.class);
			}

			@Test
			@DisplayName("예외를 발생시킨다")
			void It_throws2() {
				assertThatThrownBy(() -> new BackgroundColor("#FFFF")).isInstanceOf(
					InvalidBackgroudColorException.class);
			}
		}
	}
}
