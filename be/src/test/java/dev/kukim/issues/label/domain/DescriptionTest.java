package dev.kukim.issues.label.domain;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import dev.kukim.issues.label.exception.InvalidDescriptionException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

@DisplayName("DescriptionTest 클래스")
class DescriptionTest {

	@Nested
	@DisplayName("생성자")
	class Describe_constructor {

	    @Nested
	    @DisplayName("만약 유효한 description String이 주어진다면")
	    class Context_with_valid_string {

	        @Test
	        @DisplayName("객체를 리턴한다")
	        void It_returns_a_valid_object() {
				String descriptionData = "이 라벨은 새로운 기능 추가에 대한 라벨입니다.";

				Description description = new Description(descriptionData);

				assertThat(description.getDescription()).isEqualTo(descriptionData);
			}
	    }

		@Nested
		@DisplayName("만약 유효하지 않은 description이 주어진다면")
		class Context_with_invalid_values {

			@ParameterizedTest
			@ValueSource(strings = {"500 제한이 넘는 문자열 5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555"})
			@DisplayName("예외를 던진다")
			void It_throws(String descriptionData) {
				assertThatThrownBy(() -> new Description(descriptionData))
					.isInstanceOf(InvalidDescriptionException.class);

			}
		}
	}
}
