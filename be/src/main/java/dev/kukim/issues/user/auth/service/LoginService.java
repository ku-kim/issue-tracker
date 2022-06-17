package dev.kukim.issues.user.auth.service;

import dev.kukim.issues.user.auth.controller.request.TokenRequest;
import dev.kukim.issues.user.auth.controller.response.GithubUserResponse;
import dev.kukim.issues.user.auth.controller.response.LoginResponse;
import dev.kukim.issues.user.auth.controller.response.TokenResponse;
import dev.kukim.issues.user.auth.mapper.LoginResponseMapper;
import dev.kukim.issues.user.auth.property.GithubProperty;
import dev.kukim.issues.user.user.domain.User;
import dev.kukim.issues.user.user.domain.repository.UserRepository;
import dev.kukim.issues.user.user.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
@RequiredArgsConstructor
public class LoginService {

	public static final String TOKEN = "token";

	private final GithubProperty githubProperty;
	private final UserRepository userRepository;
	private final LoginTokenGenerator loginTokenGenerator;

	public LoginResponse createToken(String code) {
		GithubUserResponse githubUserResponse = getGithubUserResponse(code);

		User user = findOrCreatUser(githubUserResponse);

		String accessToken = loginTokenGenerator.accessToken(user.getId());

		return LoginResponseMapper.INSTANCE.map(user, accessToken);
	}

	private User findOrCreatUser(GithubUserResponse githubUserResponse) {
		Long findId = githubUserResponse.getId();

		return userRepository.findById(findId).orElseGet(() ->
			userRepository.save(UserMapper.INSTANCE.map(githubUserResponse)));
	}

	private GithubUserResponse getGithubUserResponse(String code) {
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
