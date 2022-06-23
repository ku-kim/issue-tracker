package dev.kukim.issues.user.auth.controller.response;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class GithubUserResponse {

	private Long id;

	private String name;

	private String email;

	private String avatarUrl;

	private GithubUserResponse(Long id, String name, String email, String avatarUrl) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.avatarUrl = avatarUrl;
	}

	public static GithubUserResponse of(Long id, String name, String email, String avatarUrl) {
		return new GithubUserResponse(id, name, email, avatarUrl);
	}
}
