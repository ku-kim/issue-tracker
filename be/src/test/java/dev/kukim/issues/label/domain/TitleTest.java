package dev.kukim.issues.label.domain;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import dev.kukim.issues.label.exception.InvalidTitleException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.NullAndEmptySource;
import org.junit.jupiter.params.provider.ValueSource;

@DisplayName("TitleTest 클래스")
class TitleTest {

	@Nested
	@DisplayName("생성자")
	class Describe_constructor {

		@Nested
		@DisplayName("만약 유효한 title String이 주어진다면")
		class Context_with_valid_string {

			@Test
			@DisplayName("객체를 리턴한다")
			void It_returns_a_valid_object() {
				String titleData = "이 라벨은 새로운 기능 추가에 대한 라벨입니다.";

				Title title = new Title(titleData);

				assertThat(title.getTitle()).isEqualTo(titleData);
			}
		}

		@Nested
		@DisplayName("만약 유효하지 않은 description이 주어진다면")
		class Context_with_invalid_values {

			@ParameterizedTest
			@NullAndEmptySource
			@ValueSource(strings = {"  ", "250 제한이 넘는 문자열 555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555"})
			@DisplayName("예외를 던진다")
			void It_throws(String descriptionData) {
				assertThatThrownBy(() -> new Title(descriptionData))
					.isInstanceOf(InvalidTitleException.class);
			}
		}
	}

}
