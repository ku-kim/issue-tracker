package dev.kukim.issues.user.auth.service;

import dev.kukim.issues.user.auth.controller.request.TokenRequest;
import dev.kukim.issues.user.auth.controller.response.GithubUserResponse;
import dev.kukim.issues.user.auth.controller.response.TokenResponse;
import dev.kukim.issues.user.auth.property.GithubProperty;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

@Component
@RequiredArgsConstructor
public class GithubOAuth {

	public static final String TOKEN = "token";
	private final GithubProperty githubProperty;

	public GithubUserResponse getGithubUserResponse(String code) {
		// TODO : 예외처리
		return WebClient.create()
			.get()
			.uri(githubProperty.getUserInfoUri())
			.accept(MediaType.APPLICATION_JSON)
			.header(HttpHeaders.AUTHORIZATION, TOKEN + " " + getToken(code).getAccessToken())
			.retrieve()
			.bodyToMono(GithubUserResponse.class)
			.block();
	}

	private TokenResponse getToken(String code) {
		TokenRequest tokenRequest = TokenRequest.builder()
			.clientId(githubProperty.getClientId())
			.clientSecret(githubProperty.getClientSecret())
			.code(code)
			.build();

		// TODO : 예외처리
		return WebClient.create()
			.post()
			.uri(githubProperty.getAccessTokenUri())
			.accept(MediaType.APPLICATION_JSON)
			.bodyValue(tokenRequest)
			.retrieve()
			.bodyToMono(TokenResponse.class)
			.block();
	}

}
