package dev.kukim.issues.user.auth.controller.response;


import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class LoginResponse {

	private String accessToken;

	private String name;

	private String email;

	private String avatarUrl;

}
