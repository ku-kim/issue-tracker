package dev.kukim.issues.user.user.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Entity
public class User {

	@Id
	private Long id;

	@Column(nullable = false)
	private String name;

	@Column(length = 255)
	private String email;

	@Column(length = 1000)
	private String avatarUrl;

}
