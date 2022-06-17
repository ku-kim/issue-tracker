package dev.kukim.issues.user.auth.controller.response;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class LoginResponse {

	private String accessToken;

	private String name;

	private String email;

	private String avatarUrl;

}
